import React,{useState} from "react";
import Menu from "../Menu";
import Navbar from "../Navbar"

function Myprofile() {
    const [values, setValues] = useState({
        firstname: "",
        middlename: "",
        lastname: "",
        email: "",
        phone: "",
        gender: "",
        dob: "",
        bloodgroup: "",
        country: "",
        state: "",
        city: "",
        street1: "",
        street2: "",
        zipcode: "",
      });
    
    const handleInput = (event) => {
        // setValues((prev) => ({
        //   ...prev,
        //   [event.target.name]: [event.target.value],
        // }));
        const { name, value } = event.target;
        setValues((prev) => ({
          ...prev,
          [name]: value,
        }));
    
      };
    
    
  return (
    <>
    <Navbar/>
    <div className="d-flex">
      <div className="col-2  p-0">
        <Menu/>
      </div>

      <div className="col-10 p-0">
        <div className="">
        <div
          className="m-4 "
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="">
            <form id="form1" action="" method="post">
              <div className="row">
                <div className="">
                  <div className="form-heading">
                    <h4 className="text-center text-primary">
                      Edit Profile
                    </h4>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        placeholder="First Name"
                        className="form-control m-1"
                        onChange={handleInput}
                        pattern="[A-Z][a-z]*\s*\w*"
                        title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                        required
                      />
                    </div>

                    <div className="col-md-4">
                      <input
                        type="text"
                        name="middlename"
                        id="middlename"
                        placeholder="Middle Name"
                        className="form-control m-1"
                        onChange={handleInput}
                        pattern="[A-Z][a-z]*\s*\w*"
                        title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                        // required
                      />
                    </div>

                    <div className="col-md-4">
                      <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        placeholder="Last Name"
                        className="form-control m-1"
                        onChange={handleInput}
                        pattern="[A-Z][a-z]*\s*\w*"
                        title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email ID"
                    className="form-control m-1"
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>


              <div className="row">
                <div className="col-md-12">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Mobile Number"
                    className="form-control m-1"
                    maxLength="10"
                    onChange={handleInput}
                    pattern="[0-9]{10}"
                    title="10 digit numeric value only"
                    required
                  />
                </div>

              </div>

              <div className="row">
                <div className="col-md-4 d-flex">
                  <div className="me-3 mt-2">
                    <input
                      type="radio"
                      id="radio1"
                      value="male"
                      name="gender"
                      className="m-1"
                      onChange={handleInput}
                      required
                    />
                    <label> Male </label>
                  </div>
                  <div className="mt-2">
                    <input
                      type="radio"
                      id="radio2"
                      value="female"
                      name="gender"
                      className="m-1"
                      onChange={handleInput}
                      required
                    />
                    <label> Female </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    className="form-control m-1"
                    placeholder="Date of Birth (month/day/year)"
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="col-md-12">
                  <div className="form-group2">
                    <select
                      id="bloodgroup"
                      name="bloodgroup"
                      className="form-select m-2"
                      onChange={handleInput}
                      required
                    >
                      <option value="">Select Blood group</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="Dontknow">Don`t know</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="">
                  
                  <div className="form-group2">
                    <input
                      type="text"
                      name="country"
                      id="country"
                      placeholder="Country"
                      className="form-control m-2"
                      onChange={handleInput}
                      pattern="[A-Z][a-z]*\s*\w*"
                      title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                      required
                    />
                  </div>
                  <div className="form-group2">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="State"
                      className="form-control m-2"
                      onChange={handleInput}
                      pattern="[A-Z][a-z]*\s*\w*"
                      title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                      required
                    />
                  </div>
                  <div className="form-group2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="City"
                      className="form-control m-2"
                      onChange={handleInput}
                      pattern="[A-Z][a-z]*\s*\w*"
                      title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                      required
                    />
                  </div>

                  <div className="form-group2">
                    <input
                      type="text"
                      name="street1"
                      id="street1"
                      placeholder="Street1"
                      className="form-control m-2"
                      onChange={handleInput}
                      pattern="[A-Z][a-z]*\s*\w*"
                      title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                      required
                    />
                  </div>
                  <div className="form-group2">
                    <input
                      type="text"
                      name="street2"
                      id="street2"
                      placeholder="Street2"
                      className="form-control m-2"
                      onChange={handleInput}
                      pattern="[A-Z][a-z]*\s*\w*"
                      title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                      required
                    />
                  </div>
                  <div className="form-group2">
                    <input
                      type="number"
                      name="zipcode"
                      id="zipcode"
                      placeholder="Zip Code"
                      className="form-control m-2"
                      onChange={handleInput}
                      pattern="[0-9]{6}"
                      required
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <button
                        type="submit"
                        className="btn btn-dark m-2 float-end"
                        id="btnregister"
                        name="btnregister"
                      >
                        Update
                      </button>
                    </div>

                  </div>
                  <hr className="justify-content-end"/>

                </div>
              </div>
              </form>
<form>
           <div>   
            <h5 className="ml-2">Details of References</h5>       
            <p className="ml-2">Reference 1:</p> 
              <div className="row">
                <div className="col-md-12">
                  <input
                    type="text"
                    name="refname1"
                    id="refname1"
                    placeholder="Name"
                    className="form-control m-1"
                    maxLength="10"
                    onChange={handleInput}
                    pattern="[0-9]{10}"
                    title="10 digit numeric value only"
                    required
                  />
                </div>

              </div>
              <div className="row">
                <div className="col-md-12">
                  <input
                    type="te"
                    name="refphone1"
                    id="refphone1"
                    placeholder="Phone Number"
                    className="form-control m-1"
                    maxLength="10"
                    onChange={handleInput}
                    pattern="[0-9]{10}"
                    title="10 digit numeric value only"
                    required
                  />
                </div>

              </div>
              <div className="row">
              <div className="">
                  <input
                    type="email"
                    name="refemail1"
                    id="refemail1"
                    placeholder="Email"
                    className="form-control m-1"
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                
                  <input
                    type="password"
                    name="refpassword1"
                    id="refpassword1"
                    placeholder="Password"
                    className="form-control m-1"
                    onChange={handleInput}
                    required
                  />
                </div>

              </div>
              </div>
              <div className="mt-3">   
            <p className="ml-2">Reference 1:</p> 
              <div className="row">
                <div className="col-md-12">
                  <input
                    type="text"
                    name="refname2"
                    id="refname2"
                    placeholder="Name"
                    className="form-control m-1"
                    maxLength="10"
                    onChange={handleInput}
                    pattern="[0-9]{10}"
                    title="10 digit numeric value only"
                    required
                  />
                </div>

              </div>
              <div className="row">
                <div className="col-md-12">
                  <input
                    type="te"
                    name="refphone2"
                    id="refphone2"
                    placeholder="Phone Number"
                    className="form-control m-1"
                    maxLength="10"
                    onChange={handleInput}
                    pattern="[0-9]{10}"
                    title="10 digit numeric value only"
                    required
                  />
                </div>

              </div>
              <div className="row">
              <div className="">
                  <input
                    type="email"
                    name="refemail2"
                    id="refemail2"
                    placeholder="Email"
                    className="form-control m-1"
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                
                  <input
                    type="password"
                    name="refpassword2"
                    id="refpassword2"
                    placeholder="Password"
                    className="form-control m-1"
                    onChange={handleInput}
                    required
                  />
                </div>

              </div>
              <div className="row">
                    <div className="col-md-12 p-3">
                      <button
                        type="submit"
                        className="btn btn-dark m-2 float-end"
                        id="btnregister"
                        name="btnregister"
                      >
                        Save
                      </button>
                    </div>

                  </div>
              </div>


</form>
          </div>
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
}

export default Myprofile;