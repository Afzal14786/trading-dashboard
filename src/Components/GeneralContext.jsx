import React, { useState, createContext } from "react";
import BuyActionWindow from "./BuyActionWindow";

export const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
    const [onBuySuccessCallback, setOnBuySuccessCallback] = useState(null);

  const openBuyWindow = (uid, callback = null) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setOnBuySuccessCallback(() => callback);
  };

  const closeBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const contextValue = {
    openBuyWindow,
    closeBuyWindow,
    isBuyWindowOpen,
    selectedStockUID,
  };

  return (
    <GeneralContext.Provider value={contextValue}>
      {children}
      {isBuyWindowOpen && (
        <BuyActionWindow
          uid={selectedStockUID}
          onBuySuccessCallback={onBuySuccessCallback}
        />
      )}
    </GeneralContext.Provider>
  );
};
