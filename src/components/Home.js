import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../services/authServices";

const Home = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      {!user && (
        <>
          <Link to="/login">Login</Link>
          <br />
          <Link to="/register">Register</Link>
        </>
      )}

      {user && <Link to="/logout">Logout</Link>}
      {user && <p>User Info: {JSON.stringify(user)}</p>}
    </>
  );
};

export default Home;
