import React from "react";
import Menu from "../Menu";
import { Link } from "react-router-dom";

const Addappointment = () => {
  return (
    <div className="d-flex">
      <div className="col-2 bg-light p-0">
        <Menu/>
      </div>

      <div className="col-10 p-0">
        <nav className="d-flex bg-light border border-bottom-info p-2">
            <Link to='/' className="text-decoration-none"><i className="bi bi-house-fill"></i>&nbsp;Home&nbsp;</Link>&gt; Appointments &gt; Add Appointment
        </nav>
        <h4 className="mt-2 ms-2 text-primary">Add Appointment</h4>
        <hr className="ms-4 me-4" />
        <div className="">
          <div className="col-xs-12">
            <form className="form-horizontal mb-4">
              <div className="form-group d-md-flex">
                <label className="col-sm-4 text-md-end text-primary">
                  Select Patient
                </label>
                <div className="col-sm-8">
                  <select
                    className="col-xs-10 col-sm-5 form-select"
                    id="patient"
                    name="patient"
                    required
                  >
                    <option value="">Select</option>
                  </select>
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  for="form-field-1"
                >
                  Choose Appointment Type
                </label>
                <div className="col-sm-8">
                  <select
                    className="col-xs-10 col-sm-5 form-select"
                    id="appointment"
                    name="appointment"
                    required
                  >
                    <option value="">Select</option>
                    <option value="">Checkup</option>
                    <option value="">Tests</option>
                  </select>
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  for="form-field-select-1"
                >
                  Center
                </label>
                <div className="col-sm-8">
                  <select
                    className="col-xs-10 col-sm-5 form-select"
                    id="center"
                    name="center"
                    required
                  >
                    <option value="">Select</option>
                  </select>
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  for="form-field-select-1"
                >
                  Date
                </label>
                <div className="col-sm-8">
                  <input
                    type="date"
                    placeholder="Date"
                    className="col-xs-10 col-sm-5 form-control"
                    id="date"
                    name="date"
                    value=""
                    required
                  />
                </div>
              </div>

              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  for="form-field-1"
                >
                  {" "}
                  Time
                </label>
                <div className="col-sm-8">
                  <select
                    className="col-xs-10 col-sm-5 form-select"
                    id="timing"
                    name="timing"
                    required
                  >
                    <option value="">Select Time</option>
                    <option value="12:00AM">12:00 AM</option>
                    <option value="01:00AM">01:00 AM</option>
                    <option value="02:00AM">02:00 AM</option>
                    <option value="03:00AM">03:00 AM</option>
                    <option value="04:00AM">04:00 AM</option>
                    <option value="05:00AM">05:00 AM</option>
                    <option value="06:00AM">06:00 AM</option>
                    <option value="07:00AM">07:00 AM</option>
                    <option value="08:00AM">08:00 AM</option>
                    <option value="09:00AM">09:00 AM</option>
                    <option value="10:00AM">10:00 AM</option>
                    <option value="11:00AM">11:00 AM</option>
                  </select>
                </div>
              </div>
              

              <div className="text-center">
                <div className="col-md-offset-3">
                  <button
                    className="btn btn-success"
                    type="submit"
                    id="btn-save"
                    name="btn-save"
                  >
                    <i class="bi bi-save2-fill"></i>&nbsp; Save
                  </button>
                  &nbsp; &nbsp;
                  <button className="btn btn-danger" type="reset">
                    <i class="bi bi-trash-fill"></i>&nbsp; Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <hr></hr>
        <footer className="page-footer font-small bg-blue m-4">
          <div className="footer-copyright text-center">
            <span className="text-primary fs-6">PrevMed Sol&nbsp;</span>
            Copyrights © 2023
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Addappointment;
