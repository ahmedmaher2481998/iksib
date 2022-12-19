import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const productValidationSchema = yup.object({});
export const productValidationResolver = yupResolver(productValidationSchema);
