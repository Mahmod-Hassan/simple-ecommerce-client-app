import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const LoginForm = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          localStorage.setItem("user", JSON.stringify(data));
          setError("");
          setUser(data);
          navigate(from, { replace: true });
          toast.success("Logged in successfull");
        } else {
          setError(data.message);
        }
      })
      .catch((error) => console.log(error, "from handleLogin function"));
  };
  return (
    <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md mt-20">
      <div className="px-6 py-4">
        <h3 className="my-5 text-2xl text-blue-600 font-bold">Please Login</h3>

        <form onSubmit={handleLogin}>
          <div className="w-full mt-4">
            <input
              className="border p-2 w-full"
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="w-full mt-4">
            <input
              className="border p-2 w-full"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* error from my erorr state */}
          <p className="text-red-400">{error && <span>{error}</span>}</p>

          <div className="flex items-center justify-between mt-4">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-500">
              Forget Password?
            </a>

            <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Sign In
            </button>
          </div>
        </form>
      </div>

      <div className="flex items-center justify-center py-4 text-center bg-gray-50">
        <span className="text-sm text-gray-600">Don't have an account? </span>

        <Link
          to="/register"
          className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
