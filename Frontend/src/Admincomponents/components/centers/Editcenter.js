import React from "react";
import Menu from "../Menu";
import { Link} from "react-router-dom";


const Editcenter = ({replaceEdit, editedData, handleChange, handleSave}) => {

  return (
    <>
    <div className="d-flex">
      <div className="col-2 p-0">
        <Menu />
      </div>

      <div className="col-sm-12 col-md-12 col-lg-10 p-0">
        <nav className="d-flex bg-light border border-bottom-info p-2">
          <Link to="/dashboardPage" className="text-decoration-none">
            <i className="bi bi-house-fill"></i>&nbsp;Home&nbsp;
          </Link>
          &gt;&nbsp; <Link to="/managecenters" onClick={replaceEdit}  className="text-decoration-none">Centers</Link>&nbsp; &gt; Add Center
        </nav>
        <h4 className="mt-2 ms-2 text-primary">Edit Center</h4>
        <hr className="ms-4 me-4" />
        <div className="">
          <div className="col-xs-12">
            <form
              className="form-horizontal mb-4"
              action=""
              // method="post"
              onSubmit={handleSave}
            >
              <div className="form-group d-md-flex">
                <label className="col-sm-4 text-md-end text-primary" htmlFor="centername">
                  Center Name{" "}
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="Center Name"
                    className="col-xs-10 col-sm-5 form-control"
                    id="centername"
                    name="centername"
                    onChange={handleChange}
                    value={editedData.centername}
                    pattern="[A-Z][a-z]*\s*\w*"
                    title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                    required
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="phone"
                >
                  {" "}
                  Mobile{" "}
                </label>
                <div className="col-sm-8">
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="col-xs-10 col-sm-5 form-control"
                    id="phone"
                    name="phone"
                    value={editedData.phone}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    title="10 digit numeric values only"
                    required
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="email"
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
                    value={editedData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="password"
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
                    value={editedData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="fromtiming"
                >
                  {" "}
                  Timings
                </label>
                <div className="col-sm-8">
                  <select
                    className="col-xs-10 col-sm-5 form-select"
                    id="fromtiming"
                    name="fromtiming"
                    onChange={handleChange}
                    required
                  >
                    <option value="">From</option>
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
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="totiming"
                >
                  {" "}
                </label>
                <div className="col-sm-8">
                  <select
                    className="col-xs-10 col-sm-5 form-select"
                    id="totiming"
                    name="totiming"
                    onChange={handleChange}
                    required
                  >
                    <option value="">To</option>

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

              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="address"
                >
                  {" "}
                  Address
                </label>
                <div className="col-sm-8">
                  <textarea
                    type="text"
                    className="col-xs-10 col-sm-5 form-control"
                    id="address"
                    name="address"
                    value={editedData.address}
                    placeholder="Enter your address"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="state"
                >
                  {" "}
                  Select State
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="State"
                    className="col-xs-10 col-sm-5 form-control"
                    id="state"
                    name="state"
                    onChange={handleChange}
                    value={editedData.state}
                    pattern="[A-Z][a-z]*\s*\w*"
                    title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                    required
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="city"
                >
                  {" "}
                  Select City
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="City"
                    value={editedData.city}
                    className="col-xs-10 col-sm-5 form-control"
                    id="city"
                    name="city"
                    onChange={handleChange}
                    pattern="[A-Z][a-z]*\s*\w*"
                    title="First letter should be uppercase, remaining letters are lowercase. No special characters"
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
                    <i className="bi bi-save2-fill"></i>&nbsp; Save
                  </button>
                  &nbsp; &nbsp;
                  <button className="btn btn-danger" type="reset" onClick={replaceEdit}>
                    <i className="bi bi-trash-fill"></i>&nbsp; Cancel
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
    </>
  );
};

export default Editcenter;
