import React from 'react'
import Menu from '../Menu'
import { Link } from "react-router-dom";


export default function AddDoctor() {
  return (
    <div className="d-flex left-div">

        <div className='col-2 bg-light p-0'>
            <Menu/>
        </div>

        <div className="col-10 p-0">
        {/* Right side */}

        <nav className="d-flex bg-light border border-bottom-info p-2">
          <Link to='/' className="text-decoration-none"><i className="bi bi-house-fill"></i>&nbsp;Home&nbsp;</Link>&gt; Users &gt; Add Doctor
        </nav>
        <h4 className="mt-2 ms-2 text-primary">Add Doctor</h4>
        <hr className="ms-4 me-4" />
        <div className="">
          <div className="col-xs-12">
            <form className="form-horizontal mb-4">
              <div className="form-group d-md-flex">
                <label className="col-sm-4 text-md-end text-primary">
                  {" "}
                  First Name{" "}
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="First name"
                    className="col-xs-10 col-sm-5 form-control"
                    id="first_name"
                    name="first_name"
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
                  Last Name{" "}
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="Last name"
                    className="col-xs-10 col-sm-5 form-control"
                    id="last_name"
                    name="last_name"
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  for="form-field-1"
                >
                  {" "}
                  Gender{" "}
                </label>
                <div className="col-md-8">
                  <div className="radio-inline">
                    <label className="me-4">
                      <input
                        type="radio"
                        className="pms"
                        id="Mgender"
                        name="gender"
                        value="male"
                        required
                      />
                      <span className="lbl"> Male</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        className="pms"
                        id="Fgender"
                        name="gender"
                        value="female"
                      />
                      <span className="lbl"> Female</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  for="form-field-1"
                >
                  {" "}
                  Phone Number
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="col-xs-10 col-sm-5 form-control"
                    id="phone_number"
                    maxlength="10"
                    name="phone_number"
                    value=""
                    required
                  />
                  <span
                    id="phone_number_validation"
                    className="error"
                    style={{ color: "red" }}
                  ></span>
                </div>
              </div>

              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  for="form-field-1"
                >
                  {" "}
                  Email
                </label>
                <div className="col-sm-8">
                  <input
                    type="email"
                    placeholder="sample@gmail.com"
                    className="col-xs-10 col-sm-5 form-control"
                    id="email"
                    name="email"
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
                  Password
                </label>
                <div className="col-sm-8">
                  <input
                    type="password"
                    placeholder="Password"
                    className="col-xs-10 col-sm-5 form-control"
                    id="password"
                    name="password"
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
                  Hospital
                </label>
                <div className="col-sm-8">
                  <select
                    className="col-xs-10 col-sm-5 form-select"
                    id="hospital"
                    name="hospital"
                    required
                  >
                    <option value="">Select</option>
                    <option value="test ">test </option>
                    <option value="Testing Center ">Testing Center </option>
                    <option value="PUJA ">PUJA </option>
                    <option value="Hyderabad ">Hyderabad </option>
                    <option value="Arunachal Pradesh Medical  ">
                      Arunachal Pradesh Medical{" "}
                    </option>
                    <option value="Muzzafarpur jaanch Centre ">
                      Muzzafarpur jaanch Centre{" "}
                    </option>
                    <option value="panji medical centre ">
                      panji medical centre{" "}
                    </option>
                  </select>
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  for="form-field-1"
                >
                  {" "}
                  Specialization
                </label>
                <div className="col-sm-8">
                  <select
                    className="col-xs-10 col-sm-5 form-select"
                    id="department"
                    name="department"
                  >
                    <option value="">Select</option>
                    <option value="cardiologist">Cardiologist</option>
                    <option value="neurologist">Neurologist</option>
                  </select>
                </div>
              </div>

              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  for="form-field-1"
                >
                  {" "}
                  Address
                </label>
                <div className="col-sm-8">
                  <textarea
                    type="text"
                    placeholder="Hospital Name"
                    className="col-xs-10 col-sm-5 form-control"
                    id="address1"
                    name="address1"
                    required
                  />
                </div>
              </div>

              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  for="form-field-select-1"
                >
                  {" "}
                  Country
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="Country"
                    className="col-xs-10 col-sm-5 form-control"
                    id="country"
                    name="country"
                    value=""
                    required
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  for="form-field-select-1"
                >
                  {" "}
                  State
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="State"
                    className="col-xs-10 col-sm-5 form-control"
                    id="state"
                    name="state"
                    value=""
                    required
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  for="form-field-select-1"
                >
                  {" "}
                  City
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="City"
                    className="col-xs-10 col-sm-5 form-control"
                    id="city"
                    name="city"
                    value=""
                    required
                  />
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
                <span className='text-primary fs-6'>PrevMed Sol&nbsp;</span>Copyrights © 2023
            </div>
        </footer>

        {/* Right side */}
      </div>
    </div>
  )
}
