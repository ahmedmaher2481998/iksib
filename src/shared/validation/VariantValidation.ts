import * as yup from "yup";
import { variantsFormValues } from "../types";
import { yupResolver } from "@hookform/resolvers/yup";

const variantValidationSchema = yup.object({
  variation: yup.array().of(yup.string()).required(),
  // variation_string: yup.string().required("please select variation"),
  cost: yup.number().typeError('cost must be a number').required("cost is needed"),
  regular_price: yup.number().typeError("price must be a number").required("price is needed"),
  sale_price: yup.number().typeError("sale price must be a number").required("sale price is needed"),
  sku: yup.string().typeError("sku must be a string").required("sku is needed"),
  barcode: yup.string().typeError("barcode must be a string").required("barcode is needed"),
  inventory: yup
 .object({
  location1:yup.object({
locationId: yup
    .number()
    .default(Math.floor(Math.random()) * 5)
    .required(),
    branch_name: yup.string().default("Brach name").required(),
    quantitiy: yup
    .number().required("stock is needed")
    
  }).required("at least one location is needed")
  , location2:yup.object({
locationId: yup
    .number()
    .default(Math.floor(Math.random()) * 5)
    .required(),
    branch_name: yup.string().default("Brach name").required(),
    quantitiy: yup
    .number().default(0)
    
  }).notRequired(),location3:yup.object({
locationId: yup
    .number()
    .default(Math.floor(Math.random()) * 5)
    .required(),
    branch_name: yup.string().default("Brach name").required(),
    quantitiy: yup
    .number().default(0)
   
  }).notRequired(),location4:yup.object({
locationId: yup
    .number()
    .default(Math.floor(Math.random()) * 5)
    .required(),
    branch_name: yup.string().default("Brach name").required(),
    quantitiy: yup
    .number().default(0)
  
  }).notRequired(),location5:yup.object({
locationId: yup
    .number()
    .default(Math.floor(Math.random()) * 5)
    .required(),
    branch_name: yup.string().default("Brach name").required(),
    quantitiy: yup
    .number().default(0)
  
  }).notRequired()
}).required('')

})

export const variantValidationResolver = yupResolver(variantValidationSchema);
