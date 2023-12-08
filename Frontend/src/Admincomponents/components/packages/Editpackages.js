import React, { useState } from "react";
import Menu from "../Menu";
import { Link, useNavigate } from "react-router-dom";

export default function EditPackages({replaceEdit, editedData, handleChange, handleSave}) {
  return (
    <>
    <div className="d-flex left-div">
      <div className="col-2 p-0">
        <Menu />
      </div>

      <div className="col-10 p-0">
        {/* Right side */}

        <nav className="d-flex bg-light border border-bottom-info p-2">
          <Link to="/dashboardPage" className="text-decoration-none">
            <i className="bi bi-house-fill"></i>&nbsp;Home&nbsp;
          </Link>
          &gt; &nbsp; <Link to="/managepackage"  onClick={replaceEdit}  className="text-decoration-none">Packages</Link>&nbsp; &gt; Edit Packages
        </nav>
        <h4 className="mt-2 ms-2 text-primary">Edit Packages</h4>
        <hr className="ms-4 me-4" />
        <div className="">
          <div className="col-xs-12">
            <form
              className="form-horizontal mb-4"
              action=''
            //   method="post"
              onSubmit={handleSave}
            >
              <div className="form-group d-md-flex">
                <label className="col-sm-4 text-md-end text-primary">
                Package Name{" "}
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="Package Name"
                    className="col-xs-10 col-sm-5 form-control"
                    id="packagename"
                    name="packagename"
                    pattern="[A-Z][a-z]*\s*\w*"
                    title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                    onChange={handleChange}
                    value={editedData.packagename}
                    required
                  />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                >
                  {" "}
                    Description{" "}
                </label>
                <div className="col-sm-8">
                    <textarea
                      placeholder="Package Description"
                      className="col-xs-10 col-sm-5 form-control"
                      id="description"
                      name="description"
                      onChange={handleChange}
                      value={editedData.packagedescription}
                      required
                    />
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                >
                 {" "}
                    Price
                </label>
                <div className="col-md-8">
                    <input
                      type="number"
                      placeholder="package amount"
                      className="col-xs-10 col-sm-5 form-control"
                      id="amount"
                      name="amount"
                      onChange={handleChange}
                      value={editedData.amount}
                      required
                    />
                </div>
              </div>

              <div className="form-group d-md-flex">
                  <label className="col-sm-4 text-md-end text-primary">
                    {" "}
                    Services
                  </label>
                  <div className="col-sm-8 d-flex gap-5">
                    <div className="d-flex flex-column">
                      <div>
                        <input
                          type="checkbox"
                          id="service1"
                          name="service1"
                          value="MohTV Access"
                          onChange={handleChange}
                          defaultChecked={editedData.service1}
                        />&nbsp;
                        <label> MohTV Access</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="service2"
                          name="service2"
                          value="Assistance From Prevmedsol Daughter"
                          onChange={handleChange}
                          defaultChecked={editedData.service2}
                          
                        />&nbsp;
                        <label> Assistance From Prevmedsol Daughter</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="service3"
                          name="service3"
                          value="24/7 Emergency Support"
                          onChange={handleChange}
                          defaultChecked={editedData.service3}

                        />&nbsp;
                        <label> 24/7 Emergency Support</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="service4"
                          name="service4"
                          value="Unlimited Doctor Teleconsultation"
                          onChange={handleChange}
                          defaultChecked={editedData.service4}

                        />&nbsp;
                        <label>Unlimited Doctor Teleconsultation</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="service5"
                          name="service5"
                          value="Eldercare Helpdesk"
                          onChange={handleChange}
                          defaultChecked={editedData.service5}

                        />&nbsp;
                        <label> Eldercare Helpdesk</label>
                      </div>
                    </div>
                    <div className="d-flex flex-column">
                      <div>
                        <input
                          type="checkbox"
                          id="service6"
                          name="service6"
                          value="Prevmedsol Companion"
                          onChange={handleChange}
                          defaultChecked={editedData.service6}

                        />&nbsp;
                        <label> Prevmedsol Companion</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="service7"
                          name="service7"
                          value="Doctors Appointment"
                          onChange={handleChange}
                          defaultChecked={editedData.service7}

                        />&nbsp;
                        <label> Doctors Appointment</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="service8"
                          name="service8"
                          value="Ambulance Expense"
                          onChange={handleChange}
                          defaultChecked={editedData.service8}

                        />&nbsp;
                        <label> Ambulance Expense</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="service9"
                          name="service9"
                          value="Virtual Community"
                          onChange={handleChange}
                          defaultChecked={editedData.service9}

                        />&nbsp;
                        <label> Virtual Community</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="service10"
                          name="service10"
                          value="Full-body Checkup"
                          onChange={handleChange}
                          defaultChecked={editedData.service10}

                        />&nbsp;
                        <label> Full-body Checkup</label>
                      </div>
                    </div>
                  </div>
                </div>

              <div className="text-center">
                <div className="col-md-offset-3">
                  <button
                    className="btn btn-success"
                    type="submit"
                    id="btn-save"
                    name="btn-save"
                  >
                    <i className="bi bi-save2-fill"></i>&nbsp; Save
                  </button>
                  &nbsp; &nbsp;
                  <button className="btn btn-danger" type="reset" onClick={replaceEdit}>
                    <i className="bi bi-trash-fill"></i>&nbsp; Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <hr></hr>
        <footer className="page-footer font-small bg-blue m-4">
          <div className="footer-copyright text-center">
            <span className="text-primary fs-6">PrevMed Sol&nbsp;</span>
            Copyrights © 2023
          </div>
        </footer>

        {/* Right side */}
      </div>
    </div>
    </>
  )
}
