import { useState } from "react";
import { useUser } from "../../lib/context/useUser";
import Button from "../ui/Button";

const QuestionBox = ({ realEstateId, questions, setQuestions }) => {
    const [question, setQuestion] = useState(""); 
    const [selectedQuestionId, setSelectedQuestionId] = useState(null);
    const [answer, setAnswer] = useState(""); 
    const { user } = useUser();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false); 
    const [isSubmitting, setIsSubmitting] = useState(false); 
    const [isAnswerSubmitting, setIsAnswerSubmitting] = useState(false);
    const [answerErrors, setAnswerErrors] = useState({});

    const onSubmitQuestion = async (e) => {
        e.preventDefault();
        if (!question.trim()) {
            setError("Por favor, ingresa una pregunta válida.");
            return;
        }

        setError("");
        setSuccess(false);
        setIsSubmitting(true);

        try {
            const response = await fetch(
                `${import.meta.env.VITE_BACKEND_URL}/question`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ question, realEstateId }),
                }
            );

            if (!response.ok) throw new Error("Error al enviar la pregunta.");

            const newQuestion = await response.json();

            setQuestions((prevQuestions) => [
                ...prevQuestions,
                { ...newQuestion, answer: "" }, 
            ]);

            setQuestion("");
            setSuccess(true);
        } catch (error) {
            setError("Hubo un problema al enviar tu pregunta. Intenta nuevamente.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const onSubmitAnswer = async () => {
        if (!answer.trim()) {
            setAnswerErrors((prev) => ({
                ...prev,
                [selectedQuestionId]: "Por favor, ingresa una respuesta válida.",
            }));
            return;
        }

        setAnswerErrors((prev) => ({ ...prev, [selectedQuestionId]: "" }));
        setIsAnswerSubmitting(true);

        try {
            const selectedQuestion = questions.find((q) => q.id === selectedQuestionId);

            if (!selectedQuestion) {
                throw new Error("Pregunta seleccionada no encontrada.");
            }

            const payload = {
                id: selectedQuestionId,
                question: selectedQuestion.question,
                answer,
                realEstateId,
            };

            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/question`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${user.token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Error al enviar la respuesta.");
            }

            setQuestions((prevQuestions) =>
                prevQuestions.map((q) =>
                    q.id === selectedQuestionId
                        ? { ...q, answer: answer }
                        : q
                )
            );

            setAnswer(""); 
            setSelectedQuestionId(null); 
        } catch (error) {
            console.error("Error al enviar la respuesta:", error);
            setAnswerErrors((prev) => ({
                ...prev,
                [selectedQuestionId]: "Hubo un problema al enviar tu respuesta. Intenta nuevamente.",
            }));
        } finally {
            setIsAnswerSubmitting(false);
        }
    };

    return (
        <div className="space-y-4">
            <form
                onSubmit={onSubmitQuestion}
                className="grid gap-4 p-4 rounded-md border shadow-sm"
            >
                <label htmlFor="question" className="font-semibold">
                    ¿Tienes alguna pregunta?
                </label>
                <input
                    id="question"
                    type="text"
                    value={question}
                    placeholder="Escribe tu pregunta aquí"
                    onChange={(e) => setQuestion(e.target.value)}
                    className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                {success && (
                    <p className="text-green-500 text-sm">Pregunta enviada con éxito.</p>
                )}
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar pregunta"}
                </Button>
            </form>

            <div className="border-t pt-4">
                <h2 className="font-semibold mb-2">Preguntas:</h2>
                {questions.map((q, index) => (
                    <div key={q.id || `question-${index}`} className="p-2 border-b">
                        <p className="font-semibold">Pregunta: {q.question}</p>
                        {q.answer ? (
                            <p className="text-sm text-gray-700">Respuesta: {q.answer}</p>
                        ) : (
                            <p className="text-sm text-gray-500 mt-2">Sin respuestas aún.</p>
                        )}

                        {user.role === "ADMIN" || user.role === "REALTOR" ? (
                            <div className="mt-2">
                                {q.answer ? (
                                    <p className="text-gray-400 text-sm">
                                        Ya se ha respondido esta pregunta.
                                    </p>
                                ) : selectedQuestionId === q.id ? (
                                    <div className="flex flex-col">
                                        <input
                                            type="text"
                                            value={answer}
                                            onChange={(e) => setAnswer(e.target.value)}
                                            placeholder="Escribe tu respuesta aquí"
                                            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        />
                                        {answerErrors[q.id] && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {answerErrors[q.id]}
                                            </p>
                                        )}
                                        <Button
                                            type="button"
                                            className="mt-2"
                                            onClick={onSubmitAnswer}
                                            disabled={isAnswerSubmitting}
                                        >
                                            {isAnswerSubmitting ? "Enviando..." : "Enviar respuesta"}
                                        </Button>
                                    </div>
                                ) : (
                                    <Button
                                        type="button"
                                        onClick={() => setSelectedQuestionId(q.id)}
                                    >
                                        Responder
                                    </Button>
                                )}
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuestionBox;
