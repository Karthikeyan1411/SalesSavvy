import { useState } from "react";
import { addProduct } from "../../api/adminApi";
import CustomModal from "./CustomModal";

export default function AddProductModal({ onClose }) {
  const [data, setData] = useState({
    name: "",
    price: "",
    stock: "",
    categoryId: "",
    imageUrl: "",
    description: "",
  });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
    const finalData = {
      // ...data,
      // price: +data.price,
      // stock: +data.stock,
      // categoryId: +data.categoryId,
      name: data.name,
      price: Number(data.price),
      stock: Number(data.stock),
      categoryId: Number(data.categoryId),
      imageUrl: data.imageUrl,
      description: data.description,
    };

    await addProduct(finalData);
    onClose();
  }

  return (
    <CustomModal onClose={onClose}>
      <h2>Add Product</h2>

      <div className="form-grid">
        <input name="name" placeholder="Name" value={data.name} onChange={handleChange} />
        <input name="price" type="number" placeholder="Price" value={data.price} onChange={handleChange} />
        <input name="stock" type="number" placeholder="Stock" value={data.stock} onChange={handleChange} />
        <input name="categoryId" type="number" placeholder="Category" value={data.categoryId} onChange={handleChange} />
        <input name="imageUrl" placeholder="Image URL" value={data.imageUrl} onChange={handleChange} />

        <textarea
          name="description"
          placeholder="Description"
          value={data.description}
          onChange={handleChange}
        />
      </div>

      <button className="btn submit" onClick={handleSubmit}>
        Submit
      </button>
    </CustomModal>
  );
}
