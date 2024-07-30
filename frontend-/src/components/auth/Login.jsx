import { useState } from "react";
import { Navigate } from "react-router-dom";
import endpoints from "../../api/endpoints";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { status, data } = await endpoints.createUser(userData);
      if (status && data) {
        localStorage.setItem("user", data);
        Navigate("/");
      }
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="w-full max-w-sm mx-auto flex flex-col space-y-4"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex flex-col">
        <label htmlFor="email" className="text-xl mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          required
          className="w-full bg-slate-200 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-xl mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          required
          className="w-full bg-slate-200 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full p-3 bg-blue-600 text-xl text-white rounded hover:bg-blue-700 transition-all duration-300"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
