import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark sticky-top">
        <div className="container-fluid m-10">
          <span className="navbar-brand ">
            <i className="bi bi-heart-pulse-fill"></i>
            <b> Prev</b>Medsol
          </span>
          <div>
            <span className="text-white me-4"><i className="bi bi-person-fill"></i> Welcome</span>
            <Link to="/superadminpage" className="text-decoration-none text-white">
            <i className="bi bi-power"></i> Logout
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
