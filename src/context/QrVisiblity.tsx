import React, { ReactNode, useState } from "react";
import { createContext } from "react";
type ThemContextType = {
  qrVisible: boolean;
  setQrVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const iContextState = {
  qrVisible: false,
  setQrVisible: () => {},
};
type ChildrenType = {
  children: ReactNode;
};
export const QrVisibleContext = createContext<ThemContextType>(iContextState);
export const QrVisiblity = ({ children }: ChildrenType) => {
  const [qrVisible, setQrVisible] = useState<true | false>(false);
  return (
    <QrVisibleContext.Provider value={{ qrVisible, setQrVisible }}>
      {children}
    </QrVisibleContext.Provider>
  );
};
