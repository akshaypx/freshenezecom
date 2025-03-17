import { createContext } from "react";

export interface IMyContext {
  mode: string;
  toggleMode: () => void;
}

const MyContext = createContext<IMyContext | null>(null);

export default MyContext;
