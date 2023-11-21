import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(props) {
  // console.log(props.name)
  return (
    <>
    <nav className="navbar navbar-dark bg-dark sticky-top">
      <div className="container-fluid m-10">
        <Link className="navbar-brand " to="/">
          <i className="bi bi-heart-pulse-fill"></i>
          <b> Prev</b>Medsol
        </Link>
       <div>
       <span className="text-white me-4">Welcome, </span>
        <span className="text-white">Logout</span>
       </div>

      </div>
    </nav>
    </>
  );
}
