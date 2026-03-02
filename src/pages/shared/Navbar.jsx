import { useContext } from "react";
import { NavLink } from "react-router";
import AuthContext from "../../contexts/AuthContext/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("User signed out"))
      .catch((error) => console.error(error));
  };

  const Links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : undefined
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/applications"
         className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : undefined
          }
        >Applications</NavLink>
      </li>

      {/* for applcant*/}
      {user && <>
              <li>
              <NavLink to="/myApplications"
              className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : undefined
                }
              >My Applications</NavLink>
            </li>
              <li>
              <NavLink to="/mypostedjobs"
              className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : undefined
                }
              >My Posted Jobs</NavLink>
            </li>
      </>}
      {/* for requrater*/}
      {user && <>
              <li>
              <NavLink to="/addjobs"
              className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : undefined
                }
              >Add Jobs</NavLink>
            </li>
      </>}
      <li>
        <NavLink to="/about"
         className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : undefined
          }
        >About</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-8">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {Links}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl font-bold">
          JobPortal
        </NavLink>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex gap-2">
        {user ? (
          <button onClick={handleSignOut} className="btn btn-primary">
            Sign Out
          </button>
        ) : (
          <>
            <NavLink to="/register" className="btn btn-ghost">
              Register
            </NavLink>
            <NavLink to="/login" className="btn btn-primary">
              Sign In
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;