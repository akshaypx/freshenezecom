import React, { useState } from "react";
import MyContext from "./myContext";

interface IMyContextProviderProps {
  children: React.ReactNode;
}

const MyContextProvider = ({ children }: IMyContextProviderProps) => {
  const [mode, setMode] = useState<string>("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  return (
    <MyContext.Provider value={{ mode, toggleMode }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
