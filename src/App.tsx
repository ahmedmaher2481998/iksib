import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AddProductPage from "./Pages/AddProductPage";
import AddVariantPage from "./Pages/AddVariantPage";
export const ProductContext = createContext<
  | {
      product: {};
      setProduct: React.Dispatch<React.SetStateAction<{}>>;
    }
  | {}
>({});
function App() {
  const [product, setProduct] = useState({});
  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={"/product"} />} />
          <Route path="/product" element={<AddProductPage />} />
          <Route path="/variant" element={<AddVariantPage />} />
        </Routes>
      </Router>
    </ProductContext.Provider>
  );
}

export default App;
