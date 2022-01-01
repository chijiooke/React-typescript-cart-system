import { useState } from "react";
import { useQuery } from "react-query";
//components
import { Drawer, Badge, Grid, LinearProgress } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
//styles
import { Wrapper } from "./AppStyles";
// import Item from "./items/Item";
import ProductItems from "./products/ProductItems";
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
const getProducts = (): Promise<CartProductItem[]> =>
  fetch("https://fakestoreapi.com/products").then((res) => res.json());

const App = () => {
  const { data, isLoading, error } = useQuery<CartProductItem[]>(
    "products",
    getProducts
  );
  console.log(data);

  const getTotalItems = () => null;
  const addToCart = (item: CartProductItem) => null;
  const removeFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <h1>Error</h1>;
  return (
    <Wrapper>
      <Grid container spacing={2}>
        {data?.map((productItem, i) => (
          <Grid item key={i} xs={12} sm={4} md={3}>
            <ProductItems item={productItem} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
