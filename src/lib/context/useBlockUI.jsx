/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";

const BlockUIContext = createContext();

export const BlockUIProvider = ({ children }) => {
  const [isBlocked, setIsBlocked] = useState(false);
  const [message, setMessage] = useState("Loading...");

  const blockUI = (message = "Loading...") => {
    setMessage(message);
    setIsBlocked(true);
  };
  const unblockUI = () => setIsBlocked(false);

  return (
    <BlockUIContext.Provider value={{ isBlocked, blockUI, unblockUI }}>
      {children}
      {isBlocked && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-[1000]">
          <div className="text-center">
            <div className="loader border-t-4 border-blue-500 rounded-full w-16 h-16 mx-auto animate-spin"></div>
            <p className="text-white mt-4">{message}</p>
          </div>
        </div>
      )}
    </BlockUIContext.Provider>
  );
};

export const useBlockUI = () => {
  const context = useContext(BlockUIContext);
  if (context === undefined) {
    throw new Error("useBlockUI must be used within a BlockUIProvider");
  }
  return context;
};
