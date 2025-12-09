import { useState } from "react";
import { getUser, modifyUser } from "../../api/adminApi";
import CustomModal from "./CustomModal";

export default function ModifyUserModal({ onClose }) {
  const [id, setId] = useState("");
  const [user, setUser] = useState(null);

  async function fetchUser() {
    const res = await getUser(+id);
    setUser(res);
  }

  async function updateUser() {
    const res = await modifyUser(user);
    setUser(res);
  }

  return (
    <CustomModal onClose={onClose}>
      <h2>Modify User</h2>

      {!user && (
        <>
          <input
            type="number"
            placeholder="User ID"
            onChange={(e) => setId(e.target.value)}
          />
          <button onClick={fetchUser}>Get User</button>
        </>
      )}

      {user && (
        <>
          <input
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <input
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            value={user.role}
            onChange={(e) => setUser({ ...user, role: e.target.value })}
          />
          <button onClick={updateUser}>Update</button>
        </>
      )}
    </CustomModal>
  );
}
