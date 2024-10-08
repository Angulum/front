const UIBlocker = ({ isActive, message = "Loading..." }) => {
  return isActive ? (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-[1000]">
      <div className="text-center">
        <div className="loader border-t-4 border-blue-500 rounded-full w-16 h-16 mx-auto animate-spin"></div>
        <p className="text-white mt-4">{message}</p>
      </div>
    </div>
  ) : null;
};

export default UIBlocker;
