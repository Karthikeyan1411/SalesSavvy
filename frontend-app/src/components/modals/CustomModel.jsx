import "../../assets/modalStyles.css";

export default function CustomModal({ modalType, onClose, onSubmit, response }) {
  function handleFormSubmit(e) {
    e.preventDefault();

    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());

    onSubmit(data);
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✖</button>

        {/** ---------- MODAL UI SWITCH ---------- */}
        {modalType === "addProduct" && (
          <>
            <h2>Add Product</h2>
            <form className="form-grid" onSubmit={handleFormSubmit}>
              <input name="name" placeholder="Name" />
              <input name="price" type="number" placeholder="Price" />
              <input name="stock" type="number" placeholder="Stock" />
              <input name="categoryId" type="number" placeholder="Category Id" />
              <input name="imageUrl" placeholder="Image URL" />
              <textarea name="description" placeholder="Description" />
              <button className="btn submit">Submit</button>
            </form>
          </>
        )}

        {modalType === "deleteProduct" && (
          <>
            <h2>Delete Product</h2>
            <form className="form-grid" onSubmit={handleFormSubmit}>
              <input name="productId" type="number" placeholder="Product Id" />
              <button className="btn delete">Delete</button>
            </form>
          </>
        )}

        {modalType === "viewUser" && (
          <>
            <h2>View User</h2>
            <form className="form-grid" onSubmit={handleFormSubmit}>
              <input name="userId" type="number" placeholder="User Id" />
              <button className="btn submit">Fetch User</button>
            </form>

            {response?.user && (
              <div className="user-box">
                <p><b>Name:</b> {response.user.username}</p>
                <p><b>Email:</b> {response.user.email}</p>
                <p><b>Role:</b> {response.user.role}</p>
              </div>
            )}
          </>
        )}

        {modalType === "monthlyBusiness" && (
          <>
            <h2>Monthly Business</h2>
            <form className="form-grid" onSubmit={handleFormSubmit}>
              <input name="month" type="number" placeholder="Month" />
              <input name="year" type="number" placeholder="Year" />
              <button className="btn submit">Submit</button>
            </form>

            {response?.monthlyBusiness && (
              <div className="user-box">
                <pre>{JSON.stringify(response.monthlyBusiness, null, 2)}</pre>
              </div>
            )}
          </>
        )}

        {/** Repeat patterns for other modal types... */}
      </div>
    </div>
  );
}
