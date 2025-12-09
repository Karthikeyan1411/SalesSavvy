import { useState } from "react";
import { getUser } from "../../api/adminApi";
import CustomModal from "./CustomModal";

export default function ViewUserModal({ onClose }) {
  const [id, setId] = useState("");
  const [user, setUser] = useState(null);

  async function handleSubmit() {
    const res = await getUser(+id);
    setUser(res);
  }

  return (
    <CustomModal onClose={onClose}>
      <h2>View User</h2>

      {!user && (
        <>
          <input
            type="number"
            placeholder="User ID"
            onChange={(e) => setId(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </>
      )}

      {user && (
        <div className="user-box">
          <p>ID: {user.userId}</p>
          <p>Name: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      )}
    </CustomModal>
  );
}
