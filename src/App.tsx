import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
// import { DataContext } from "./ProductContext";
import ProductDetail from "./routes/ProductDetail";
import Products from "./routes/Shop";
import { CartProductItem } from "./routes/Shop";
// import CartProductItem from "./routes/Shop";

interface DataContextInterface {
  product: CartProductItem[];
  setProduct: (product: any) => void;
}

export const DataContext =
  React.createContext<DataContextInterface | null>(null);

const App = () => {
  const [product, setProduct] = useState<CartProductItem[]>();
  const Contextvalue: any = {
    product: product,
    setProduct: setProduct,
  };
  return (
    <div>
      <h1>Header</h1>
      <DataContext.Provider value={Contextvalue}>
        <Router>
          <Routes>
            <Route path="/" caseSensitive={false} element={<Products />} />
            <Route
              path="/products/:productId"
              caseSensitive={false}
              element={<ProductDetail />}
            />
          </Routes>
        </Router>
      </DataContext.Provider>
    </div>
  );
};

export default App;
