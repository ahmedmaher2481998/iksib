import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";

export type formValues = {
  id: number;
  dine_in: boolean;
  pickable: boolean;
  has_varaiations: boolean;
  title: string;
  description: string;
  categories: string[];
  addons: string[];
  //   attributes: { name: string; values: string[] }[];
};
export type formHookType = {
  register: UseFormRegister<formValues>;
  errors: Partial<FieldErrorsImpl<formValues>>;
};
