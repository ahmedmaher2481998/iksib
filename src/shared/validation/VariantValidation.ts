import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const variantValidationSchema = yup.object({
  variation: yup.array().of(yup.string()).required(),
  // variation_string: yup.string().required("please select variation"),
  cost: yup
    .number()
    .typeError("cost must be a number")
    .required("cost is needed"),
  regular_price: yup
    .number()
    .typeError("price must be a number")
    .required("price is needed"),
  sale_price: yup
    .number()
    .typeError("sale price must be a number")
    .required("sale price is needed"),
  sku: yup.string().typeError("sku must be a string").required("sku is needed"),
  barcode: yup
    .string()
    .typeError("barcode must be a string")
    .default("x21-xcv-231-asd")
    .required("barcode is needed"),
  inventory: yup
    .object({
      location1: yup
        .number()
        .typeError("cost must be a number")
        .required("at least one inventory is needed"),
      location2: yup
        .number()
        .typeError("cost must be a number")
        .default(0)
        .notRequired(),
      location3: yup
        .number()
        .typeError("cost must be a number")
        .default(0)
        .notRequired(),
      location4: yup
        .number()
        .typeError("cost must be a number")
        .default(0)
        .notRequired(),
      location5: yup
        .number()
        .typeError("cost must be a number")
        .default(0)
        .notRequired(),
    })
    .required("inventory is needed"),
});

export const variantValidationResolver = yupResolver(variantValidationSchema);
