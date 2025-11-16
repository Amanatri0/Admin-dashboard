import { FaPlus } from "react-icons/fa";

type ProductCardProps = {
  productId: string;
  name: string;
  price: number;
  stock: number;
  photo: string;
  handler: () => void;
};

const server = "dawdwdwd";

const ProductCard = ({
  productId,
  name,
  price,
  stock,
  photo,
  handler,
}: ProductCardProps) => {
  return (
    <div className="productCard">
      <img src={`${photo}`} alt={name} />
      <p>{name}</p>
      <span>{price}</span>
      <div>
        <button onClick={() => handler()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
