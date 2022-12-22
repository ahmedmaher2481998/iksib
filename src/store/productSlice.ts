import {
  productFormValues,
  variantOption,
  variantsFormValues,
} from "../shared/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
interface ProductInterface {
  product: productFormValues;
  variations: variantOption[];
}
const initialState: ProductInterface = {
  product: {
    addons: [{ id: 1, name: "addons", price: 20 }],
    categories: [1, 2],
    description: "description 1 2 3 ",
    dine_in: false,
    has_varaiations: false,
    id: 0,
    pickable: false,
    sub_categories: [2, 3],
    title: "title",
    attributes: [],
    variations: [],
  },
  // too keep track of selected variations outside of the product Obj
  variations: [],
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProductData: (state, action: PayloadAction<productFormValues>) => {
      state.product = { ...action.payload };
      state.variations = action.payload.attributes || [];
      return state;
    },
    addVariationDetails: (state, action: PayloadAction<variantsFormValues>) => {
      state.product.variations?.push(action.payload);
      return state;
    },
    removeVariationDetailsByVariationString: (
      state,
      action: PayloadAction<{ variation_string: string }>
    ) => {
      state.product.variations?.filter((v) => {
        if (v.variation_string !== action.payload.variation_string) return v;
      });
      return state;
    },
  },
});
export const {
  addProductData,
  addVariationDetails,
  removeVariationDetailsByVariationString,
} = productSlice.actions;
export const selectProduct = (state: RootState) => state.productReducer.product;

export default productSlice.reducer;
