import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Forgotpassword() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    frompage: "forgotpassword"
  });
  const [partialemail, setPartialemail] = useState("");
  const [errormsg, setErrormsg] = useState("");
  const [isVerification, setIsVerification] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [usermail, setUsermail] = useState("");
  const navigate = useNavigate();

  var regex = new RegExp("[a-zA-Z0-9]+@[a-z]+.[a-z]{2,3}");
  var otp_check = "";

  function verifyOTP() {
    otp_check = document.querySelector(".otp_num").value;
    fetch("http://localhost:8080/verify", {
      method: "POST",
      body: JSON.stringify({
        email: `${usermail}`,
        otp: `${otp_check}`,
      }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        setIsVerification(false);
        setIsSuccess(true);
        setIsError(false);
      } else {
        setIsError(true);
        setErrormsg("Invalid OTP");
        setIsSuccess(false);
      }
    });
  }

  function sendOTP() {
    if (regex.test(usermail)) {
      fetch("http://localhost:8080/sendotp", {
        method: "POST",
        body: JSON.stringify({
          email: `${usermail}`,
        }),
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        if (res.status === 200) {
          setIsVerification(true);
          setPartialemail("***" + usermail.slice(3));
          document.getElementById("getEmail").value = "";
        } else {
          setIsError(true);
          setErrormsg("Email does not exists.");
          setIsSuccess(false);
        }
      });
    } else {
      setIsError(true);
      setErrormsg("Please enter a valid email address!");
      setIsSuccess(false);
    }
  }

  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: [e.target.value],
    }));

    if(e.target.name === 'email'){
      setUsermail(e.target.value);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const pass = values.password;
    const cpass = document.getElementById("cpassword").value;
    if(pass.toString() === cpass){
        axios
        .post("http://localhost:8080/patients", values)
        .then((res) => {
          if(res.data === "Error"){
            alert('Password updation Failed');
          }
          else{
            alert("Password Updated successfully");
            navigate("/patient")
          }
        })
        .catch((err) => console.log(err));
    }
    else{
      alert("Passwords did not match")
    }
  };


  return (
    <div className="d-flex justify-content-center">
    <div className="container m-4">
      <div className="text-end">
        <Link to="/patient" className="text-decoration-none">Back to login</Link>
      </div>
      <h3 className="text-primary text-center">Reset Password</h3>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-auto">
          <input type="email" name="email" placeholder="Your Email ID" className="form-control" id="getEmail" onChange={handleChange}/>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" onClick={sendOTP}>
            Send OTP
          </button>
        </div>
      </div>
      {
          isSuccess && (
            <div className="success text-success text-center">
              OTP verified
              <div className="m-2">
                <input type="password" name="password" className="w-auto border rounded p-1 m-2" id="password" onChange={handleChange} placeholder="New Password"/>
                <input type="password" name="cpassword" className="w-auto border rounded p-1 m-2" id="cpassword" placeholder="Confirm New Password"/>
                <button type="submit" className="btn btn-primary m-2" onClick={handleSubmit}>Update</button>
              </div>
            </div>
          )
        }
        {
          isVerification && (
            <div className="verification mt-4">
              <div className="title text-center">
                <p>
                  An OTP has been sent to {partialemail}
                </p>
              </div>
              <div
                className="otp-input-fields m-auto d-flex justify-content-around p-4 shadow rounded"
                style={{ maxWidth: "320px" }}
              >
                <input
                  type="number"
                  className="otp_num w-auto text-center rounded border border-success"
                  maxLength={4}
                  placeholder="Enter OTP"
                />
                <button onClick={verifyOTP} className="btn btn-primary">
                  Verify
                </button>
              </div>
            </div>
          )
        }
        {
          isError && (
            <div className="text-danger text-center">{errormsg}</div>
            // <div className="error text-danger text-center">Invalid otp</div>
          )
        }
    </div>
  </div>
  )
}
