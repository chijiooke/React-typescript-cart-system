import React, { useState } from "react";
import CartProductItem from "./routes/Shop";

const Context = React.createContext<typeof CartProductItem | null>(null);
const ProductContext = (prop: {children:any}) => {
  const [product, setProduct] = useState({});
  return <Context.Provider value={product}>{prop.children}</Context.Provider>;
};

export default ProductContext;
