import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, addUser } from "./redux/userReducer";
import { setUser } from "./redux/userActions";

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
      <h1>Hello, {users.length > 0 ? users[0].name : "Guest"}!</h1>
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default App;
