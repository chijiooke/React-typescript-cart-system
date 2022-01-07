import Button from "@material-ui/core/Button";
import { CartProductItem } from "../routes/Shop";
import { Wrapper } from "./ProductItemStyles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useState } from "react";

type Props = {
  item: CartProductItem;
  addToCart: (item: CartProductItem) => void;
};
const ProductItems: React.FC<Props> = ({ item, addToCart }) => {
  const [buttonVisibilty, setbuttonVisibilty] = useState(false);
  return (
    <Wrapper
      onMouseEnter={() => setbuttonVisibilty(true)}
      onMouseLeave={() => setbuttonVisibilty(false)}
    >
      <img src={item.image} alt={item.title} />
      <div>
        <p>{item.title}</p>
        <h2>₦{item.price}</h2>
        {/* <h2>₦{item.id}</h2> */}
      </div>

      {/* <Button
        style={{ display: buttonVisibilty ? "block" : "none" }}
        onClick={() => addToCart(item)}
        endIcon={<AddShoppingCartIcon />}
      >
        add to cart
      </Button> */}
    </Wrapper>
  );
};

export default ProductItems;
