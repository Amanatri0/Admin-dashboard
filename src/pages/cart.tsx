import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import Cartitem from "../component/cartItems";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "adawdwdaw",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnAhfFLQjMjB1jGPFHOVm7Lw6EZ2PZqHNtKA&s",
    price: 2000,
    name: "Guitar",
    quantity: 4,
    stock: 40,
  },
];

const subTotal = 4000;

const tax = Math.round(subTotal * 0.18);

const shippingCharges = 200;

const total = subTotal + tax + shippingCharges;

const discount = total * 0.1;

const Cart = () => {
  const [cupon, setCoupon] = useState<string>("");
  const [isValidCupon, setIsValidCupon] = useState<boolean>(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) {
        setIsValidCupon(true);
      } else {
        setIsValidCupon(false);
      }
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
      setIsValidCupon(false);
    };
  }, [cupon]);

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, idx) => <Cartitem key={idx} cartItems={i} />)
        ) : (
          <h1>Your cart is empty</h1>
        )}
      </main>
      <aside>
        <p>Subtotal : ₹{subTotal}</p>
        <p>Shipping Charges : ₹{shippingCharges}</p>
        <p>Tax : ₹{tax}</p>
        <p>
          Discount : <em> ₹{discount}</em>
        </p>
        <p>
          <b>Total : ₹{total}</b>
        </p>
        <input
          type="text"
          placeholder="Enter a cupon code"
          value={cupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        {cupon &&
          (isValidCupon ? (
            <span className="green">
              ₹{discount} off using the cupon <b>{cupon}</b>{" "}
            </span>
          ) : (
            <span className="red" id="couponText">
              <VscError />
              <span>Invalid Cupon Code</span>
            </span>
          ))}

        {cartItems.length > 0 ? (
          <Link to={"/checkout"} className="payButton">
            Proceed to pay
          </Link>
        ) : null}
      </aside>
    </div>
  );
};

export default Cart;
