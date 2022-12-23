import { productFormValues, variantsFormValues } from "../shared/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
interface ProductInterface {
  product: productFormValues;
  variations: {
    name: string;
    value: string;
  }[];
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
    productVariations: [],
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

      return state;
    },
    addVariationDetails: (state, action: PayloadAction<variantsFormValues>) => {
      if (state.product.productVariations) {
        state.product.productVariations.push(action.payload);
      } else {
        state.product.productVariations = [action.payload];
      }
      return state;
    },
    removeVariationDetailsByVariationString: (
      state,
      action: PayloadAction<string>
    ) => {
      state.product.productVariations = state.product.productVariations?.filter(
        (v) => {
          return v.variation_string !== action.payload;
        }
      );
      return state;
    },
    addSelectedVariation: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const option = state.variations.find(
        (i) => i.name === action.payload.name
      );
      if (!option) {
        state.variations.push(action.payload);
      } else {
        state.variations.forEach((i) => {
          if (i.name === action.payload.name) {
            i.value = action.payload.value;
          }
        });
      }

      return state;
    },
    flushVariations: (state) => {
      state.variations = [];
      return state;
    },
  },
});
export const {
  addProductData,
  addVariationDetails,
  removeVariationDetailsByVariationString,
  addSelectedVariation,
  flushVariations,
} = productSlice.actions;
export const selectProduct = (state: RootState) => state.productReducer.product;
export const selectVariations = (state: RootState) =>
  state.productReducer.variations;
export default productSlice.reducer;
