import Lottie from "lottie-react";
import LottieReact from "../../assets/register.json";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";
import { Link } from "react-router";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    // <div className="hero bg-base-200 min-h-screen">
    //   <div className="hero-content flex-col lg:flex-row-reverse">
    //     <div className="text-center lg:text-left">
    //       <Lottie style={{ width: "500px" }} animationData={LottieReact} loop />
    //     </div>
    //     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    //       <div className="card-body">
    //         <h1 className="text-5xl font-bold">Register now!</h1>
    //         <form onSubmit={handleRegister}>
    //           <fieldset className="fieldset">
    //             <label className="label">Email</label>
    //             <input type="email" name="email" className="input w-full" placeholder="Email" />
    //             <label className="label">Password</label>
    //             <input type="password" name="password" className="input w-full" placeholder="Password" />
    //             <div className=" flex justify-between">
    //               <a className="link link-hover">Forgot password?</a>
    //             </div>
    //             <button className="btn btn-neutral">Register</button>
    //              <a>Already Have Account, Please<span className="text-red-600 underline ps-2"><Link to='/login'> Log In</Link></span></a>
    //           </fieldset>
    //         </form>
    //           <SocialLogin/>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse gap-12">

    {/* Animation */}
    <div className="text-center lg:text-left">
      <Lottie
        style={{ maxWidth: "480px" }}
        animationData={LottieReact}
        loop
      />
    </div>

    {/* Register Card */}
    <div className="card bg-base-100 w-full max-w-md shadow-2xl">
      <div className="card-body p-8">

        <h1 className="text-4xl font-bold text-center mb-2">
          Create an Account
        </h1>
        <p className="text-center text-base-content/70 mb-6">
          Join us today and start your journey
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
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
                placeholder="Create a password"
                required
              />
            </div>

            {/* Submit */}
            <button className="btn btn-neutral w-full mt-2">
              Register
            </button>

            {/* Login Link */}
            <p className="text-center text-sm mt-4">
              Already have an account?
              <Link
                to="/login"
                className="text-primary font-semibold ml-1 hover:underline"
              >
                Sign in
              </Link>
            </p>

          </fieldset>
        </form>

        {/* Social Login */}
        <div className="mt-6">
          <SocialLogin />
        </div>

      </div>
    </div>
  </div>
</div>
  );
};

export default Register;
