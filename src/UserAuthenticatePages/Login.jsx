import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const newErrors = {};

    
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }


    if (!password.trim()) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);

  
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (validateFields()) {
      console.log("Logged in with:", { email, password });

      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-sm sm:max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        <form autoComplete="off" onSubmit={handleLogin}>
     
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="flex items-center border-b-2 border-gray-300 mt-2">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-2 text-sm border-none focus:outline-none"
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="flex items-center border-b-2 border-gray-300 mt-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full p-2 text-sm border-none focus:outline-none"
              />
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
     
         <Link to='/'>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none transition duration-300 ease-in-out"
            >
              Login
            </button>
          </div>
          </Link>
        </form>

        <div className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
