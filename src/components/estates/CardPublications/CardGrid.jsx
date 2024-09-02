import { useState } from 'react';   
import Card from './Card';

const CardGrid = ({ cards = [] }) => {
    const [currentPage] = useState(1);
    const cardsPerPage = 5; // Ajusta el número de cards por página

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

    return (
        <div>
            <div className="grid grid-rows-1 sm:grid-rows-2 lg:grid-rows-3 gap-4 p-4">
                {currentCards.map((card, index) => (
                    <Card key={index} property={card} />
                ))}
            </div>
        </div>
    );
};

export default CardGrid;
