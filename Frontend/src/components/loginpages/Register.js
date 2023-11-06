import React from 'react';

const Register = () => {
    return (
        <>
        <div className="">
        <div className='m-4' style={{display:"flex", justifyContent:"center"}}>
            <div className="">
                <form id="form1" method="post">
                
                    <div className="row">
                        <div className="">
                            <div className="form-heading">
                                <h4 className="text-center text-primary">Registration Form</h4>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                        <input type="text" name="firstname" id="firstname" placeholder="First Name" className="form-control m-1"/>
                                </div>

                                <div className="col-md-4"> 
                                        <input type="text" name="middlename" id="middlename" placeholder="Middle Name (Optional)" className="form-control m-1"/>                                
                                </div>

                                <div className="col-md-4">                                    
                                        <input type="text" name="lastname" id="lastname" placeholder="Last Name" className="form-control m-1"/>                                                             
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="">
                                <input type="email" name="username" id="username" placeholder="Enter Email ID" className="form-control m-1"/>
                                {/* <span id="email_validation" className="error"></span> */}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">                         
                                <input type="password" name="password" id="password" placeholder="Password" className="form-control m-1"/>
                        </div>
                        <div className="col-md-6">
                                <input type="password" name="confirmpassword" id="confirmpassword" placeholder="Confirm Password" className="form-control m-1"/>                              
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                                <input type="text" name="phonenumber" id="phonenumber" placeholder="Mobile Number" className="form-control m-1" maxlength="10"/>
                        </div>

                        <div className="col-md-6">
                                <input type="text" name="faxnumber" id="faxnumber" placeholder="Fax Number (Optional)" className="form-control m-1"/>                                                
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 d-flex">
                            <div className='me-3 mt-2'>
                                <input type="radio" id="radio1" value="male" name="gender" className='m-1'/>
                                <label for="inlineRadio1"> Male </label>
                            </div>
                            <div className='mt-2'>
                                <input type="radio" id="radio2" value="female" name="gender" className='m-1'/>
                                <label for="inlineradio1"> Female </label>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <input type="date" name="birthdate" id="birthdate" className="form-control m-1" placeholder="Date of Birth (month/day/year)"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="">
                            <div className="form-group2">
                                <select id="bloodgroup" name="bloodgroup" className="form-select m-2">
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
                            <div className="form-group2">
                                <input type="text" name="country" id="country" placeholder="Country" className="form-control m-2"/>
                            </div>
                            <div className="form-group2">
                                <input type="text" name="state" id="state" placeholder="State" className="form-control m-2"/>
                            </div>
                            <div className="form-group2">
                                <input type="text" name="city" id="city" placeholder="City" className="form-control m-2"/>
                            </div>

                            <div className="form-group2">
                                <input type="text" name="address1" id="address1" placeholder="Street1" className="form-control m-2"/>
                            </div>
                            <div className="form-group2">
                                <input type="text" name="address2" id="address2" placeholder="Street2" className="form-control m-2"/>
                            </div>      
                            <div className="form-group2">
                                <input type="text" name="zipcode" id="zipcode" placeholder="Zip Code" className="form-control m-2"/>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <button type="submit" className="btn btn-primary m-2 w-100" id="btnregister" name="btnregister">Submit</button>
                                    <div className='text-center'>Existing User ? <a href="#" style={{textDecoration:"none"}}>Sign In</a></div>
                                </div>    
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
        </>
    );
};

export default Register;