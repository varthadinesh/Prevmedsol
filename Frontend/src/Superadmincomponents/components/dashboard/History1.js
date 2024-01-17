import React, { useState } from "react";
import Menu from "../Menu";
import Navbar from "../Navbar";
import Subnavbar from "./Subnavbar";
import axios from "axios";
import { useParams } from "react-router-dom";

const History1 = () => {
  const {id} = useParams();

  const [values, setValues] = useState({
    appointment_id: id,
    complaint_date: "",
    present_illness: "",
    onset: "",
    duration: "",
    frequency: "",
    location: "",
    quality: "",
    severity: "",
    aggravating_factors: "",
    alleviating_factors: "",
    associated_symptoms: "",
  });

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
    // setErrors(Validation(values));
    // if (errors.name === "" && errors.email === "" && errors.password === "" && errors.cnfpassword === "") {
    axios
      .post("http://localhost:8080/history1", values)
      .then((res) => {
        if (res.data === "Error") {
          alert("Error while submitting data. Please try again");
        } else {
          alert("Data added successfully");
          window.location.reload(false);
        }
      })
      .catch((err) => console.log(err));
    // }
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
              <h5 className="ms-2">History Of Present Illness</h5>
              <div className="rs1_accordion">
                <div className="accordion accordion-flush" id="accordionFlush">
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
                          <span className="fs-5"> Current Complaints</span>
                        </div>
                      </button>
                    </h2>

                    <div
                      id="flush-dropOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headOne"
                      data-bs-parent="#accordionFlush"
                    >
                      <div className="accordion-body p-0">
                        <form
                          method="post"
                          action=""
                          className="historyform mb-5 p-3"
                          onSubmit={handleSubmit}
                        >
                          <div id="content" className="content ms-4 me-4">
                            <ul className="list-unstyled" name="list_unstyled">
                              <li className="d-flex">
                                <b>Date :</b> &nbsp;&nbsp;
                                <input
                                  type="date"
                                  name="complaint_date"
                                  className="form-control w-25 border-2"
                                  onChange={handleInput}
                                />
                              </li>
                              <br />
                              <li>
                                <b>History of Present Illness : </b>
                                <br />
                                <textarea
                                  rows="4"
                                  name="present_illness"
                                  className="form-control w-100 border-2"
                                  onChange={handleInput}
                                ></textarea>
                              </li>
                              <br />
                              <li className="">
                                <b>Place of Symptom(s) :</b>
                              </li>
                              <br />
                              <div className="d-flex flex-wrap mt-1">
                                <div className="col-4 d-flex justify-content-between ps-5 pe-5 pt-2 pb-2">
                                  <label>
                                    Onset:
                                    <input
                                      type="text"
                                      id="onset"
                                      name="onset"
                                      className="form-control w-75 border-2"
                                      onChange={handleInput}
                                    />
                                  </label>
                                </div>
                                <div className="col-4 d-flex justify-content-between ps-5 pe-5 pt-2 pb-2">
                                  <label>
                                    Duration:
                                    <input
                                      type="text"
                                      id="duration"
                                      name="duration"
                                      className="form-control w-75 border-2"
                                      onChange={handleInput}
                                    />
                                  </label>
                                </div>
                                <div className="col-4 d-flex justify-content-between ps-5 pe-5 pt-2 pb-2">
                                  <label>
                                    Frequency:
                                    <select
                                      id="frequency"
                                      name="frequency"
                                      className="form-select w-75 border-2"
                                      onChange={handleInput}
                                    >
                                      <option value="" defaultValue>
                                        Values
                                      </option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                    </select>
                                  </label>
                                </div>

                                <div className="col-4 d-flex justify-content-between ps-5 pe-5 pt-2 pb-2">
                                  <label>
                                    Location
                                    <input
                                      type="text"
                                      id="location"
                                      name="location"
                                      className="form-control w-75 border-2"
                                      onChange={handleInput}
                                    />
                                  </label>
                                </div>
                                <div className="col-4 d-flex justify-content-between ps-5 pe-5 pt-2 pb-2">
                                  <label>
                                    Quality
                                    <input
                                      type="text"
                                      id="quality"
                                      name="quality"
                                      className="form-control w-75 border-2"
                                      onChange={handleInput}
                                    />
                                  </label>
                                </div>
                              </div>
                              <div className="col-4 d-flex justify-content-between ps-5 pe-5 pt-2 pb-5">
                                <label>
                                  <b>Severity</b>
                                  <select
                                    id="severity"
                                    name="severity"
                                    className="form-select w-75 border-2"
                                    onChange={handleInput}
                                  >
                                    <option value="" defaultValue>
                                      Values
                                    </option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                  </select>
                                </label>
                              </div>

                              <li>
                                <b>Aggravating Factors :</b> <br />
                                <textarea
                                  rows="4"
                                  id="aggravating_factors"
                                  name="aggravating_factors"
                                  className="form-control w-100 border-2 m-2"
                                  onChange={handleInput}
                                ></textarea>
                              </li>
                              <li>
                                <b>Alleviating Factors :</b> <br />
                                <textarea
                                  rows="4"
                                  id="alleviating_factors"
                                  name="alleviating_factors"
                                  className="form-control w-100 border-2 m-2"
                                  onChange={handleInput}
                                ></textarea>
                              </li>
                              <li>
                                <b>Associated Symptoms : </b>
                                <br />
                                <textarea
                                  rows="4"
                                  id="associated_symptoms"
                                  name="associated_symptoms"
                                  className="form-control w-100 border-2 m-2"
                                  onChange={handleInput}
                                ></textarea>
                              </li>
                            </ul>
                            <div className="m-4">
                              <button
                                type="submit"
                                name="save"
                                id="save"
                                className="btn btn-success me-2"
                              >
                                Save
                              </button>
                              {/* <button
                                type="submit"
                                name="update"
                                id="update"
                                className="btn btn-primary"
                              >
                                Update
                              </button> */}
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History1;
