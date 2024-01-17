import React, { useState } from "react";
import Menu from "../Menu";
import Navbar from "../Navbar";
import Subnavbar from "./Subnavbar";
import axios from "axios";
import { useParams } from "react-router-dom";

const Medications = () => {
  const {id} = useParams();
  const [values, setValues] = useState({
    medications_id: id,
    medications: "",
    medicine_type: "",
    medicine_name: "",
    dose: "",
    frequency: "",
    duration: "",
    reason_for_taking: "",
    compliance: "",
    takes_as_prescribed: "",
    allergies: "",
    allergic_reaction: "",
    allergy_type: ""
  })

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  // console.log(values.appointment);
  const handleSubmit = (event) => {
    console.log(values);
    event.preventDefault();
  
    axios
      .post("http://localhost:8080/medication", values)
      .then((res) => {
        if (res.data === "Error") {
          alert("Error while submitting data. Please try again");
        } else {
          alert("Data added successfully");
          window.location.reload(false);
        }
      })
      .catch((err) => console.log(err));

  };

  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div className="col-2 p-0">
          <Menu />
        </div>

        <div className="col-10 historybg">
          <div id="history_1" className="history_1">
            <div className="history_area">
              <Subnavbar />
              <p className="ms-2">Please fill the form carefully</p>

              <div className="rs1_accordion">
                <div
                  className="accordion accordion-flush mb-4"
                  id="accordionFlush"
                >
                  <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded">
                    <h2 className="accordion-header" id="flush-headOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-dropOne"
                        aria-expanded="false"
                        aria-controls="flush-dropOne"
                      >
                        <div>
                          <span className="fs-5"> Medications</span>
                        </div>
                      </button>
                    </h2>

                    <div
                      id="flush-dropOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headOne"
                      data-bs-parent="#accordionFlush"
                    >
                      <div className="accordion-body p-4">
                        <div className="col-xs-12">
                          <div className="form-group row">
                            <label className="col-xs-12" htmlFor="medications">Medications</label>
                            <div className="col-xs-12">
                              <textarea
                                name="medications"
                                id="medications"
                                cols="30"
                                rows="4"
                                className="form-control border-2"
                                onChange={handleInput}
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rs1_accordion">
                <div
                  className="accordion accordion-flush mb-4"
                  id="accordionFlush2"
                >
                  <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded">
                    <h2 className="accordion-header" id="flush-headTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-dropTwo"
                        aria-expanded="false"
                        aria-controls="flush-dropTwo"
                      >
                        <div>
                          <span className="fs-5"> Current Medicines</span>
                        </div>
                      </button>
                    </h2>

                    <div
                      id="flush-dropTwo"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headTwo"
                      data-bs-parent="#accordionFlush2"
                    >
                      <div className="accordion-body p-4">
                        <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group row">
                              <label className="col-xs-12" htmlFor="medicine_type">Type</label>
                              <div className="col-xs-12">
                                <select
                                  name="medicine_type"
                                  id="medicine_type"
                                  className="form-select border-2"
                                  onChange={handleInput}
                                >
                                  <option value="">Select</option>
                                  <option value="prescribed">Prescribed</option>
                                  <option value="over_the_counter">
                                    Over the counter
                                  </option>
                                  <option value="herbal">Herbal</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group row">
                              <label className="col-xs-12" htmlFor="medicine_name">Name</label>
                              <div className="col-xs-12">
                                <input
                                  type="text"
                                  name="medicine_name"
                                  id="medicine_name"
                                  className="form-control border-2"
                                  onChange={handleInput}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group row">
                              <label className="col-xs-12" htmlFor="dose">Dose</label>
                              <div className="col-xs-12">
                                <input
                                  type="text"
                                  name="dose"
                                  id="dose"
                                  className="form-control border-2"
                                  onChange={handleInput}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group row">
                              <label className="col-xs-12" htmlFor="frequency">Frequency</label>
                              <div className="col-xs-12">
                                <input
                                  type="text"
                                  name="frequency"
                                  id="frequency"
                                  className="form-control border-2"
                                  onChange={handleInput}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group row ">
                              <label className="col-xs-12" htmlFor="duration">Duration</label>
                              <div className="col-xs-12">
                                <input
                                  type="text"
                                  name="duration"
                                  id="duration"
                                  className="form-control border-2"
                                  onChange={handleInput}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group row">
                              <label className="col-xs-12" htmlFor="reason_for_taking">
                                Reason for taking
                              </label>
                              <div className="col-xs-12">
                                <input
                                  type="text"
                                  name="reason_for_taking"
                                  id="reason_for_taking"
                                  className="form-control border-2"
                                  onChange={handleInput}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12">
                            <div className="form-group form-horizontal row">
                              <label className="col-xs-5 col-sm-3 col-md-2" htmlFor="compliance_yes">
                                Compliance
                              </label>
                              <div className="col-xs-7 col-sm-5 col-md-4">
                                <label className="radio-inline me-4">
                                  <input
                                    type="radio"
                                    name="compliance"
                                    id="compliance_yes"
                                    value="yes"
                                  onChange={handleInput}
                                  />{" "}
                                  Yes
                                </label>
                                <label className="radio-inline me-4">
                                  <input
                                    type="radio"
                                    name="compliance"
                                    id="compliance_no"
                                    value="no"
                                  onChange={handleInput}

                                  />{" "}
                                  No
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12">
                            <div className="form-group form-horizontal row">
                              <label className="col-xs-5 col-sm-3 col-md-2" htmlFor="takes_as_prescribed_yes">
                                Takes as Prescribed
                              </label>
                              <div className="col-xs-7 col-sm-5 col-md-4">
                                <label className="radio-inline me-4">
                                  <input
                                    type="radio"
                                    name="takes_as_prescribed"
                                    id="takes_as_prescribed_yes"
                                    value="yes"
                                  onChange={handleInput}

                                  />{" "}
                                  Yes
                                </label>
                                <label className="radio-inline me-4">
                                  <input
                                    type="radio"
                                    name="takes_as_prescribed"
                                    id="takes_as_prescribed_no"
                                    value="no"
                                  onChange={handleInput}

                                  />{" "}
                                  No
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12">
                            <button className="btn btn-primary m-2">
                              + Add More
                            </button>
                            <hr className="col-xs-10" />
                          </div>

                          <div className="col-xs-12">
                            <div className="form-group form-horizontal row">
                              <label className="col-xs-5 col-sm-3 col-md-2" htmlFor="allergies_yes">
                                Allergies
                              </label>
                              <div className="col-xs-7 col-sm-5 col-md-4">
                                <label className="radio-inline me-4">
                                  <input
                                    type="radio"
                                    name="allergies"
                                    id="allergies_yes"
                                    value="yes"
                                  onChange={handleInput}

                                  />{" "}
                                  Yes
                                </label>
                                <label className="radio-inline me-4">
                                  <input
                                    type="radio"
                                    name="allergies"
                                    id="allergies_no"
                                    value="no"
                                  onChange={handleInput}

                                  />{" "}
                                  No
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group row">
                              <label className="col-xs-12" htmlFor="allergy_type">Type</label>
                              <div className="col-xs-12">
                                <select
                                  name="allergy_type"
                                  id="allergy_type"
                                  className="form-select border-2"
                                  onChange={handleInput}

                                >
                                  <option value="">Select</option>
                                  <option value="medicines">Medicines</option>
                                  <option value="food">Food</option>
                                  <option value="insects">Insects</option>
                                  <option value="animals">Animals</option>
                                  <option value="other">Others</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group row">
                              <label className="col-xs-12" htmlFor="allergic_reaction">
                                Allergic reaction
                              </label>
                              <div className="col-xs-12">
                                <select
                                  name="allergic_reaction"
                                  id="allergic_reaction"
                                  className="form-select border-2"
                                  onChange={handleInput}
                                >
                                  <option value="">Select</option>
                                  <option value="itching">Itching</option>
                                  <option value="swelling">Swelling</option>
                                  <option value="other">Other</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-success m-2 mb-5 ms-2 p-2 ps-4 pe-4" onClick={handleSubmit}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Medications;
