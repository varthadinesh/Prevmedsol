import React from "react";

const Loginpage = () => {
  return (
    <div
      className="d-flex justify-content-center "
      style={{ height: "60vh", alignItems: "center" }}
    >
      <div>
        <div className="text-center">
          <h4 style={{ padding: "25px" }}>Log In</h4>
        </div>
        <form method="post" action="">
          <div>
            <label class="radio-inline ">
              <input
                type="radio"
                name="user_type"
                id="user_type"
                value="center"
                required=""
              />
              <span style={{ padding: "8px" }}>Front office</span>
            </label>
            <label class="radio-inline">
              <input
                type="radio"
                name="user_type"
                id="user_type"
                value="doctor"
                required=""
              />
              <span style={{ padding: "8px" }}>Doctor</span>
            </label>
            <label class="radio-inline">
              <input
                type="radio"
                name="user_type"
                id="user_type"
                value="patient"
                required=""
              />
              <span style={{ padding: "8px" }}>Patient</span>
            </label>
            <label class="radio-inline">
              <input
                type="radio"
                name="user_type"
                id="user_type"
                value="lab"
                required=""
              />
              <span style={{ padding: "8px" }}>Lab</span>
            </label>
          </div>
          <div class="form-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="User Name / Email"
              class="form-control"
              style={{ width: "350px" }}
              required=""
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              style={{ width: "350px" }}
              class="form-control"
              required=""
            />
          </div>
          <div>
            <button
              type="submit"
              name="btn-login"
              class="btn btn-primary w-100"
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
  );
};

export default Loginpage;
