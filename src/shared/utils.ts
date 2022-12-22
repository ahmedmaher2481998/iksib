import { createContext } from "react";

export const getCheckedBoolean = (values: number[], id: number): Boolean => {
  const isChecked = values?.includes(id);
  return Boolean(isChecked);
};
