import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type CartitemProps = {
  cartItems?: any;
};

const Cartitem = ({ cartItems }: CartitemProps) => {
  const { photo, productId, name, price, quantity } = cartItems;

  return (
    <div className="cartItem">
      <img src={photo} alt={name} />

      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
        <span>₹{price}</span>
      </article>

      <div>
        <button>-</button>
        <p>{quantity}</p>
        <button>+</button>
      </div>

      <button className="trashBtn">
        <FaTrash />
      </button>
    </div>
  );
};

export default Cartitem;
