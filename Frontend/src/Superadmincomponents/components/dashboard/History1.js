import React from "react";
import Menu from "../Menu";
import Navbar from "../Navbar";
import Subnavbar from "./Subnavbar";

const History1 = () => {

  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div className="col-2 p-0">
          <Menu />
        </div>

        <div className="col-10 historybg">
        <div id="history_1" class="history_1">
        <div class="history_area"> 
           <Subnavbar/>
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
                      
                        <form method="" action="" className="historyform mb-5 p-3">
                          <div id="content" class="content ms-4 me-4">
                              <ul class="list-unstyled">
                                  <li class="d-flex"><b>Date :</b> &nbsp;&nbsp;<input type="date" class="form-control w-25 border-2"/></li><br/>
                                  <li><b>History of Present Illness : </b><br/>
                                  <textarea rows="4" class="form-control w-100 border-2"></textarea></li><br/>
                                  <li class=""><b>Place of Symptom(s) :</b></li><br/>
                              <div class="d-flex flex-wrap mt-1">
                                  <div class="col-4 d-flex justify-content-between ps-5 pe-5 pt-2 pb-2">
                                      <label>Onset:</label>
                                      <input type="text" id="onset" name="onset" class="form-control w-75 border-2"/>
                                  </div>
                                  <div class="col-4 d-flex justify-content-between ps-5 pe-5 pt-2 pb-2">
                                      <label>Duration:</label>
                                      <input type="text" id="duration" name="duration" class="form-control w-75 border-2"/>
                                  </div>
                                  <div class="col-4 d-flex justify-content-between ps-5 pe-5 pt-2 pb-2">
                                      <label>Frequency:</label>
                                      
                                      <select id="frequency" name="frequency" class="form-select w-75 border-2">
                                      <option value="" Selected>Values</option>
                                      <option value="1" >1</option>
                                      <option value="2" >2</option>
                                      </select>
                                  </div>
                                  
                                  <div class="col-4 d-flex justify-content-between ps-5 pe-5 pt-2 pb-2">
                                      <label>Location</label>
                                      <input type="text" id="location" name="location" class="form-control w-75 border-2"/>
                                  </div>
                                  <div class="col-4 d-flex justify-content-between ps-5 pe-5 pt-2 pb-2">
                                      <label>Quality</label>
                                      <input type="text" id="quality" name="quality" class="form-control w-75 border-2"/>
                                  </div>
                              </div>
                                  <div class="col-4 d-flex justify-content-between ps-5 pe-5 pt-2 pb-5">
                                      <label><b>Severity</b> </label> 
                                      <select id="severity" name="severity" class="form-select w-75 border-2">
                                          <option value="" Selected>Values</option>
                                          <option value="1" >1</option>
                                          <option value="2" >2</option>
                                        </select>
                                      
                                  </div>
                                  
                                  <li><b>Aggravating Factors :</b> <br/><textarea rows="4" class="form-control w-100 border-2 m-2"></textarea></li>
                                  <li><b>Alleviating Factors :</b> <br/><textarea rows="4"class="form-control w-100 border-2 m-2"></textarea></li>
                                  <li><b>Associated Symptoms : </b><br/><textarea rows="4" class="form-control w-100 border-2 m-2"></textarea></li>
                              </ul>
                              <div class="m-4">
                                  <button type="submit" name="save" id="save" class="btn btn-success me-2" >Save</button>
                                  <button type="submit" name="update" id="update" class="btn btn-primary">Update</button>
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