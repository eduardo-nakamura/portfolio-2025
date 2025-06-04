import React, { createContext, useState, useContext } from 'react';

interface AppContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext deve ser usado dentro de um AppContextProvider');
  }
  return context;
};

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(getRandomNumber());
  const [darkMode, setDarkMode] = useState(false);
  function getRandomNumber(): number {
    return Math.floor(Math.random() * 6); // Multiplies by (max + 1) to include the max value
  }
  return (
    <AppContext.Provider value={{ count, setCount, darkMode, setDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};