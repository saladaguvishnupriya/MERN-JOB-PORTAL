import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaBackspace,
  FaBezierCurve,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaSignOutAlt,
  FaStepBackward,
} from "react-icons/fa";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { email, password,name };

    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        if (res == "exist") {
          alert("User already exists");
        } else if (res == "notexist") {
          navigate("/login");
        }
      });
  };

  let formHandle1 = (e) => {
    e.preventDefault();
    navigate("/alogin");
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
          className="relative   p-8 rounded-md shadow-md overflow-hidden"
          style={{ display: "flex", height: "440px", width: "350px" }}
        >
          <div className="relative z-10" style={{ width: "270px" }}>
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
                Signup
              </h2>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name" className="block text-sm font-medium text-black-200">
              Name
            </label>
            <input
              name="name"
              type="name"
              autoComplete="email"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Name"
            />
          </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black-200"
                >
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-black-200"
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
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-blue hover:bg-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300"
                >
                  Signup
                </button>

                <p className="text-sm text-gray-500 pt-2">
                  Already have an account{" "}
                  <Link
                    to="/login"
                    className="ml-2 text-red-500 hover:underline focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300"
                  >
                    {" "}
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>

          {/* <div className="absolute h-full w-full bg-red-500 transform -skew-y-6 origin-bottom-right"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
