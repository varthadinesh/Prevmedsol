import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../Admincomponents/components/Datacontext";

export default function Navbar() {
  const { labagent } = useData();
  // console.log(props.name)
  return (
    <>
      <nav className="navbar sticky-top">
        <div className="container-fluid m-10">
          <span className="navbar-brand text-white">
            <i className="bi bi-heart-pulse-fill"></i>
            <b> Prev</b>Medsol
          </span>
          <div>
            <span className="text-white me-4">Welcome, {labagent.firstname}</span>
            <Link to="/lab" className="text-decoration-none text-white">
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
