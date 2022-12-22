import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AddProductPage from "./Pages/AddProductPage";
import AddVariantPage from "./Pages/AddVariantPage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { useAppSelector } from "./store/hooks";
import { selectProduct } from "./store/productSlice";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={"/product"} />} />
          <Route path="/product" element={<AddProductPage />} />
          <Route path="/variant" element={<AddVariantPage />} />
          <Route path="/added" element={<Added />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
const Added = () => {
  const product = useAppSelector(selectProduct);
  console.log(product);
  return <p>{JSON.stringify(product)}</p>;
};
