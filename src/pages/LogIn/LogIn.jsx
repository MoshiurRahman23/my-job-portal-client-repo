import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext/AuthContext";
import Lottie from "lottie-react";
import LottieReact from "../../assets/register.json";
import SocialLogin from "../shared/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router";


const LogIn = () => {
    const {LogInUser}=useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const path = location.state || '/';

    console.log('location signin page ', location)

    const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    LogInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(path);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12">

        {/* Animation Section */}
        <div className="text-center lg:text-left">
          <Lottie
            style={{ maxWidth: "480px" }}
            animationData={LottieReact}
            loop
          />
        </div>

        {/* Login Card */}
        <div className="card bg-base-100 w-full max-w-md shadow-2xl">
          <div className="card-body p-8">

            <h1 className="text-4xl font-bold text-center mb-2">
              Welcome Back
            </h1>
            <p className="text-center text-base-content/70 mb-6">
              Sign in to continue to your account
            </p>

            <form onSubmit={handleLogIn} className="space-y-4">
              <fieldset className="space-y-4">

                {/* Email */}
                <div>
                  <label className="label">
                    <span className="label-text font-medium">Email Address</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered w-full"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="label">
                    <span className="label-text font-medium">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="input input-bordered w-full"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                {/* Forgot Password */}
                <div className="text-right">
                  <a className="link link-hover text-sm">
                    Forgot password?
                  </a>
                </div>

                {/* Submit */}
                <button className="btn btn-neutral w-full mt-2">
                  Sign In
                </button>

                {/* Register Link */}
                <p className="text-center text-sm mt-4">
                  Don’t have an account?
                  <Link
                    to="/register"
                    className="text-primary font-semibold ml-1 hover:underline"
                  >
                    Create one
                  </Link>
                </p>

              </fieldset>
            </form>

            {/* Social Login */}
            <div className="mt-6">
              <SocialLogin path={path} />
            </div>

          </div>
        </div>
      </div>
    </div>  
  )
}

export default LogIn