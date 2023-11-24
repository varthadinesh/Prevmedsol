import React from "react";
import Menu from "../Menu";
import Navbar from "../Navbar"

function Booknewappointment() {
  
  return (
    <>
    <Navbar/>
    <div className="d-flex">
        <div className="col-2 p-0">
            <Menu/>
        </div>

        <div className="col-10 p-0 d-flex justify-content-center">
        <div className="col-md-10">
            <p className="fs-6 text-center p-3 border m-2  border-start-0 border-end-0">Choose the Date, Time and Center</p>
            <div className="d-flex mt-4">
                <div className="col-md-6">
                       <label className="fw-bold">Choose Appointment Type</label>
                        <select className="form-select w-100  m-1">
                        <option>Select Appointment Type</option>
                        <option>Check up</option>
                        <option>tests</option>
                        </select>
                </div>
                <div className="col-md-6">
                       <label className="fw-bold">Center</label>
                        <select className="form-select w-100  m-1">
                        <option>Select Center</option>
                        <option>test</option>
                        <option>Testing Center</option>
                        <option>PUJA</option>
                        <option>Hyderabad</option>
                        <option>Arunachal Pradesh Medical</option>
                        <option>Muzzafarpur jaanch Centre</option>
                        <option>panji medical centre</option>
                        </select>
                </div>
            </div>
            <div className="d-flex mt-4">
                <div className="col-md-6">
                       <label className="fw-bold">Date</label>
                       <div className="input-group w-100 m-1">
                        <input type="date" className="form-control" placeholder="Select Date"/>
                        </div>
                </div>
                <div className="col-md-6">
                       <label className="fw-bold">Time</label>
                        <select className="form-select w-100  m-1">
                        <option>Select Time</option>
                        <option value="12:00PM">12:00 PM</option>
                        <option value="01:00PM">01:00 PM</option>
                        <option value="02:00PM">02:00 PM</option>
                        <option value="03:00PM">03:00 PM</option>
                        <option value="04:00PM">04:00 PM</option>
                        <option value="05:00PM">05:00 PM</option>
                        <option value="06:00PM">06:00 PM</option>
                        <option value="07:00PM">07:00 PM</option>
                        <option value="08:00PM">08:00 PM</option>
                        <option value="09:00PM">09:00 PM</option>
                        <option value="10:00PM">10:00 PM</option>
                        <option value="11:00PM">11:00 PM</option>
                        </select>
                </div>
            </div>
        </div>
        </div>
    </div>
    </>
  );
}

export default Booknewappointment;
