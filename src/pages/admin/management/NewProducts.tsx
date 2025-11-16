import { useState, type ChangeEvent } from "react";
import AdminSidebar from "../../component/AdminSidebar";

const NewProducts = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [stock, setStock] = useState<number>();
  const [description, setDescription] = useState<string>("");
  const [photo, setphoto] = useState<string>("");

  const chnageImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setphoto(reader.result);
        }
      };
    }
  };

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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
            <div className="photoShow">
              <div className="addProductPhoto">
                <label>Photo</label>
                <input
                  className="selectPhoto"
                  required
                  type="file"
                  onChange={chnageImageHandler}
                />
              </div>

              {photo && (
                <img src={photo} alt="New Image" className="showPhoto" />
              )}
            </div>
            <button type="submit" className="submitbtn">
              Create
            </button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default NewProducts;
