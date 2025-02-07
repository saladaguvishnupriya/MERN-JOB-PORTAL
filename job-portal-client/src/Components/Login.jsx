import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { getAuth } from "firebase/auth";

const Login = () => {
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = { email, password};
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res) {
          //setEmail(res.email);
          localStorage.setItem('user', JSON.stringify(res));
          navigate("/");
        } else if (res == "notexist") {
          alert("User have not sign up");
        }
      });
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-white">
        <h2
          style={{
            position: "relative",
            bottom: "300px",
            right: "300px",
            transform: "scaleX(-1.5)",
          }}
        >
          {" "}
          <Link to="/" className="text-gray-500 hover:text-gray-900">
            <FaSignOutAlt />
          </Link>
        </h2>

        <div
          className="relative  p-8 rounded-md shadow-md overflow-hidden"
          style={{ display: "flex", height: "420px", width: "350px" }}
        >
          <div className="relative z-10" style={{ width: "270px" }}>
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
                Login
              </h2>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black-300"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-2 block w-full border border-black rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>

              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-black"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 p-2 block w-full border border-black rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-blue hover:bg-blue text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300"
                >
                  Log in
                </button>
                <br />
                <p className="mt-2 text-sm text-gray-400">
                  Don't have an account? Create
                  <Link
                    to="/signup"
                    className="ml-2 text-red-500 hover:underline focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300"
                  >
                    {" "}
                    Signup
                  </Link>
                </p>
              </div>
            </form>
            {/* </form> */}
          </div>

          {/* Backside tilted background */}
        </div>
      </div>
    </div>
  );
};

export default Login;
