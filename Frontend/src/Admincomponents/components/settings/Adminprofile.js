import React,{useState, useEffect} from "react";
import Menu from "../Menu";
import Navbar from "../Navbar";
import axios from "axios";

function Adminprofile() {
  const [info, setInfo] = useState([]);
    const [values, setValues] = useState({
        firstname: "",
        middlename: "",
        lastname: "",
        email: "",
        phone: "",
        gender: "",
        dateofbirth: "",
        bloodgroup: "",
        country: "",
        state: "",
        city: "",
        street1: "",
        street2: "",
        zipcode: "",
      });
    
      useEffect(() => {
        axios
          .get("http://localhost:8080/admin")
          .then((res) => {
            // console.log(res.data);
            res.data.map((item)=>{
                setInfo(prev => [...prev, item]);
                setValues(prev => ({
                  ...prev,
                  firstname: item.firstname,
                  middlename: item.middlename,
                  lastname: item.lastname,
                  email: item.email,
                  phone: item.phone,
                  gender: item.gender,
                  dateofbirth: item.dateofbirth,
                  bloodgroup: item.bloodgroup,
                  country: item.country,
                  state: item.state,
                  city: item.city,
                  street1: item.street1,
                  street2: item.street2,
                  zipcode: item.zipcode,
              }))
              return null;
            })
          })
          .catch((err) => console.log(err));
      }, []);

      useEffect(() => {
        // Get the current date in the format "YYYY-MM-DD"
        const getCurrentDate = () => {
          const today = new Date();
          const day = String(today.getDate()).padStart(2, '0');
          const month = String(today.getMonth() + 1).padStart(2, '0');
          const year = today.getFullYear();
          return `${year}-${month}-${day}`;
        };
    
        // Set the max attribute of the date input to the current date
        const dateInput = document.getElementById('dob');
        if (dateInput) {
          dateInput.max = getCurrentDate();
        }
      }, []);

      console.log(info)

    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues((prev) => ({
          ...prev,
          [name]: value,
        }));
    
      };

      const handleSave = (e) => {
        e.preventDefault();
        // console.log(values)
        axios
          .post(`http://localhost:8080/adminprofile`, values)
          .then((res) => {
            console.log(res);
            window.location.reload(false);
          })
          .catch((error) => {
            console.error("Error saving data:", error);
          })
      };
    
    
  return (
    <>
    <Navbar/>
    <div className="d-flex">
      <div className="col-2  p-0">
        <Menu/>
      </div>

      {(info.length>0) ? (
      <div className="col-10 p-0">
        <div className="">
        <div
          className="m-4 "
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="">
            <form id="form1" action="" method="post" onSubmit={handleSave}>
              <div className="row">
                <div className="">
                  <div className="form-heading">
                    <h4 className="text-center">
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
                        defaultValue={info[0].firstname}
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
                        defaultValue={info[0].middlename}
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
                        defaultValue={info[0].lastname}
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
                    defaultValue={info[0].email}
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
                    defaultValue={info[0].phone}
                    pattern="[0-9]{10}"
                    title="10 digit numeric value only"
                    required
                  />
                </div>

              </div>

              <div className="row">
                <div className="col-md-4 d-flex">
                  <div className="me-3 mt-2">
                  <label>
                    <input
                      type="radio"
                      id="radio1"
                      value="male"
                      name="gender"
                      className="m-1"
                      onChange={handleInput}
                      defaultChecked={info[0].gender === 'male'}
                      required
                    />
                     Male </label>
                  </div>
                  <div className="mt-2">
                  <label>
                    <input
                      type="radio"
                      id="radio2"
                      value="female"
                      name="gender"
                      className="m-1"
                      onChange={handleInput}
                      defaultChecked={info[0].gender === 'female'}
                      required
                    />
                     Female </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <input
                    type="date"
                    name="dateofbirth"
                    id="dateofbirth"
                    className="form-control m-1"
                    placeholder="Date of Birth (month/day/year)"
                    onChange={handleInput}
                    defaultValue={info[0].dob}
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
                      defaultValue={info[0].bloodgroup}
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
                      defaultValue={info[0].country}
                      pattern="[A-Z][a-z]*\s*\w*"
                      title="First letter should be uppercase, remaining letters are lowercase. No special characters"
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
                      defaultValue={info[0].state}
                      pattern="[A-Z][a-z]*\s*\w*"
                      title="First letter should be uppercase, remaining letters are lowercase. No special characters"
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
                      defaultValue={info[0].city}
                      pattern="[A-Z][a-z]*\s*\w*"
                      title="First letter should be uppercase, remaining letters are lowercase. No special characters"
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
                      defaultValue={info[0].street1}
                      pattern="[A-Z][a-z]*\s*\w*"
                      title="First letter should be uppercase, remaining letters are lowercase. No special characters"
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
                      defaultValue={info[0].street2}
                      pattern="[A-Z][a-z]*\s*\w*"
                      title="First letter should be uppercase, remaining letters are lowercase. No special characters"
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
                      defaultValue={info[0].zipcode}
                      pattern="[0-9]{6}"
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
                  {/* <hr className="justify-content-end"/> */}

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
      ) : (
        <p>Loading....</p>
      )}
    </div>
    </>
  );
}

export default Adminprofile;