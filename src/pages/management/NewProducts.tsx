import { useState } from "react";
import AdminSidebar from "../../component/AdminSidebar";

const NewProducts = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [stock, setStock] = useState<number>();
  const [photo, setphoto] = useState<string>("");

  return (
    <div className="adminContainer">
      <AdminSidebar />

      <main className="newProductManagement">
        <article>
          <form>
            <h2>Add New Products</h2>
            <div className="addProductName">
              <label>Product Name</label>
              <input
                required
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="addProductPrice">
              <label>Price</label>
              <input
                required
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div className="addProductDescription">
              <label>Product Description</label>
              <textarea
                required
                placeholder="Description"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div className="addProductStock">
              <label>Stock</label>
              <input
                required
                type="text"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))}
              />
            </div>
            <div className="addProductPhoto">
              <label>Photo</label>
              <input
                type="file"
                value={photo}
                onChange={(e) => setphoto(e.target.value)}
              />
            </div>
          </form>
        </article>
      </main>
    </div>
  );
};

export default NewProducts;
