import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import LoadingError from "./routes/LoadingError";
import ProductDetail from "./routes/ProductDetail";
import Products from "./routes/Shop";
import TestRoute from "./routes/TestRoute";


const App = () => {

  return (
    <div>
      <h1>Header</h1>
   
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

    </div>
  );
};

export default App;
