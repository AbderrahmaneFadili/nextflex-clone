import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, [handleShow]);

  return (
    //Nav
    <div
      className={`w-full p-2 pl-6 pt-4 fixed ${
        show ? `bg-black` : `bg-transparent`
      }`}
    >
      {/* Logo link */}
      <a href="/" className="w-40">
        <img
          className="w-40"
          src={require("../../images/netflix-logo.png").default}
          alt="logo"
        />
      </a>
    </div>
  );
}

export default Nav;
