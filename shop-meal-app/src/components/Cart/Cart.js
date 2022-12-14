import classes from "./Cart.module.css";
import Modal from "./../UI/Modal";

const Cart = (props) => {
  const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
    (item) => <li>{item.name}</li>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div onClick={props.onHideCart} className={classes.actions}>
        <button className={classes["button-alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
