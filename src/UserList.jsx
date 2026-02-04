import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = ({ onEdit, refresh }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, [refresh]);   // ✅ refresh add

  const handleDelete = (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (isConfirmed) {
      axios
        .delete(`http://localhost:8080/api/users/${id}`)
        .then(() =>
          setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id))
        )
        .catch((error) => console.error(error));
    } else {
      window.alert("Delete action canceled");
    }
  };

  return (
    <div>
      <h3>User List</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
        {user.name} ({user.email})
        
                    &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => onEdit(user)} className="btn">
              Edit
            </button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => handleDelete(user.id)} className="btn">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
