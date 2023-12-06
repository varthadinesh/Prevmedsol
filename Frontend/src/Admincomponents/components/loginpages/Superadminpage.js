import React, { useEffect } from 'react'
import Navbar from '../Navbar';

const Superadminpage = () => {
  useEffect(()=>{
    generate();
  })

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
  }
  return (
    <>
    <Navbar/>
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
          <button type="submit" name="btn-login" className="btn btn-primary w-100">Log In</button>
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