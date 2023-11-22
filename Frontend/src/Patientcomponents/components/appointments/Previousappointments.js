import React from "react";
import Menu from "../Menu";
import { Link} from "react-router-dom";
import Navbar from "../Navbar"


function Previousappointments() {
  
  return (
    <>
    <Navbar/>
    <div className="d-flex">
      <div className="col-2 p-0">
        <Menu/>
      </div>

      <div className="col-10 p-0">
       <h5 className="mt-4 mb-2 ms-2">Appointment Details</h5>
        <div className="d-flex ms-2">
        <div className="input-group w-25 m-1">
            <input type="text" className="form-control" placeholder="Select Date"/>
            <div className="input-group-append">
                <button className="border-0"> <i className="bi bi-calendar input-group-text"></i></button>
            </div>
        </div>
            <select className="form-select w-25  m-1">
                <option>Select Appointment Type</option>
                <option>Check up</option>
                <option>tests</option>
            </select>
            <select className="form-select w-25  m-1">
                <option>Select Center</option>
                <option>Hyderabad</option>
                <option>Bangalore</option>
            </select>
            <button className="btn btn-primary  m-1">Search</button>
            
        </div>
        <table className="mt-4 ms-2 mb-4">
          <tr className="m-5">
            <th  className="success-t"><Link to="/upcomingappointments" className="text-decoration-none bg-success text-white p-2">Up Coming</Link></th>
            <th  className="success-t" ><Link to="/previousappointments" className="text-decoration-none bg-dark text-white p-2">Previous</Link></th>
          </tr>
      </table>

      <table className="table">
       
       <tr>
         <th className="">Appointment Schedule Date</th>
         <th className="">Appointment type</th>
         <th className="">Center / City</th>
        <th className=""  colspan="4">Actions</th>
       </tr>
               
       <tr>
         <td className="">2023-11-02 - 8:00AM</td>
         <td className="">checkup</td>
         <td className="">Testing Center </td>
         <td className="" ><i class="bi bi-receipt"></i>
         <a className="" href="##" >Reports</a>
         </td>
          <td className=""><i class="bi bi-eye-fill"></i>
          <a href="##" target="_blank">After Visit Doc</a>
          </td>
       </tr>
      </table>
       
      </div>
    
    </div>
    </>
  );
}

export default Previousappointments;
