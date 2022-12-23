import { createContext } from "react";

export const getCheckedBoolean = (values: number[], id: number): boolean => {
  const isChecked = values?.includes(id);
  return Boolean(isChecked);
};
export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
