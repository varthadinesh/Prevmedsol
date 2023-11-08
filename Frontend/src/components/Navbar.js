import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <>
    <nav className="navbar navbar-dark bg-dark sticky-top">
      <div className="container-fluid m-10">
        <Link className="navbar-brand " to="/">
          <i className="bi bi-heart-pulse-fill"></i>
          <b> Prev</b>Medsol
        </Link>

        <div className="text-light fs-6">
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
            location.pathname !== "/viewpayments" && (
              <div
                className=" d-flex "
                style={{ gap: "40px", marginRight: "50px" }}
              >
                <Link class="nav-link mt-2" to="/register">
                  Register
                </Link>
                <Link class="nav-link mt-2" to="/plans">
                  Plans
                </Link>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn border-0 text-white dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Login
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <button className="dropdown-item" type="button">
                        <Link className="nav-link" to="/adminpage">
                          Admin Login
                        </Link>
                      </button>
                    </li>

                    <li>
                      <button className="dropdown-item" type="button">
                        <Link class="nav-link" to="/superadminpage">
                          Superadmin Login
                        </Link>
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        <Link class="nav-link" to="/frontoffice">
                          Front office Login
                        </Link>
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        <Link class="nav-link" to="/doctor">
                          Doctor Login
                        </Link>
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        <Link class="nav-link" to="/patient">
                          Patient Login
                        </Link>
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        <Link class="nav-link" to="/lab">
                          Lab Login
                        </Link>
                      </button>
                    </li>
                  </ul>
                </div>
                <button className="btn text-white"  data-bs-toggle="modal" data-bs-target="#myModal">Cart</button>
              </div>
            )}
          {location.pathname !== "/" &&
            location.pathname !== "/frontoffice" &&
            location.pathname !== "/plans" &&
            location.pathname !== "/doctor" &&
            location.pathname !== "/patient" &&
            location.pathname !== "/lab" &&
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
                      <i className="bi bi-power"></i>{" "}
                      <Link to="/" className="text-decoration-none text-dark">
                        Logout
                      </Link>
                    </button>
                  </li>
                </ul>
              </div>
            )}
        </div>
      </div>
    </nav>
    {/* modal */}
    <div className="modal" id="myModal">
          <div className="modal-dialog modal-md">
            <div className="modal-content">

              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>

              <div className="modal-body" id='showmod'></div>
              <div className='text-center m-2'>
                <b>fdghhj</b>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>

            </div>
          </div>
      </div>
    </>
  );
}