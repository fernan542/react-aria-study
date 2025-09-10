import { createContext } from "react";
import { AlertData } from "../alert-data";

export const AlertContext = createContext<AlertData[]>([]);
