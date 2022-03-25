import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import logo from "../../assets/images/shoppingify-logo.svg";
import Spinner from "../../components/Spinner";
import { login } from "../../features/user/userSlice";

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loading = useAppSelector((state) => state.user.isLoading);
  const user = useAppSelector((state) => state.user.info);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  const onSubmitHandler = () => {
    dispatch(login({ username, password }));
  };

  return (
    <div>
      <div className="px-3 md:px-10 py-2 md:py-5">
        <div className="w-36 md:w-auto">
          <img src={logo} alt="" className="w-full md:w-auto" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mt-24 md:w-1/2 lg:w-2/5 xl:w-1/4">
          <h1 className="text-center text-xl font-semibold">
            Login into your account
          </h1>
          <div className="mt-5">
            <div className="flex flex-col mt-5">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                className="outline-none border border-gray-600 px-3 py-2 mt-2"
                required
              />
            </div>
            <div className="flex flex-col mt-5">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="outline-none border border-gray-600 px-3 py-2 mt-2"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mt-5">
              <button
                className="w-full py-3 text-center bg-blue-600 text-white rounded-sm"
                onClick={onSubmitHandler}
                disabled={loading}
              >
                {loading ? <Spinner /> : "Login"}
              </button>
            </div>
            <div className="mt-5">
              <p className="text-center text-sm">
                Not have an account yet?{" "}
                <span className="text-blue-600">
                  <Link to="/register">Create account</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
