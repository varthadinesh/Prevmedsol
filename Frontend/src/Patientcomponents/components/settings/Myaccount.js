import React from "react";
import Navbar from "../Navbar"
import Menu from "../Menu";
import { Link } from "react-router-dom";



const Myaccount = () => {

  return (
    <>
    <Navbar/>
    <div className="d-flex">
    <div className="col-2 p-0">
      <Menu/>
    </div>

    <div className="col-10 p-0">
     
      <div
      className="d-flex justify-content-center"
      style={{ height: "60vh", alignItems: "center" ,paddingBottom:'120px'}}
    >
      <div>
        <div className="text-center">
          <h4 >Change Password</h4>
        </div>
        <form method="post" action="">
          
          <div className="form-group">
            <input
              type="password"
              id="Newpassword"
              name="Newpassword"
              placeholder="New Password"
              style={{ width: "350px" }}
            //   onChange={handleInput}
              className="form-control"
              required=""
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              placeholder="Confirm Password"
              style={{ width: "350px" }}
            //   onChange={handleInput}
              className="form-control"
              required=""
            />
          </div>
          <div>
            <button
              type="submit"
              name="btn-login"
              className="btn btn-dark"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div> 
    



      <hr></hr>
      <footer className="page-footer font-small bg-blue m-4">
          <div className="footer-copyright text-center">
              <span className='text-primary fs-6'>PrevMed Sol&nbsp;</span>Copyrights © 2023
          </div>
      </footer>
    </div>

  </div>
  </>
  );
};

export default Myaccount;
