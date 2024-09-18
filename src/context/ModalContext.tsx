import { createContext, useState } from "react";

type ContextType = {
  openSection: boolean;
  setOpenSection: (value: boolean) => void;
  openTheme: boolean;
  setOpenTheme: (value: boolean) => void;
};

interface ModalContextProviderProps {
  children: React.ReactNode;
}

export const ModalContext = createContext<ContextType>({
  openSection: false,
  setOpenSection: () => {},
  openTheme: false,
  setOpenTheme: () => {},
} as ContextType);

export const ModalContextProvider: React.FC<ModalContextProviderProps> = ({
  children,
}) => {
  const [openSection, setOpenSection] = useState(false);
  const [openTheme, setOpenTheme] = useState(false);

  return (
    <ModalContext.Provider
      value={{ openTheme, setOpenTheme, openSection, setOpenSection }}
    >
      {children}
    </ModalContext.Provider>
  );
};
