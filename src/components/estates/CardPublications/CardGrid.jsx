import { useState } from "react";
import Card from "./Card";

const CardGrid = ({ cards = [], onCardClick }) => {
  const [currentPage] = useState(1);
  const cardsPerPage = 5;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className="max-w-[80%] mx-auto">
      <div className="grid grid-rows-1 sm:grid-rows-2 lg:grid-rows-3 gap-4 py-4">
        {currentCards.map((card) => (
          <Card
            key={card.id}
            property={card}
            onClick={() => onCardClick(card.id)} 
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
