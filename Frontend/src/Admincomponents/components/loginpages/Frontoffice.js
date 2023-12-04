import React, {useState, useEffect } from "react";
import Navbar from '../Navbar';

const Frontoffice = () => {
  const [captchacheck, setCaptchacheck] = useState("");

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
    let uniquechar = "";

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


  return (
    <>
    <Navbar/>
    <div
      className="d-flex justify-content-center "
    >
      <div>
        <div className="text-center">
          <h4 style={{ padding: "25px" }}>Front Office Log In</h4>
        </div>
        <form>
          <div className="form-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="User Name / Email"
              className="form-control"
              style={{ width: "350px" }}
              required=""
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
              required=""
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

export default Frontoffice;
