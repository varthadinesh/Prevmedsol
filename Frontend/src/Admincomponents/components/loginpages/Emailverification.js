import React from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function Emailverification() {
    const navigate = useNavigate();
    const { state } = useLocation();

  var regex = new RegExp("[a-zA-Z0-9]+@[a-z]+.[a-z]{2,3}");
  var otp_check = "";
  var email;

  function verifyOTP() {
    otp_check = document.querySelector(".otp_num").value;
    fetch("http://localhost:8080/verify", {
      method: "POST",
      body: JSON.stringify({
        email: `${email}`,
        otp: `${otp_check}`,
      }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      console.log(res);
      if (res.status == 200) {
        document.querySelector(".verification").style.display = "none";
        document.querySelector(".success").style.display = "block";
        document.querySelector(".error").style.display = "none";
        axios
        .post("http://localhost:8080/register", state.values)
        .then((res) => {
          if(res.data === "Error"){
            alert('User Registration Failed');
          }
          else{
            alert("New user registered successfully");
            navigate("/patient")
          }
        })
        .catch((err) => console.log(err));
      } else {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".error").innerHTML = "Invalid OTP";
        document.querySelector(".success").style.display = "none";
      }
    });
  }

  function sendOTP() {
    email = state.values.email;
    if (regex.test(email)) {
      fetch("http://localhost:8080/sendotp", {
        method: "POST",
        body: JSON.stringify({
          email: `${email}`,
        }),
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        console.log(res);
        if (res.status == 200) {
            document.querySelector(".verification").style.display = "block";
            document.querySelector(".emailpartial").innerHTML = "***" + state.values.email.slice(3);
          document.getElementById("getEmail").value = "";
        } else {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".error").innerHTML = "Email not exist";
          document.querySelector(".success").style.display = "none";
        }
      });
    } else {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".error").innerHTML = "Invalid Email";
      document.querySelector(".success").style.display = "none";
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="container m-4">
        <h3 className="text-primary text-center">Email Verification</h3>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-auto">
            <input type="email" className="form-control" id="getEmail" value={state.values.email} readonly/>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary" onClick={sendOTP}>
              Send OTP
            </button>
          </div>
        </div>
        <div className="success text-success text-center">
          OTP verified Success fully
        </div>

        <div className="verification mt-4">
          <div className="title text-center">
            <p>
              An OTP has been sent to{" "}
              <span className="emailpartial"></span>
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
            />
            <button onClick={verifyOTP} className="btn btn-primary">
              Verify
            </button>
          </div>
        </div>
        <div className="error text-danger text-center">Invalid otp</div>
      </div>
    </div>
  );
}
