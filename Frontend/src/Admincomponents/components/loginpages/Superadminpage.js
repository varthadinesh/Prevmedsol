import React,{ useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Mainnavbar from '../Mainnavbar';

const Superadminpage = () => {
  const navigate = useNavigate();
  const [captchacheck, setCaptchacheck] = useState("");
 
  useEffect(() => {
    if (localStorage.getItem('firstLoadDone') === null) {
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
    document.getElementById("submit").value = "";

    captcha = document.getElementById("image");
    let uniquechar = "";

    const randomchar =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 1; i < 7; i++) {
      uniquechar += randomchar.charAt(Math.random() * randomchar.length);
    }

    captcha.innerHTML = uniquechar;
    setCaptchacheck(uniquechar);
  }

  const handleclick = (e) => {
    e.preventDefault();
    const password = document.getElementById("password").value;
    const usr_input = document.getElementById("submit").value;

    if (usr_input == captchacheck) {
      if (password === "superadmin") {
        navigate("/superadmindashboard");
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

  // eslint-disable-next-line no-restricted-globals
  history.pushState(null, null, location.href);
  window.addEventListener('popstate', function(event) {
// eslint-disable-next-line no-restricted-globals
    history.pushState(null, null, location.href);
  });

  return (
    <>
    <Mainnavbar/>
 <div className='d-flex justify-content-center '>
    <div>
     <div className='text-center'>
    <h4 style={{padding:'25px'}}>Super Admin Log In</h4>
    </div>
      <form method="">
        <div className="form-group">
          <input type="password" id="password" name="password" placeholder="Password" style={{width:'300px'}} className="form-control" required=""/>
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
          <button type="submit" name="btn-login" onClick={handleclick} className="btn btn-primary w-100">Log In</button>
        </div>
        <div className='text-center'>
         <a href="http://prevmedsol.com/user/forgot_password">Forgot Password?</a>
         </div>
      </form>
    </div>
  </div>
</>

  )
}

export default Superadminpage;