import Button from "@material-ui/core/Button";
import { CartProductItem } from "../App";
import { Wrapper } from "./ProductItemStyles";

type Props = {
  item: CartProductItem;
  addToCart: (item: CartProductItem) => void;
};

const ProductItems: React.FC<Props> = ({ item, addToCart }) => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>

      <Button onClick={() => addToCart(item)}>add to cart</Button>
    </Wrapper>
  );
};

export default ProductItems;
