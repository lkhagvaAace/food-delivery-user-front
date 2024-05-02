import { invoiceInitial } from "@/types/invoiceInitial";
import { InvoiceType } from "@/types/invoiceType";
import React, { ReactNode, useState } from "react";
import { createContext } from "react";
type ThemContextType = {
  invoice: InvoiceType;
  setInvoice: React.Dispatch<React.SetStateAction<InvoiceType>>;
};
const iContextState = {
  invoice: invoiceInitial,
  setInvoice: () => {},
};
type ChildrenType = {
  children: ReactNode;
};
export const InvoiceContext = createContext<ThemContextType>(iContextState);
export const Invoice = ({ children }: ChildrenType) => {
  const [invoice, setInvoice] = useState<InvoiceType>(invoiceInitial);
  return (
    <InvoiceContext.Provider value={{ invoice, setInvoice }}>
      {children}
    </InvoiceContext.Provider>
  );
};
