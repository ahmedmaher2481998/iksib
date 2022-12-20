import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const productValidationSchema = yup.object({
  id: yup
    .number()
    .default(Math.random() * 100)
    .required("id is required"),
  dine_in: yup.boolean().default(false).notRequired(),
  pickable: yup.boolean().required("check pickup"),
  has_varaiations: yup.boolean().required("please select an option"),
  title: yup.string().required("a Product need a title"),
  description: yup.string().required("please add description"),
  categories: yup.array().of(yup.number()).required("Please select catagories"),
  addons: yup.array().of(yup.string()).required(),
});
export const productValidationResolver = yupResolver(productValidationSchema);
/*
id: number;
  dine_in: boolean;
  pickable: boolean;
  has_varaiations: boolean;
  title: string;
  description: string;
  categories: string[];
  addons: string[];
  attributes: { name: string; values: string[] }[];
*/
