import { useState } from "react";
import endpoints from "../../api/endpoints";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { status, data } = await endpoints.createUser(userData);
      if (status === 201 && data) {
        localStorage.setItem("user", data);
        navigate("/");
      }
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="w-full max-w-sm mx-auto flex flex-col space-y-4"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label htmlFor="name" className="text-xl mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your full name"
          required
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          className="w-full bg-slate-200 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-xl mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          placeholder="Enter your email"
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
        Create New Account
      </button>
    </form>
  );
};

export default Signup;
