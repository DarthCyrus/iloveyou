import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
//   const logout = async () => {
//     try {
//       console.log(auth.currentUser);
//       await auth.signOut(); // Wait for the sign-out operation to complete
//       console.log("Logged out successfully");
//       console.log(auth.currentUser);
//     } catch (error) {
//       console.error("Error logging out:", error);
//     }
//   };
  return (
    <nav className="fixed top-0 w-screen h-14 bg-white flex items-center">
      <ul className="flex gap-5 ml-5">
        <li className="group">
          <Link to="/" className="">
            iloveu
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/testpage">testpage</Link>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;
