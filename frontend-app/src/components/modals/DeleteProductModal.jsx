import { useState } from "react";
import { deleteProduct } from "../../api/adminApi";
import CustomModal from "./CustomModal";

export default function DeleteProductModal({ onClose }) {
  const [id, setId] = useState("");

  async function handleDelete() {
    await deleteProduct(+id);
    onClose();
  }

  return (
    <CustomModal onClose={onClose}>
      <h2>Delete Product</h2>

      <input
        className="input"
        type="number"
        placeholder="Product ID"
        onChange={(e) => setId(e.target.value)}
      />

      <button className="btn delete" onClick={handleDelete}>
        Delete
      </button>
    </CustomModal>
  );
}
