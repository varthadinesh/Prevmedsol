import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from '../Navbar';

const Patient = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    console.log(values);
    event.preventDefault();
    // setErrors(Validation(values));
    // if (errors.name === "" && errors.email === "" && errors.password === "" && errors.cnfpassword === "") {
    axios
      .post("http://localhost:8080/patient", values)
      .then((res) => {
        console.log(res.data);
        if(res.data.length>0){
          navigate("/upcomingappointments", {state:{firstname:res.data[0].firstname}})
        }
        // alert("Doctor added successfully");
        // window.location.reload(false);
      })
      .catch((err) => console.log(err));
    // }
  };


  return (
    <>
    <Navbar/>
    <div
      className="d-flex justify-content-center "
      style={{ height: "60vh", alignItems: "center" }}
    >
      <div>
        <div className="text-center">
          <h4 style={{ padding: "25px" }}>Patient Log In</h4>
        </div>
        <form action="" method="post" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="User Name / Email"
              className="form-control"
              style={{ width: "350px" }}
              required
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              style={{ width: "350px" }}
              className="form-control"
              required
              onChange={handleInput}
            />
          </div>
          <div>
            <button
              type="submit"
              name="btn-login"
              className="btn btn-primary w-100"
            >
              Log In
            </button>
          </div>
          <div className="text-center">
            <a href="http://prevmedsol.com/user/forgot_password">
              Forgot Password?
            </a>
          </div>
          <div className="text-center" style={{padding:'45px'}}>
          <a href="http://prevmedsol.com/user/forgot_password">
              New user? Create an account
            </a>
          
          </div>

        </form>
      </div>
    </div>
    </>
  );
};

export default Patient;
