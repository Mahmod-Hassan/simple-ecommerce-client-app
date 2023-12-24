import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Register = () => {
  const navigate = useNavigate("/");
  const { setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInputValue = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(
        "https://simple-ecommerce-server-olive.vercel.app/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        }
      );
      const data = await res.json();
      if (data?._id) {
        localStorage.setItem("user", JSON.stringify(data));
        setError("");
        setUser(data);
        navigate("/");
        toast.success("Congratulation!! sing up successfull");
      } else {
        setError(data.message);
      }
    } catch (error) {
      // console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md -mt-28">
        <div className="px-6 py-4">
          <h3 className="my-5 text-2xl text-blue-600 font-bold">
            Please Register
          </h3>

          <form onSubmit={handleRegister}>
            <div className="w-full mt-4">
              <input
                className="border p-2 w-full"
                type="text"
                placeholder="User Name"
                name="name"
                required
                value={userInfo?.name}
                onChange={(e) => handleInputValue(e)}
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="border p-2 w-full"
                type="email"
                placeholder="Email Address"
                name="email"
                required
                value={userInfo?.email}
                onChange={(e) => handleInputValue(e)}
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="border p-2 w-full"
                type="password"
                placeholder="Password"
                name="password"
                required
                value={userInfo?.password}
                onChange={(e) => handleInputValue(e)}
              />
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <div className="flex items-center justify-between mt-4">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-500">
                Forget Password?
              </a>

              <button className="px-6 py-2 text-white bg-blue-500">
                Sign Up
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50">
          <span className="text-sm text-gray-600">
            Already have an account?{" "}
          </span>

          <Link
            to="/login"
            className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
