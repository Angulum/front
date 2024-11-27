import Card from "./Card";

const CardGrid = ({ cards = [], onCardClick }) => {
  return (
    <div className="max-w-[80%] mx-auto">
      <div className="grid grid-rows-1 sm:grid-rows-2 lg:grid-rows-3 gap-4 py-4">
        {cards.length > 0 ? (
          cards.map((card) => (
            <Card
              key={card.id}
              property={card}
              onClick={() => onCardClick(card.id)}
            />
          ))
        ) : (
          <div className="text-center text-2xl text-gray-500">
            No se encontraron propiedades
          </div>
        )}
      </div>
    </div>
  );
};

export default CardGrid;
