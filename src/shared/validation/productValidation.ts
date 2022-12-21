import * as yup from "yup";
import { addonType, variantOption } from "../types";
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
  sub_categories: yup
    .array()
    .of(yup.number())
    .required("Please select Sub-catagories"),

  addons: yup
    .array()
    .of(
      yup.object({
        id: yup.number().required("invalid Addons"),
        price: yup.number().required("invalid Addons"),
        name: yup.string().required("invalid Addons"),
      })
    )
    .required("please select one or more addons"),
  attributes: yup.array().when("has_varaiations", {
    is: (value: boolean) => value === true,
    then: yup
      .array()
      .of(
        yup.object({
          name: yup.string().required("invalid option name"),
          values: yup.array().of(yup.string()).notRequired(),
        })
      )
      .required("option is required"),
  }),
  pricing: yup.object().when("has_varaiations", {
    is: (val: boolean) => val === false,
    then: yup
      .object({
        price: yup.number().required("price is missing"),
        salePrice: yup.number().required("Sale price is missing"),
        costPerItem: yup.number().required("cost per item is required"),

        sku: yup.string().notRequired(),
        location: yup
          .object({
            location1: yup.string().required("one location at least needed"),
            location2: yup.string().notRequired(),
            location3: yup.string().notRequired(),
            location4: yup.string().notRequired(),
            location5: yup.string().notRequired(),
          })
          .required("at least on location is needed"),
      })
      .required("Please fill all needed info"),
  }),
});
export const productValidationResolver = yupResolver(productValidationSchema);
export const InitialFormValues = {
  description: "",
  dine_in: false,
  title: "",
};
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
