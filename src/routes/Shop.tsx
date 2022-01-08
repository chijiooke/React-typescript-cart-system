import { useState, useEffect, useContext } from "react";
import { useQuery } from "react-query";
//components
import { Drawer, Badge, Grid, LinearProgress } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
//styles
import { Wrapper } from "../AppStyles";
import ProductItems from "../products/ProductItems";
import LoadingError from "../routes/LoadingError";
import { DataContext } from "../App";
//context
// import DataContext from '../ProductContext';

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

const Products = () => {
  const { data, isLoading, error } = useQuery<CartProductItem[]>(
    "products",
    getProducts
  );

  const myProductData = useContext(DataContext);
  useEffect(() => {
    if (data !== undefined) {
      myProductData?.setProduct(data);
      console.log("my product", myProductData?.product);
    }
  }, [myProductData, data]);

  const addToCart = (item: CartProductItem) => null;
  // const getTotalItems = () => null;
  // const removeFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <LoadingError />;
  return (
    <Wrapper>
      <Grid container spacing={1}>
        {data?.map((productItem, i) => (
          <Grid item key={i} xs={12} sm={4} md={3}>
            <Link to={`products/${productItem.id}`}>
              <ProductItems item={productItem} addToCart={addToCart} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Products;
