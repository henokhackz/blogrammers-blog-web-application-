import Signup from "./Signup";
import Login from "./Login";
import { useState } from "react";

const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 bg-slate-50 border border-slate-300 rounded-lg shadow-md max-w-md mx-auto my-8">
      <div className="w-full p-4 transition-transform duration-500 ease-in-out transform hover:scale-105">
        {isSignup ? <Login /> : <Signup />}
      </div>
      {/* Add any additional UI elements like a forgot password link or social media icons here */}
      <div className="w-full p-5 ">
        <p>
          already have an acount ?{" "}
          <button
            className="text-blue-700 text-lg"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "signup" : "login "}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
