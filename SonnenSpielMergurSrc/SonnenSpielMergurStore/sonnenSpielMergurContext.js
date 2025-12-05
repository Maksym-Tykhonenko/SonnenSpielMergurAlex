import { createContext, useContext, useState } from 'react';

export const StoreContext = createContext();

export const useStore = () => {
  return useContext(StoreContext);
};

export const ContextProvider = ({ children }) => {
  const [isEnabledSpielMergurMusic, setIsEnabledSpielMergurMusic] =
    useState(false);
  const [isEnabledSpielMergurVibration, setIsEnabledSpielMergurVibration] =
    useState(false);

  const spielemergurvalues = {
    setIsEnabledSpielMergurMusic,
    isEnabledSpielMergurMusic,
    setIsEnabledSpielMergurVibration,
    isEnabledSpielMergurVibration,
  };

  return (
    <StoreContext.Provider value={spielemergurvalues}>
      {children}
    </StoreContext.Provider>
  );
};
