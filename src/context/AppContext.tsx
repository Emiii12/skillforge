"use client";
import { createContext, useContext, useState } from "react";

interface AppContextProps {
  showModal: boolean;
  toggleShowModal: () => void;
  activeDropdown: string | null;
  toggleDropdown: (id: string) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleShowModal = () => setShowModal(!showModal);

  const toggleDropdown = (id: string) => {
    setActiveDropdown(prevActive => prevActive === id ? null : id);
  };

  return (
    <AppContext.Provider
      value={{
        showModal,
        toggleShowModal,
        activeDropdown, 
        toggleDropdown
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe estar dentro de un AppProvider");
  }
  return context;
};