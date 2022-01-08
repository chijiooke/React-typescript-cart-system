import React, { useContext } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../App";
import CartProductItem from "./Shop";

const ProductDetail = () => {
  const { productId } = useParams<any>();
  const myProductData = useContext(DataContext);
  const currentProduct = myProductData?.product;

  const cur = currentProduct?.find((el) => el.id.toString() === productId);
  console.log(cur);

  return (
    <div>
      <h1>{productId}</h1>
      <h1>{cur?.price}</h1>
      <img src={cur?.image} alt={cur?.title} />
      <Link to="/">Home</Link>
    </div>
  );
};

export default ProductDetail;
