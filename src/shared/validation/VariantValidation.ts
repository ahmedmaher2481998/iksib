import * as yup from "yup";
import { variantsFormValues } from "../types";
import { yupResolver } from "@hookform/resolvers/yup";

const variantValidationSchema = yup.object({
  variation: yup.array().of(yup.string()).required(),
  // variation_string: yup.string().required("please select variation"),
  cost: yup.number().required("cost is needed"),
  regular_price: yup.number().required("price is needed"),
  sale_price: yup.number().required("sale_price is needed"),
  sku: yup.string().required("sku is needed"),
  barcode: yup.string().required("barcode is needed"),
  inventory: yup
    .array()
    .max(5)
    .of(
      yup.object({
        locationId: yup
          .number()
          .default(Math.random() * 5)
          .required(),
        branch_name: yup.string().default("Brach name").required(),
        quantitiy: yup
          .number()
          .required("please enter at least one location stock"),
      })
    ),
});

export const variantValidationResolver = yupResolver(variantValidationSchema);
