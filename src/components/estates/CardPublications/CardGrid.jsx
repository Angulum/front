import { useState } from "react";
import Card from "./Card";

const CardGrid = ({ cards = [] }) => {
  const [currentPage] = useState(1);
  const cardsPerPage = 5;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className="max-w-[80%] mx-auto">
      <div className="grid grid-rows-1 sm:grid-rows-2 lg:grid-rows-3 gap-4 py-4">
        {currentCards.map((card, index) => (
          <Card key={index} property={card} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
