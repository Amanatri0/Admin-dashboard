import { useState } from "react";
import AdminSidebar from "../../component/AdminSidebar";
import type { OrderItemType, OrderType } from "../../types";

const img =
  "https://yamahamusicstore.in/products-images/enlarge-image/VDN7140.webp?v=1761410324";

const orderItems: OrderItemType[] = [
  {
    name: "Yamaha guitar",
    photo: img,
    _id: "123456678",
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

  const {} = order;

  return (
    <div className="adminContainer">
      <AdminSidebar />

      <main className="transactionManagement">Transactions</main>
    </div>
  );
};

export default TransactionManagement;
