import React from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../Admincomponents/components/Datacontext";
import Menu from './Menu';

export default function Navbar() {
  const { doctor } = useData();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("doctor-token");
    navigate("/doctor");
  };
  // console.log(props.name)
  return (
    <>
       <nav className="navbar navbar-expand-lg sticky-top  bg-success d-flex justify-content-between">
        <div className="d-flex">
        <button className="navbar-toggler bg-light ms-1" type="button" data-bs-toggle="collapse" style={{padding:"2px 2px" , height:"35px"}} data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
              <span className="navbar-toggler-icon fs-6"></span>
        </button>
      
        <div className="navbar-brand text-white">
                <i className="bi bi-heart-pulse-fill ms-2"></i>
                <b> Prev</b>Medsol
        </div>

        </div>
        <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-secondary dropdown-toggle me-1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Welcome, {doctor.firstname}
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <button className="btn" type="button" onClick={logout}>
                          <i class="bi bi-box-arrow-right"></i>{" "}
                              Logout
                          </button>
                        </li>
                      </ul>
         </div>
      </nav>
      <div className=" sidemenu11 collapse navbar-collapse text-light"  id="navbarSupportedContent" ><Menu/> </div>
    </>
  );
}