import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid m-10">
        <a className="navbar-brand " href="/">
          <i className="bi bi-heart-pulse-fill"></i>
          <b> Prev</b>Medsol
        </a>

        <div className="text-light fs-5">
          {location.pathname !== "/dashboardPage" &&
            location.pathname !== "/addcenter" &&
            location.pathname !== "/addlab" &&
            location.pathname !== "/managecenters" &&
            location.pathname !== "/managelabs" &&
            location.pathname !== "/adddoctor" &&
            location.pathname !== "/addpatient" &&
            location.pathname !== "/addlabagent" &&
            location.pathname !== "/addappointment" &&
            location.pathname !== "/labappointment" &&
            location.pathname !== "/patientappointment" &&
            location.pathname !== "/managestate" &&
            location.pathname !== "/managecity" &&
            location.pathname !== "/managelocation" &&
            location.pathname !== "/managepackage" &&
            location.pathname !== "/addpackage" &&
            location.pathname !== "/invoice" &&
            location.pathname !== "/patients" &&
            location.pathname !== "/doctors" &&
            location.pathname !== "/labagents" && 
            location.pathname !== "/sitemanagers" &&
            location.pathname !== "/viewpayments" && 
            (
              <div
                className=" d-flex "
                style={{ gap: "40px", marginRight: "100px" }}
              >
                <Link class="nav-link" to="/register">
                  Register
                </Link>
                <Link class="nav-link" to="/">
                  Login In
                </Link>
                {location.pathname !== "/register" && (
                  <Link className="nav-link" to="/adminpage">
                    Admin Log In
                  </Link>
                )}
                {location.pathname !== "/register" && (
                  <Link class="nav-link" to="/superadminpage">
                    Superadmin Login In
                  </Link>
                )}
              </div>
            )}
          {location.pathname !== "/" &&
            location.pathname !== "/adminpage" &&
            location.pathname !== "/register" &&
            location.pathname !== "/superadminpage" && (
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-secondary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Welcome, Admin
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <button className="dropdown-item" type="button">
                      <i className="bi bi-power"></i> Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
        </div>
      </div>
    </nav>
  );
}
