import { productFormValues } from "../shared/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
interface ProductInterface {
  product: productFormValues;
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
    attributes: [
      { name: "Colors", values: ["red", "green"] },
      { name: "Size", values: ["S", "XL", "L"] },
    ],
  },
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProductData: (state, action: PayloadAction<productFormValues>) => {
      state.product = { ...action.payload };
      return state;
    },
  },
});
export const { addProductData } = productSlice.actions;
export const selectProduct = (state: RootState) => state.productReducer.product;

export default productSlice.reducer;
