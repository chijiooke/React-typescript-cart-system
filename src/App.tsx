import { useState } from "react";
import { useQuery } from "react-query";
//components
import { Drawer, Badge, Grid, LinearProgress } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
//styles
import { Wrapper } from "./AppStyles";
//types
export type CartProductItem = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  amount: string;
};
// :Promise<CartProductItem[]>
const getProducts = (): Promise<CartProductItem[]> =>
  fetch("https://fakestoreapi.com/products").then((res) => res.json());

const App = () => {
  const { data, isLoading, error } = useQuery<CartProductItem[]>(
    "products",
    getProducts
  );
  // console.log(data);

  const getTotalItems = () => null;
  const handleAddToCart = () => null;
  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  return <Wrapper>{data?.map((data, i)=><div key={i}>ok</div>)}</Wrapper>;
};

export default App;
