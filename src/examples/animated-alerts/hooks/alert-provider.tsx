import { PropsWithChildren, useState } from "react";
import { useAlert } from "./useAlert";
import { AlertContext } from "./alert-context";

export const AlertProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [alerts] = useAlert();

  return (
    <AlertContext.Provider value={{ state, dispatch }}>
      {children}
    </AlertContext.Provider>
  );
};
