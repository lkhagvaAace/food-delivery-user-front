import { ReactNode, createContext, useState } from "react";
type ChildrenType = {
  children: ReactNode;
};
type ThemContextType = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};
const iContextState = {
  selectedCategory: "",
  setSelectedCategory: () => {},
};
export const SelectedCategoryContext =
  createContext<ThemContextType>(iContextState);
export const SelectedCategory = ({ children }: ChildrenType) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <SelectedCategoryContext.Provider
      value={{ selectedCategory, setSelectedCategory }}
    >
      {children}
    </SelectedCategoryContext.Provider>
  );
};
