import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import logo from "../../assets/images/shoppingify-logo.svg";
import Spinner from "../../components/Spinner";
import { clearError, register } from "../../features/user/userSlice";

function Register() {
  const dispatch = useDispatch();
  const loading = useAppSelector((state) => state.user.isLoading);
  const error = useAppSelector((state) => state.user.error);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(register({ username, password }));
  };

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  return (
    <div>
      <div className="px-3 md:px-10 py-2 md:py-5">
        <div className="w-36 md:w-auto">
          <img src={logo} alt="" className="w-full md:w-auto" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mt-24 md:w-1/2 lg:w-2/5 xl:w-1/4">
          <h1 className="text-center text-xl font-semibold">Register now</h1>
          <div className="mt-5">
            <form onSubmit={onSubmitHandler}>
              <div className="flex flex-col mt-5">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  className="outline-none border border-gray-600 px-3 py-2 mt-2"
                  onChange={(e) => setUsername(e.target.value)}
                />
                {error?.type === "username" && (
                  <p className="text-red-500 text-sm italic mt-1">
                    {error.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col mt-5">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  required
                  name="password"
                  className="outline-none border border-gray-600 px-3 py-2 mt-2"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mt-5">
                <button
                  className="w-full py-3 text-center bg-blue-600 text-white rounded-sm"
                  disabled={loading}
                  type="submit"
                >
                  {loading ? <Spinner /> : "Register"}
                </button>
              </div>
              <div className="mt-5">
                <p className="text-center text-sm">
                  Already have an account?{" "}
                  <span className="text-blue-600">
                    <Link to="/login">Login</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
