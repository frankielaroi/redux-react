import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, addUser } from "./redux/userReducer";
import { setUser } from "./redux/userActions";
import UserForm from "./components/userForm";

const App = () => {
  const users = useSelector((state) => state.users || []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddUser = () => {
    const newUser = { name: "John Doe", email: "john@example.com" };
    dispatch(addUser(newUser));
  };

  return (
    <div>
      <h1>Users:</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
      <UserForm />
    </div>
  );
};

export default App;
