import { useState, type ChangeEvent, type FormEvent } from "react";
import AdminSidebar from "../../component/AdminSidebar";

const img =
  "https://yamahamusicstore.in/products-images/enlarge-image/VDN7140.webp?v=1761410324";
const ProductManagement = () => {
  const [name, setName] = useState<string>("Yamaha Guitar");
  const [price, setPrice] = useState<number>(1200);
  const [stock, setStock] = useState<number>(10);
  const [description, setDescription] = useState<string>("Sexy ass guitar");
  const [photo, setphoto] = useState<string>(img);

  const [nameUpdate, setNameUpdate] = useState<string>(name);
  const [priceUpdate, setPriceUpdate] = useState<number>(price);
  const [stockUpdate, setStockUpdate] = useState<number>(stock);
  const [descriptionUpdate, setDescriptionUpdate] =
    useState<string>(description);
  const [photoUpdate, setphotoUpdate] = useState<string>(photo);

  const chnageImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setphotoUpdate(reader.result);
        }
      };
    }
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setName(nameUpdate);
    setPrice(priceUpdate);
    setDescription(descriptionUpdate);
    setStock(stockUpdate);
    setphoto(photoUpdate);
  };

  return (
    <div className="adminContainer">
      <AdminSidebar />

      <main className="newProductManagement">
        <section>
          <strong>Id - abcdefgh</strong>
          <img src={photo} alt="Product" />
          <p>{name}</p>
          {stock > 0 ? (
            <span className="green"> {stock} Available</span>
          ) : (
            <span className="red">Not Available</span>
          )}
          <h3>${price}</h3>
          <p>{description}</p>
        </section>
        <article>
          <form onSubmit={submitHandler}>
            <h2>Update Products</h2>
            <div className="addProductName">
              <label>Product Name</label>
              <input
                required
                type="text"
                placeholder="Name"
                value={nameUpdate}
                onChange={(e) => setNameUpdate(e.target.value)}
              />
            </div>
            <div className="addProductPrice">
              <label>Price</label>
              <input
                required
                type="number"
                placeholder="Price"
                value={priceUpdate}
                onChange={(e) => setPriceUpdate(Number(e.target.value))}
              />
            </div>
            <div className="addProductDescription">
              <label>Product Description</label>
              <textarea
                required
                placeholder="Description"
                value={descriptionUpdate}
                onChange={(e) => setDescriptionUpdate(e.target.value)}
              />
            </div>
            <div className="addProductStock">
              <label>Stock</label>
              <input
                required
                type="text"
                placeholder="Stock"
                value={stockUpdate}
                onChange={(e) => setStockUpdate(Number(e.target.value))}
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

              {photoUpdate && (
                <img src={photoUpdate} alt="New Image" className="showPhoto" />
              )}
            </div>
            <button type="submit" className="submitbtn">
              Update
            </button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default ProductManagement;
