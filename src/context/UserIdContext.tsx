import React, { ReactNode, useState } from "react";
import { createContext } from "react";

type ThemContextType = {
  userId: String | null;
  setUserId: React.Dispatch<React.SetStateAction<String | null>>;
};

const InitialValue: ThemContextType = {
  userId: "",
  setUserId: () => {},
};

type ChildrenType = {
  children: ReactNode;
};

export const UserIdContext = createContext<ThemContextType>(InitialValue);

export const UserId = ({ children }: ChildrenType) => {
  const [userId, setUserId] = useState<String | null>(null);

  return (
    <UserIdContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserIdContext.Provider>
  );
};
