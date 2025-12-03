import { useState } from "react";
import {
  FaHome,
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const user = {
  _id: "12345",
  role: "admin",
};

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function logoutHandler() {
    setIsOpen(false);
  }

  return (
    <nav className="header">
      <Link to={"/"}>
        <FaHome />
      </Link>
      <Link to={"/search"}>
        <FaSearch />
      </Link>
      <Link to={"/cart"}>
        <FaShoppingBag />
      </Link>

      {user && user?._id ? (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <FaUser />
          </button>
          <dialog open={isOpen} className="userOptions">
            <div>
              {user.role === "admin" ? (
                <Link
                  to={"/admin/dashboard"}
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  onClick={() => setIsOpen((prev) => !prev)}
                  to={"/user/profile"}
                >
                  Profile
                </Link>
              )}
              {/* {user.role === "user" ? (
                
              ) : null} */}
              <Link onClick={() => setIsOpen((prev) => !prev)} to={"/orders"}>
                Orders
              </Link>
              <Link to={"/logout"} onClick={logoutHandler}>
                Logout
              </Link>
            </div>
          </dialog>
        </>
      ) : (
        <Link to={"/login"}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
