import { useContext } from "react";
import { Context } from "../Context";
import useHover from "../hooks/useHover";

function CartItem({ item }) {
  const { removeFromCart } = useContext(Context);
  const [hovered, ref] = useHover();
  const cartClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";
  return (
    <div className="cart-item">
      <i
        className={cartClassName}
        onClick={() => removeFromCart(item.id)}
        ref={ref}
      ></i>
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
