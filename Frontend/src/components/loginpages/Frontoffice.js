import React from "react";

const Frontoffice = () => {
  return (
    <div
      className="d-flex justify-content-center "
      style={{ height: "60vh", alignItems: "center" }}
    >
      <div>
        <div className="text-center">
          <h4 style={{ padding: "25px" }}>Front Office Log In</h4>
        </div>
        <form method="post" action="">
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
  );
};

export default Frontoffice;
