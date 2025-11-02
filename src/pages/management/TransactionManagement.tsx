import { useState } from "react";
import AdminSidebar from "../../component/AdminSidebar";
import type { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router-dom";

const img =
  "https://yamahamusicstore.in/products-images/enlarge-image/VDN7140.webp?v=1761410324";

const orderItems: OrderItemType[] = [
  {
    _id: "123456678",
    name: "Yamaha guitar",
    photo: img,
    quantity: 4,
    price: 200,
  },
];

const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "Aman",
    address: "Gandhi",
    city: "Guwahati",
    state: "Assam",
    country: "Bharat",
    pinCode: 1231221,
    status: "Processing",
    subtotal: 3000,
    discount: 1000,
    shippingCharges: 0,
    tax: 200,
    total: 3000 + 200 + 0 - 1000,
    orderItems,
    _id: "1w1w1w2sws2",
  });

  const {
    name,
    address,
    city,
    state,
    country,
    pinCode,
    status,
    subtotal,
    discount,
    shippingCharges,
    tax,
    total,
  } = order;

  const updateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delivered",
    }));
  };

  return (
    <div className="adminContainer">
      <AdminSidebar />

      <main className="newProductManagement">
        <section>
          <h2>Order Items</h2>

          {order.orderItems.map((i) => (
            <ProductCard
              name={i.name}
              _id={i._id}
              photo={i.photo}
              price={i.price}
              quantity={i.quantity}
            />
          ))}
        </section>

        <article className="shippingCardInfo">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>
            Address:{" "}
            {`${address} , ${city} , ${state} , ${country} , ${pinCode} `}
          </p>

          <h5>Amount Info</h5>
          <p>Subtotal: {subtotal}</p>
          <p>Shipping Charges: {shippingCharges}</p>
          <p>Tax: {tax}</p>
          <p>Discount: {discount}</p>
          <p>Total: {total}</p>

          <h5>Status Info</h5>
          <p>
            Status:{" "}
            <span
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Processing"
                  ? "red"
                  : "green"
              }
            >
              {status}
            </span>
          </p>

          <button onClick={updateHandler}>Process Status</button>
        </article>
      </main>
    </div>
  );
};

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => (
  <div className="transactionProductCard">
    <img src={photo} alt={name} />

    <Link to={`/product/${_id}`}> {name} </Link>

    <span>
      ${price} X ${quantity} = ${price * quantity}{" "}
    </span>
  </div>
);

export default TransactionManagement;
