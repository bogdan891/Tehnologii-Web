import { useEffect, useState } from "react";
import User from "./User";
import UserForm from "./UserForm";
import "./UserList.css";

const SERVER = "http://localhost:8080";

const UserDetails = ({ user, onBack }) => (
  <div
    className="user-details"
    style={{ border: "2px solid blue", padding: "10px", margin: "10px" }}
  >
    <button onClick={onBack}>Back to the list</button>
    <h2>User details:</h2>
    <p>
      <strong>Username:</strong> {user.username}
    </p>
    <p>
      <strong>Fullname:</strong> {user.fullName}
    </p>
    <p>
      <strong>Type:</strong> {user.type}
    </p>
    <p>
      <strong>Created At:</strong> {new Date(user.createdAt).toLocaleString()}
    </p>
  </div>
);

function UserList(props) {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const getUsers = async () => {
    const response = await fetch(`${SERVER}/users`);
    const data = await response.json();
    setUsers(data);
  };

  const addUser = async (user) => {
    await fetch(`${SERVER}/users`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (selectedUser) {
    return (
      <UserDetails user={selectedUser} onBack={() => setSelectedUser(null)} />
    );
  }

  return (
    <div>
      <div className="user-list">
        {users.map((e) => (
          <div
            key={e.id}
            onClick={() => setSelectedUser(e)}
            style={{ cursor: "pointer" }}
          >
            <User item={e} />
          </div>
        ))}
        <UserForm onAdd={addUser} />
      </div>
    </div>
  );
}

export default UserList;
