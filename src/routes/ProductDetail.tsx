import React from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import CartProductItem from "./Shop";

const ProductDetail = () => {
  const { productId } = useParams();

  
  return (
    <div>
      <h1>{productId}</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default ProductDetail;
