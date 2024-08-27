

const Favorite = ({ favorite, onClick }) => {
  return (
    <button onClick={onClick}>
      {favorite ? '💖' : '🤍'}
    </button>
  );
};

export default Favorite;