import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AddProductPage from "./Pages/AddProductPage";
import AddVariantPage from "./Pages/AddVariantPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={"/product"} />} />
          <Route path="/product" element={<AddProductPage />} />
          <Route path="/variant" element={<AddVariantPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
