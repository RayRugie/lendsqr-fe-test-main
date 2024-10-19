import React, { createContext, useState } from "react";

type AppContextProviderProps = {
  children: React.ReactNode;
};

type AppContextType = {
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  itemsPerPage: number;
  setitemsPerPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  setcurrentPage: React.Dispatch<React.SetStateAction<number>>;
  paginationLimit: number;
  setPaginationLimit: React.Dispatch<React.SetStateAction<number>>;
};

export const AppContext = createContext({} as AppContextType);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [itemsPerPage, setitemsPerPage] = useState(10);
  const [currentPage, setcurrentPage] = useState(1);
  const [paginationLimit, setPaginationLimit] = useState(10);

  return (
    <AppContext.Provider
      value={{
        mobileSidebarOpen: mobileSidebarOpen,
        setMobileSidebarOpen: setMobileSidebarOpen,
        itemsPerPage: itemsPerPage,
        setitemsPerPage: setitemsPerPage,
        currentPage: currentPage,
        setcurrentPage: setcurrentPage,
        paginationLimit: paginationLimit,
        setPaginationLimit: setPaginationLimit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
