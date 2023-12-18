import React from "react";
import Menu from "../Menu";
import Navbar from "../Navbar";
import Subnavbar from "./Subnavbar";

const History2 = () => {
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
              <h5 className="ms-2">Past Medical History</h5>

              <div className="rs1_accordion">
                <div
                  className="accordion accordion-flush mb-4"
                  id="accordionFlush1"
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
                          <span className="fs-5">
                            {" "}
                            Illness History in the family
                          </span>
                        </div>
                      </button>
                    </h2>

                    <div
                      id="flush-dropOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headOne"
                      data-bs-parent="#accordionFlush1"
                    >
                      <div className="accordion-body p-4">
                        <div className="col-xs-12 p-2">
                          <div className="form-group p-1">
                            <div className="">
                              <label className="checkbox-inline me-4">
                                <input
                                  type="checkbox"
                                  name="diabetes"
                                  id="diabetes"
                                  value="Diabetes"
                                />{" "}
                                Diabetes
                              </label>
                              <label className="checkbox-inline me-4">
                                <input
                                  type="checkbox"
                                  name="heartdisease"
                                  id="heartdisease"
                                  value="HeartDisease"
                                />{" "}
                                Heart Disease
                              </label>
                            </div>
                            <div className="col-xs-12">
                              <textarea
                                name="heartdisease_desc"
                                id="heartdisease_desc"
                                rows="4"
                                className="form-control border-2"
                              ></textarea>
                            </div>
                          </div>
                          <div className="form-group p-1">
                            <div className="">
                              <label className="checkbox-inline me-4">
                                <input
                                  type="checkbox"
                                  name="hypertension"
                                  id="hypertension"
                                  value="Hypertension"
                                />{" "}
                                Hypertension
                              </label>
                              <label className="checkbox-inline me-4">
                                <input
                                  type="checkbox"
                                  name="stroke"
                                  id="stroke"
                                  value="Stroke"
                                />{" "}
                                Stroke
                              </label>
                              <label className="checkbox-inline me-4">
                                <input
                                  type="checkbox"
                                  name="asthama"
                                  id="asthama"
                                  value="Asthma"
                                />{" "}
                                Asthma
                              </label>
                            </div>
                            <div className="col-xs-12">
                              <textarea
                                name="asthama_desc"
                                id="asthama_desc"
                                rows="4"
                                className="form-control border-2"
                              ></textarea>
                            </div>
                          </div>

                          <div className="form-group p-1">
                            <div className="">
                              <label className="checkbox-inline me-4">
                                <input
                                  type="checkbox"
                                  name="cancer"
                                  id="cancer"
                                  value="Cancer"
                                />{" "}
                                Cancer
                              </label>
                              <label className="checkbox-inline me-4">
                                <input
                                  type="checkbox"
                                  name="arthritis"
                                  id="arthritis"
                                  value="Arthritis"
                                />{" "}
                                Arthritis
                              </label>
                              <label className="checkbox-inline me-4">
                                <input
                                  type="checkbox"
                                  name="tuberculosis"
                                  id="tuberculosis"
                                  value="Tuberculosis"
                                />{" "}
                                Tuberculosis
                              </label>
                              <label className="checkbox-inline me-4">
                                <input
                                  type="checkbox"
                                  name="epilepey"
                                  id="epilepey"
                                  value="Epilepsy"
                                />{" "}
                                Epilepsy
                              </label>
                            </div>
                            <div className="col-xs-12">
                              <textarea
                                name="epilepey_desc"
                                id="epilepey_desc"
                                rows="4"
                                className="form-control border-2"
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
                          <span className="fs-5"> Past Surgical History</span>
                        </div>
                      </button>
                    </h2>

                    <div
                      id="flush-dropTwo"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headTwo"
                      data-bs-parent="#accordionFlush2"
                    >
                      <div className="accordion-body p-0">
                        <form
                          method=""
                          action=""
                          className="historyform mb-4 p-3"
                        >
                          <div id="content" class="content m-2">
                            <ul class="list-unstyled">
                              <li class="d-flex">
                                <b>Operation Date :</b> &nbsp;&nbsp;
                                <input
                                  type="date"
                                  class="form-control w-25 border-2"
                                />
                              </li>
                              <br />

                              <li className="m-2">
                                <b>Type :</b> <br />
                                <textarea
                                  rows="4"
                                  class="form-control w-100 border-2 m-2"
                                ></textarea>
                              </li>
                              <li className="m-2">
                                <b>Reason :</b> <br />
                                <textarea
                                  rows="4"
                                  class="form-control w-100 border-2 m-2"
                                ></textarea>
                              </li>
                              <li className="m-2">
                                <b>Outcome : </b>
                                <br />
                                <textarea
                                  rows="4"
                                  class="form-control w-100 border-2 m-2"
                                ></textarea>
                              </li>
                              <li className="m-2">
                                <b>Complications : </b>
                                <br />
                                <textarea
                                  rows="4"
                                  class="form-control w-100 border-2 m-2"
                                ></textarea>
                              </li>
                            </ul>
                            <div class="m-4">
                              <button
                                type="submit"
                                name="save"
                                id="save"
                                class="btn btn-success me-2"
                              >
                                Save
                              </button>
                              <button
                                type="submit"
                                name="update"
                                id="update"
                                class="btn btn-primary"
                              >
                                Update
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rs1_accordion">
                <div
                  className="accordion accordion-flush mb-4"
                  id="accordionFlush3"
                >
                  <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded">
                    <h2 className="accordion-header" id="flush-headThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-dropThree"
                        aria-expanded="false"
                        aria-controls="flush-dropThree"
                      >
                        <div>
                          <span className="fs-5">
                            {" "}
                            Childhood Illness & Immunizations
                          </span>
                        </div>
                      </button>
                    </h2>

                    <div
                      id="flush-dropThree"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headThree"
                      data-bs-parent="#accordionFlush3"
                    >
                      <div className="accordion-body p-4">
                        <div className="col-xs-12">
                          <div className="row">
                            <div
                              className="col-xs-12 col-sm-4 col-md-6"
                              style={{ borderRight: "1px solid #ccc" }}
                            >
                              <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                  <span className="HeadingTxt">
                                    <strong>Childhood Illness</strong>
                                  </span>
                                </div>
                              </div>
                              <br />
                              <div className="form-group">
                                <label className="col-xs-12 col-md-12">
                                  <input
                                    type="checkbox"
                                    name="polio"
                                    id="polio"
                                    value="Polio"
                                  />{" "}
                                  Polio
                                </label>
                              </div>
                              <div className="form-group">
                                <label className="col-xs-12 col-md-12">
                                  <input
                                    type="checkbox"
                                    name="measles"
                                    id="measles"
                                    value="Measles"
                                  />{" "}
                                  Measles
                                </label>
                              </div>
                              <div className="form-group">
                                <label className="col-xs-12 col-md-12">
                                  <input
                                    type="checkbox"
                                    name="mumps"
                                    id="mumps"
                                    value="Mumps"
                                  />{" "}
                                  Mumps
                                </label>
                              </div>
                              <div className="form-group">
                                <label className="col-xs-12 col-md-12">
                                  <input
                                    type="checkbox"
                                    name="rubella"
                                    id="rubella"
                                    value="Rubella"
                                  />{" "}
                                  Rubella
                                </label>
                              </div>
                              <div className="form-group">
                                <label className="col-xs-12 col-md-12">
                                  <input
                                    type="checkbox"
                                    name="whooping_cough"
                                    id="whooping_cough"
                                    value="WhoopingCough"
                                  />{" "}
                                  Whooping Cough
                                </label>
                              </div>
                              <div className="form-group ">
                                <label className="col-xs-12 col-md-12">
                                  <input
                                    type="checkbox"
                                    name="chicken_pox"
                                    id="chicken_pox"
                                    value="ChickenPox"
                                  />{" "}
                                  Chicken Pox
                                </label>
                              </div>
                              <div className="form-group">
                                <label className="col-xs-12 col-md-12">
                                  <input
                                    type="checkbox"
                                    name="rheumatic_fever"
                                    id="rheumatic_fever"
                                    value="RheumaticFever"
                                  />{" "}
                                  Rheumatic Fever
                                </label>
                              </div>
                            </div>
                            <div className="col-xs-12 col-sm-8 col-md-6">
                              <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                  <span className="HeadingTxt">
                                    <strong>Immunizations</strong>
                                  </span>
                                </div>
                              </div>
                              <br />

                              <div className="form-group row">
                                <label className="col-xs-5 col-sm-4">BCG</label>
                                <div className="col-xs-7 col-sm-8 col-md-8">
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="bcg"
                                      id="bcg"
                                      value="yes"
                                    />{" "}
                                    Yes
                                  </label>
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="bcg"
                                      id="bcg"
                                      value="no"
                                    />{" "}
                                    No
                                  </label>
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="bcg"
                                      id="bcg"
                                      value="unknown"
                                    />{" "}
                                    Unknown
                                  </label>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-xs-5 col-sm-4">MMR</label>
                                <div className="col-xs-7 col-sm-8 col-md-8">
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="mmr"
                                      id="mmr"
                                      value="yes"
                                    />{" "}
                                    Yes
                                  </label>
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="mmr"
                                      id="mmr"
                                      value="no"
                                    />{" "}
                                    No
                                  </label>
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="mmr"
                                      id="mmr"
                                      value="unknown"
                                    />{" "}
                                    Unknown
                                  </label>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-xs-5 col-sm-4">
                                  Polio
                                </label>
                                <div className="col-xs-7 col-sm-8 col-md-8">
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="polio_immune"
                                      id="polio_immune"
                                      value="yes"
                                    />{" "}
                                    Yes
                                  </label>
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="polio_immune"
                                      id="polio_immune"
                                      value="no"
                                    />{" "}
                                    No
                                  </label>
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="polio_immune"
                                      id="polio_immune"
                                      value="unknown"
                                    />{" "}
                                    Unknown
                                  </label>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-xs-5 col-sm-4">
                                  Hepatitis
                                </label>
                                <div className="col-xs-7 col-sm-8 col-md-8">
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="hepatitis"
                                      id="hepatitis"
                                      value="yes"
                                    />{" "}
                                    Yes
                                  </label>
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="hepatitis"
                                      id="hepatitis"
                                      value="no"
                                    />{" "}
                                    No
                                  </label>
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="hepatitis"
                                      id="hepatitis"
                                      value="unknown"
                                    />{" "}
                                    Unknown
                                  </label>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-xs-5 col-sm-4">
                                  H Influenza
                                </label>
                                <div className="col-xs-7 col-sm-8 col-md-8">
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="influenza"
                                      id="influenza"
                                      value="yes"
                                    />{" "}
                                    Yes
                                  </label>
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="influenza"
                                      id="influenza"
                                      value="no"
                                    />{" "}
                                    No
                                  </label>
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="influenza"
                                      id="influenza"
                                      value="unknown"
                                    />{" "}
                                    Unknown
                                  </label>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-xs-5 col-sm-4">
                                  Pnueumonia
                                </label>
                                <div className="col-xs-7 col-sm-8 col-md-8">
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="pneumonia"
                                      id="pneumonia"
                                      value="yes"
                                    />{" "}
                                    Yes
                                  </label>
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="pneumonia"
                                      id="pneumonia"
                                      value="no"
                                    />{" "}
                                    No
                                  </label>
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="pneumonia"
                                      id="pneumonia"
                                      value="unknown"
                                    />{" "}
                                    Unknown
                                  </label>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-xs-5 col-sm-4">
                                  Vericella
                                </label>
                                <div className="col-xs-7 col-sm-8 col-md-8">
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="varicella"
                                      id="varicella"
                                      value="yes"
                                    />{" "}
                                    Yes
                                  </label>
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="varicella"
                                      id="varicella"
                                      value="no"
                                    />{" "}
                                    No
                                  </label>
                                  <label className="radio-inline me-3">
                                    <input
                                      type="radio"
                                      name="varicella"
                                      id="varicella"
                                      value="unknown"
                                    />{" "}
                                    Unknown
                                  </label>
                                </div>
                              </div>
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
                  id="accordionFlush4"
                >
                  <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded">
                    <h2 className="accordion-header" id="flush-headFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-dropFour"
                        aria-expanded="false"
                        aria-controls="flush-dropFour"
                      >
                        <div>
                          <span className="fs-5"> Accidents</span>
                        </div>
                      </button>
                    </h2>

                    <div
                      id="flush-dropFour"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headFour"
                      data-bs-parent="#accordionFlush4"
                    >
                      <div className="accordion-body p-4">
                        <div class="col-xs-12">
                          <div class="row eachFormRow">
                            <div class="col-xs-12">
                              <div class="form-group row">
                                <label class="col-xs-5 col-sm-4 col-md-3">
                                  Motor vehicle accidents
                                </label>
                                <div class="col-xs-7 col-sm-8 col-md-8">
                                  <label class="radio-inline me-4">
                                    <input
                                      type="radio"
                                      name="motor_vehicle_accidents"
                                      id="motor_vehicle_accidents"
                                      value="yes"
                                    />{" "}
                                    Yes
                                  </label>
                                  <label class="radio-inline me-4">
                                    <input
                                      type="radio"
                                      name="motor_vehicle_accidents"
                                      id="motor_vehicle_accidents"
                                      value="no"
                                    />{" "}
                                    No
                                  </label>
                                </div>
                              </div>
                              <div class="form-group row">
                                <div class="col-xs-12">
                                  <textarea
                                    name="motor_vehicle_accidents_desc"
                                    id="motor_vehicle_accidents_desc"
                                    cols="30"
                                    rows="4"
                                    class="form-control border-2"
                                  ></textarea>
                                </div>
                              </div>
                              <div class="form-group row mt-4">
                                <label class="col-xs-5 col-sm-4 col-md-3">
                                  Blood Group
                                </label>
                                <div class="col-xs-7 col-sm-5 col-md-2">
                                  <select
                                    name="blood_group"
                                    id="blood_group"
                                    class="form-select border-2"
                                  >
                                    <option value="">Select</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                  </select>
                                </div>
                              </div>
                              <div class="form-group row">
                                <label class="col-xs-5 col-sm-4 col-md-3">
                                  Blood Transfusion received
                                </label>
                                <div class="col-xs-7 col-sm-8 col-md-8">
                                  <label class="radio-inline me-4">
                                    <input
                                      type="radio"
                                      name="blood_transfusions_received"
                                      id="blood_transfusions_received"
                                      value="yes"
                                    />{" "}
                                    Yes
                                  </label>
                                  <label class="radio-inline me-4">
                                    <input
                                      type="radio"
                                      name="blood_transfusions_received"
                                      id="blood_transfusions_received"
                                      value="no"
                                    />{" "}
                                    No
                                  </label>
                                  <label class="radio-inline me-4">
                                    <input
                                      type="radio"
                                      name="blood_transfusions_received"
                                      id="blood_transfusions_received"
                                      value="before1992"
                                    />{" "}
                                    Before 1992
                                  </label>
                                </div>
                              </div>
                              <div class="form-group row">
                                <label class="col-xs-5 col-sm-4 col-md-3">
                                  Blood Transfusion given
                                </label>
                                <div class="col-xs-7 col-sm-8 col-md-8">
                                  <label class="radio-inline me-4">
                                    <input
                                      type="radio"
                                      name="blood_transfusions_given"
                                      id="blood_transfusions_given"
                                      value="yes"
                                    />{" "}
                                    Yes
                                  </label>
                                  <label class="radio-inline me-4">
                                    <input
                                      type="radio"
                                      name="blood_transfusions_given"
                                      id="blood_transfusions_given"
                                      value="no"
                                    />{" "}
                                    No
                                  </label>
                                  <label class="radio-inline me-4">
                                    <input
                                      type="radio"
                                      name="blood_transfusions_given"
                                      id="blood_transfusions_given"
                                      value="before1992"
                                    />{" "}
                                    Before 1992
                                  </label>
                                </div>
                              </div>
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
                  id="accordionFlush5"
                >
                  <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded">
                    <h2 className="accordion-header" id="flush-headFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-dropFive"
                        aria-expanded="false"
                        aria-controls="flush-dropFive"
                      >
                        <div>
                          <span className="fs-5"> Hospitalizations</span>
                        </div>
                      </button>
                    </h2>

                    <div
                      id="flush-dropFive"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headFive"
                      data-bs-parent="#accordionFlush5"
                    >
                      <div className="accordion-body p-4">
                        <div className="col-xs-12">
                          <div className="row">
                            <div className="col-xs-12">
                              <div className="form-group row">
                                <label className="col-xs-5 col-sm-4 col-md-3">
                                  Hospitalizations
                                </label>
                                <div className="col-xs-7 col-sm-8 col-md-8">
                                  <label className="radio-inline me-4">
                                    <input
                                      type="radio"
                                      name="Hospitalizations"
                                      id="Hospitalizations"
                                      value="yes"
                                    />{" "}
                                    Yes
                                  </label>
                                  <label className="radio-inline me-4">
                                    <input
                                      type="radio"
                                      name="Hospitalizations"
                                      id="Hospitalizations"
                                      value="no"
                                    />{" "}
                                    No
                                  </label>
                                </div>
                              </div>

                              <div className="form-group row mt-4">
                                <label className="col-xs-5 col-sm-4 col-md-3">
                                  Date
                                </label>
                                <div className="col-xs-7 col-sm-5 col-md-2">
                                  <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    placeholder="Date"
                                    className="form-control border-2"
                                  />
                                </div>
                              </div>
                              <div id="content" class="content m-2">
                                <ul className="list-unstyled">
                                  <li className="m-2">
                                    <b>Reason :</b> <br />
                                    <textarea
                                      rows="4"
                                      className="form-control w-100 border-2 m-2"
                                    ></textarea>
                                  </li>
                                  <li className="m-2">
                                    <b>Outcome : </b>
                                    <br />
                                    <textarea
                                      rows="4"
                                      className="form-control w-100 border-2 m-2"
                                    ></textarea>
                                  </li>
                                </ul>
                              </div>
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
                  id="accordionFlush6"
                >
                  <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded">
                    <h2 className="accordion-header" id="flush-headSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-dropSix"
                        aria-expanded="false"
                        aria-controls="flush-dropSix"
                      >
                        <div>
                          <span className="fs-5"> Family History</span>
                        </div>
                      </button>
                    </h2>

                    <div
                      id="flush-dropSix"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headSix"
                      data-bs-parent="#accordionFlush6"
                    >
                      <div className="accordion-body p-4">
                        <div className="col-xs-12">
                          <div className="row">
                            <div className="col-xs-12">
                              <div className="form-group row">
                                <label className="col-xs-5 col-sm-4 col-md-3">
                                  Parents Living?
                                </label>
                                <div className="col-xs-7 col-sm-8 col-md-8">
                                  <label className="radio-inline me-4">
                                    <input
                                      type="radio"
                                      name="parents_living"
                                      id="parents_living"
                                      value="yes"
                                      className="border-2"
                                    />{" "}
                                    Yes
                                  </label>
                                  <label className="radio-inline me-4">
                                    <input
                                      type="radio"
                                      name="parents_living"
                                      id="parents_living"
                                      value="no"
                                      className="border-2"
                                    />{" "}
                                    No
                                  </label>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-xs-12">
                                  Cause of Death
                                </label>
                                <div className="col-xs-12">
                                  <textarea
                                    name="cause_of_death"
                                    id="cause_of_death"
                                    cols="30"
                                    rows="4"
                                    className="form-control border-2"
                                  ></textarea>
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="col-xs-12 col-sm-6">
                                  <div className="form-group row">
                                    <label className="col-xs-12">
                                      How many Siblings?
                                    </label>
                                    <div className="col-xs-12">
                                      <input
                                        type="text"
                                        className="form-control border-2"
                                        name="siblings"
                                        id="siblings"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                  <div className="form-group row">
                                    <label className="col-xs-12">
                                      Any Medical Issue with Siblings
                                    </label>
                                    <div className="col-xs-12">
                                      <input
                                        type="text"
                                        className="form-control border-2"
                                        name="medical_issues_with_siblings"
                                        id="medical_issues_with_siblings"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                  <div className="form-group row">
                                    <label className="col-xs-12">
                                      How Many Children?
                                    </label>
                                    <div className="col-xs-12">
                                      <input
                                        type="text"
                                        className="form-control border-2"
                                        name="no_of_children"
                                        id="no_of_children"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                  <div className="form-group row">
                                    <label className="col-xs-12">
                                      Any Medical Issue with Children ?
                                    </label>
                                    <div className="col-xs-12">
                                      <input
                                        type="text"
                                        className="form-control border-2"
                                        name="medical_issues_with_children"
                                        id="medical_issues_with_children"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xs-12">
                                  <div className="form-group row">
                                    <label className="col-xs-12">Spouse</label>
                                    <div className="col-xs-12">
                                      <input
                                        type="text"
                                        className="form-control border-2"
                                        name="spouse"
                                        id="spouse"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
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
                  id="accordionFlush7"
                >
                  <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded">
                    <h2 className="accordion-header" id="flush-headSeven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-dropSeven"
                        aria-expanded="false"
                        aria-controls="flush-dropSeven"
                      >
                        <div>
                          <span className="fs-5"> Previous Tests</span>
                        </div>
                      </button>
                    </h2>

                    <div
                      id="flush-dropSeven"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headSeven"
                      data-bs-parent="#accordionFlush7"
                    >
                      <div className="accordion-body p-4">
                        <div className="col-xs-12">
                          <div className="form-group row">
                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="hemoccults"
                                id="hemoccults"
                                value="Hemoccults"
                              />{" "}
                              Hemoccults
                            </label>

                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="vision_check"
                                id="vision_check"
                                value="Vision Check"
                              />{" "}
                              Vision Check
                            </label>

                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="random_blood_sugar"
                                id="random_blood_sugar"
                                value="Random Blood Sugar"
                              />{" "}
                              Random Blood Sugar
                            </label>

                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="tuberculin_skin_test"
                                id="tuberculin_skin_test"
                                value="Tuberculin Skin Test"
                              />{" "}
                              Tuberculin Skin Test
                            </label>
                          </div>

                          <div className="form-group row">
                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="foot_exam"
                                id="foot_exam"
                                value="Foot Exam"
                              />{" "}
                              Foot Exam
                            </label>

                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="basic_metabolic_panel"
                                id="basic_metabolic_panel"
                                value="Basic Metabolic Panel"
                              />{" "}
                              Basic Metabolic Panel
                            </label>

                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="cholestorol_screen"
                                id="cholestorol_screen"
                                value="Cholesterol Screen"
                              />{" "}
                              Cholesterol Screen
                            </label>

                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="hepotitis_b"
                                id="hepotitis_b"
                                value="Hepatitis B"
                              />{" "}
                              Hepatitis B
                            </label>
                          </div>

                          <div className="form-group row">
                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="xray_chest"
                                id="xray_chest"
                                value="X-ray Chest"
                              />{" "}
                              X-ray Chest
                            </label>

                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="blood_pressure"
                                id="blood_pressure"
                                value="Blood Pressure"
                              />{" "}
                              Blood Pressure
                            </label>

                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="hiv"
                                id="hiv"
                                value="HIV"
                              />{" "}
                              HIV
                            </label>

                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="diabetics_urine"
                                id="diabetics_urine"
                                value="In Diabetic's Urine"
                              />{" "}
                              In Diabetic's Urine
                            </label>
                          </div>

                          <div className="form-group row">
                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="CBC_with_differential"
                                id="CBC_with_differential"
                                value="CBC with differential"
                              />{" "}
                              CBC with differential
                            </label>

                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="urine_analysis"
                                id="urine_analysis"
                                value="Urine Analysis"
                              />{" "}
                              Urine Analysis
                            </label>

                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="hepotitis_a"
                                id="hepotitis_a"
                                value="Hepatitis A"
                              />{" "}
                              Hepatitis A
                            </label>

                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="liver_function_tests"
                                id="liver_function_tests"
                                value="Liver Function Test"
                              />{" "}
                              Liver Function Test
                            </label>
                          </div>

                          <div className="form-group row ">
                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="pap_smear"
                                id="pap_smear"
                                value="Pap Smear"
                              />{" "}
                              Pap Smear
                            </label>

                            <label className="col-xs-12 col-sm-6 col-md-3">
                              <input
                                type="checkbox"
                                name="hepatitis_c"
                                id="hepatitis_c"
                                value="Hepatitis C"
                              />{" "}
                              Hepatitis C
                            </label>
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
                  id="accordionFlush8"
                >
                  <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded">
                    <h2 className="accordion-header" id="flush-headEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-dropEight"
                        aria-expanded="false"
                        aria-controls="flush-dropEight"
                      >
                        <div>
                          <span className="fs-5"> Social History</span>
                        </div>
                      </button>
                    </h2>

                    <div
                      id="flush-dropEight"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headEight"
                      data-bs-parent="#accordionFlush8"
                    >
                      <div className="accordion-body p-4">
                        <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group row">
                              <label className="col-xs-12">Birth Place</label>
                              <div className="col-xs-12">
                                <input
                                  type="text"
                                  name="birthplace"
                                  id="birthplace"
                                  className="form-control border-2"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group row">
                              <label className="col-xs-12">
                                Living Accommodations
                              </label>
                              <div className="col-xs-12">
                                <input
                                  type="text"
                                  name="living_accommodations"
                                  id="living_accommodations"
                                  className="form-control border-2"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group row">
                              <label className="col-xs-12">Education</label>
                              <div className="col-xs-12">
                                <input
                                  type="text"
                                  name="education"
                                  id="education"
                                  className="form-control border-2"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group row">
                              <label className="col-xs-12">Hobbies</label>
                              <div className="col-xs-12">
                                <input
                                  type="text"
                                  name="hobbies"
                                  id="hobbies"
                                  className="form-control border-2"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group row">
                              <label className="col-xs-12">Religion</label>
                              <div className="col-xs-12">
                                <input
                                  type="text"
                                  name="religion"
                                  id="religion"
                                  className="form-control border-2"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group row">
                              <label className="col-xs-12">
                                Persons at home
                              </label>
                              <div className="col-xs-12">
                                <input
                                  type="text"
                                  name="persons_at_home"
                                  id="persons_at_home"
                                  className="form-control border-2"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group row">
                              <label className="col-xs-12">Employment</label>
                              <div className="col-xs-12">
                                <input
                                  type="text"
                                  name="employment"
                                  id="employment"
                                  className="form-control border-2"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group row">
                              <label className="col-xs-12">Diet</label>
                              <div className="col-xs-12">
                                <input
                                  type="text"
                                  name="diet"
                                  id="diet"
                                  value=""
                                  className="form-control border-2"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group row">
                              <label className="col-xs-12">
                                Marriage / divorce
                              </label>
                              <div className="col-xs-12">
                                <input
                                  type="text"
                                  name="marriage_divorce"
                                  id="marriage_divorce"
                                  className="form-control border-2"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12 col-sm-6">
                            <div className="form-group row">
                              <label for="" className="col-xs-12">
                                Exercise
                              </label>
                              <div className="col-xs-12">
                                <input
                                  type="text"
                                  name="exercise"
                                  id="exercise"
                                  className="form-control border-2"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12">
                            <div className="form-group row">
                              <label className="col-xs-5 col-sm-4 col-md-3">
                                Secondary Smoking?
                              </label>
                              <div className="col-xs-7 col-sm-8 col-md-8">
                                <label className="radio-inline me-4">
                                  <input
                                    type="radio"
                                    name="secondary_smoking"
                                    id="secondary_smoking"
                                    value="yes"
                                  />{" "}
                                  Yes
                                </label>
                                <label className="radio-inline me-4">
                                  <input
                                    type="radio"
                                    name="secondary_smoking"
                                    id="secondary_smoking"
                                    value="no"
                                  />{" "}
                                  No
                                </label>
                              </div>
                            </div>

                            <div className="row form-group">
                              <div className="col-xs-12">
                                History of secondary smoking
                              </div>
                              <div className="col-xs-12">
                                <textarea
                                  name="history_of_secondary_smoking"
                                  id="history_of_secondary_smoking"
                                  rows="3"
                                  className="form-control border-2"
                                ></textarea>
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12">
                            <div className="form-group row">
                              <label className="col-xs-12 fst-italic">Tobacco</label>

                              <div className="col-xs-12">
                                <div className="row">
                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="radio"
                                      name="tobacco"
                                      id="tobacco"
                                      value="no"
                                    />{" "}
                                    No
                                  </label>

                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="radio"
                                      name="tobacco"
                                      id="tobacco"
                                      value="quit"
                                    />{" "}
                                    Quit
                                  </label>

                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="radio"
                                      name="tobacco"
                                      id="tobacco"
                                      value="remote_exposure"
                                    />{" "}
                                    Remote Exposure
                                  </label>

                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="radio"
                                      name="tobacco"
                                      id="tobacco"
                                      value="currently_continuing"
                                    />{" "}
                                    Currently Continuing
                                  </label>

                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="text"
                                      className="form-control border-2"
                                      name="tobacco_no_of_years"
                                      id="tobacco_no_of_years"
                                      placeholder="Years"
                                    />
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12">
                            <div className="form-group row eachFormRow">
                              <label className="col-xs-12 fst-italic">Drugs</label>

                              <div className="col-xs-12">
                                <div className="row">
                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="radio"
                                      name="drugs"
                                      id="drugs"
                                      value="no"
                                    />{" "}
                                    No
                                  </label>

                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="radio"
                                      name="drugs"
                                      id="drugs"
                                      value="quit"
                                    />{" "}
                                    Quit
                                  </label>

                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="radio"
                                      name="drugs"
                                      id="drugs"
                                      value="remote_exposure"
                                    />{" "}
                                    Remote Exposure
                                  </label>

                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="radio"
                                      name="drugs"
                                      id="drugs"
                                      value="currently_continuing"
                                    />{" "}
                                    Currently Continuing
                                  </label>

                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="text"
                                      className="form-control border-2"
                                      name="h2_drugs_no_of_years"
                                      id="h2_drugs_no_of_years"
                                      placeholder="Years"
                                    />
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-xs-12">
                            <div className="form-group row">
                              <label className="col-xs-12 fst-italic">Alcohol</label>

                              <div className="col-xs-12">
                                <div className="row">
                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="radio"
                                      name="alcohol"
                                      id="alcohol"
                                      value="no"
                                    />{" "}
                                    No
                                  </label>

                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="radio"
                                      name="alcohol"
                                      id="alcohol"
                                      value="quit"
                                    />{" "}
                                    Quit
                                  </label>

                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="radio"
                                      name="alcohol"
                                      id="alcohol"
                                      value="remote_exposure"
                                    />{" "}
                                    Remote Exposure
                                  </label>

                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="radio"
                                      name="alcohol"
                                      id="alcohol"
                                      value="currently_continuing"
                                    />{" "}
                                    Currently Continuing
                                  </label>

                                  <label className="col-xs-4 col-sm-3 col-md-2">
                                    <input
                                      type="text"
                                      className="form-control border-2"
                                      value=""
                                      name="alcohol_no_of_years"
                                      id="alcohol_no_of_years"
                                      placeholder="Years"
                                    />
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button className="btn btn-success mb-5 ms-2 p-2 ps-4 pe-4">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History2;
