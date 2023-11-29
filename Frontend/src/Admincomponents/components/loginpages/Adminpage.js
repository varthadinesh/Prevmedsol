import React,{ useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
// import Captcha from "./captcha";
// import Captcha from './Captcha';

const Adminpage = () => {
  const history = useNavigate();
  const [captchacheck, setCaptchacheck] = useState("");
  console.log(window.history.length);
  // const backlen = window.history.length-1;
  // window.history.go(-backlen)

  useEffect(() => {
    // Check if this is the first load by seeing if our object exists in local storage
    if (localStorage.getItem('firstLoadDone') === null) {
      // If it's the first load, set the flag in local storage to true and reload the page
      localStorage.setItem('firstLoadDone', 1);
      console.log('This is the initial load');
      generate();
    } else {
      generate();
      console.log('This is a page refresh');
    }
  }, []);

  var captcha;
  function generate() {
    // Clear old input
    document.getElementById("submit").value = "";

    // Access the element to store
    // the generated captcha
    captcha = document.getElementById("image");
    var uniquechar = "";

    const randomchar =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    // Generate captcha for length of
    // 5 with random character
    for (let i = 1; i < 7; i++) {
      uniquechar += randomchar.charAt(Math.random() * randomchar.length);
    }

    // Store generated input
    captcha.innerHTML = uniquechar;
    setCaptchacheck(uniquechar);
  }

  const handleclick = (e) => {
    e.preventDefault();
    const name = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const usr_input = document.getElementById("submit").value;

    // Check whether the input is equal
    // to generated captcha or not
    if (usr_input == captchacheck) {
      if (name === "admin" && password === "admin") {
        history("/dashboardPage");
      }
      else{
        alert("Invalid username or password");
        generate();
      }
    }
    else if(usr_input === ""){
      document.getElementById("key").innerHTML = "Please Enter CAPTCHA";
    }
    else {
      document.getElementById("key").innerHTML = "Invalid CAPTCHA";
      generate();
    }

  };

  return (
    <>
      <Navbar />

      <div
        className="d-flex justify-content-center "
      >
        <div>
          <div className="text-center">
            <h4 style={{ padding: "25px" }}>Admin Log In</h4>
          </div>
          <form method="">
            <div className="form-group">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="User Name"
                className="form-control"
                style={{ width: "300px" }}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                style={{ width: "300px" }}
                className="form-control"
                required
              />
            </div>
            {/* <Captcha /> */}
            <div className="d-flex justify-content-center">
              <div id="user-input" className="d-flex m-2">
                <input
                  type="text"
                  className="mr-2"
                  id="submit"
                  placeholder="Enter Captcha"
                />
                <div className="mr-2" onClick={generate}>
                  <i className="fas fa-sync"></i>
                </div>
                <div
                  id="image"
                  className="bg-secondary text-decoration-line-through fst-italic p-1 rounded fs-5"
                  selectable="False"
                ></div>
              </div>
            </div>
            <p id="key"></p>
            {/* <Captcha /> */}
            <div>
              <button
                type="submit"
                name="btn-login"
                onClick={handleclick}
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
          </form>
        </div>
      </div>
    </>
  );
};

export default Adminpage;
