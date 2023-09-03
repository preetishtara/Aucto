import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const login = () => {
  let { handleLoginSubmit } = useContext(AuthContext);
  return (
    <div className="mt-4 m grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center text-white mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
          <input type="email" placeholder="your@email.com" name="emailid" />
          <input type="password" placeholder="password" name="passwordid" />
          <button className="primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default login;
