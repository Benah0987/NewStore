import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const nav = useNavigate();
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // Fetch Users from the API
  useEffect(() => {
    fetch('http://localhost:3400/users') // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users: ', error));
  }, []);

  const loginUser = (username, password) => {
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      setCurrentUser(user);
      nav('/home'); // Redirect to the dashboard after successful login
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Invalid username or password',
      });
    }
  };

  const signupUser = (newUser) => {
    // Simulate creating a new user on the API
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setCurrentUser(newUser);
    nav('/dashboard'); // Redirect to the dashboard after successful signup
    Swal.fire({
      icon: 'success',
      title: 'Signup Successful',
      text: 'You have successfully signed up!',
    });
  };

  const contextData = {
    users,
    currentUser,
    loginUser,
    signupUser,
  };

  return (
    <UserContext.Provider value={contextData}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
