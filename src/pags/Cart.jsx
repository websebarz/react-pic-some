import { useContext, useState } from "react";
import { Context } from "../Context";
import CartItem from "../comps/CartItem";
import PropTypes from "prop-types";

function Cart() {
  const [buttonText, setButtonText] = useState("Place Order");
  const { cartItems, emptyCart } = useContext(Context);
  const totalSum = cartItems.length * 5.99;
  const totalSumDisplay = totalSum.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const itemsInCart = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      console.log("Order Placed");
      setButtonText("Place Order");
      emptyCart();
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {itemsInCart}
      <p className="total-cost">Total: {totalSumDisplay}</p>
      {cartItems.length > 0 && (
        <div className="order-button">
          <button onClick={placeOrder}>{buttonText}</button>
        </div>
      )}
    </main>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default Cart;
