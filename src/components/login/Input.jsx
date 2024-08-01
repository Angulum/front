const LoginInput = ({ type, placeholder, onClick, className }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        onClick={onClick}
      />
    </>
  );
};

export default LoginInput;
