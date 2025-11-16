import { Link } from "react-router-dom";
import ProductCard from "../component/productCard";

const Home = () => {
  const addToCartHandler = () => {};

  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link to={"/search"} className="findMore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="aawdwdawd"
          name="guitar"
          price={12342}
          photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnAhfFLQjMjB1jGPFHOVm7Lw6EZ2PZqHNtKA&s"
          stock={435}
          handler={addToCartHandler}
        />
      </main>
    </div>
  );
};

export default Home;
