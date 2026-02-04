import React, { useState } from "react";
import UserList from "./UserList";
import UserForm from "./UserFrom";
import "./App.css";

const App = () => {
  const [editingUser, setEditingUser] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleSave = () => {
    setEditingUser(null);
    setRefresh(!refresh);
  };

  return (
  <div className="App">
    <div className="container">
      <UserList onEdit={handleEdit} refresh={refresh} />
      <UserForm user={editingUser} onSave={handleSave} />
    </div>
  </div>
);
};

export default App;
