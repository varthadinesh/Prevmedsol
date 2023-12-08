import React from "react";
import Navbar from "../Navbar";
import Menu from "../Menu";

export default function Reviewsystem1() {
  return (
    <>
      <Navbar />
      <div>
        <div className="d-flex">
          <div className="col-2 p-0">
            <Menu />
          </div>

          <div className="col-10 p-0">
          <div className="col-md-8 m-3">
          <form action="" method="post">
              <div className="">
                <div className="col-xs-12">
                  <p className="text-muted">Please fill the form carefully</p>
                </div>
                <div className="col-xs-12 currentComplaints">
                  <div className="eachAccorRow open">
                    <div className="eachAccorRowHeading">
                      <span className="eachAccorHeadingTxt">General</span>
                      <span className="eachAccorHeadingToggle">
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </div>
                    <div className="formRow row eachAccorRowContent">
                      <div className="col-xs-12">
                        <div className="row form-group">
                          <label className="col-xs-5 col-sm-3 col-md-2">
                            Weight Change
                          </label>
                          <div className="col-xs-7 col-sm-5 col-md-6">
                            <label className="radio-inline">
                              <input
                                type="radio"
                                name="rs1_weight_change"
                                id="rs1_weight_change"
                                value="yes"
                              />{" "}
                              Yes
                            </label>
                            <label className="radio-inline">
                              <input
                                type="radio"
                                name="rs1_weight_change"
                                id="rs1_weight_change"
                                value="no"
                              />{" "}
                              No
                            </label>
                          </div>
                        </div>
                        <div className="row form-group">
                          <label className="col-xs-5 col-sm-3 col-md-2">
                            Weight change in KG
                          </label>
                          <div className="col-xs-7 col-sm-5 col-md-6">
                            <input
                              type="input"
                              className="form-control"
                              name="rs1_weight_change_in_kg"
                              id="rs1_weight_change_in_kg"
                              value=""
                            />
                          </div>
                        </div>
                        <div className="row form-group">
                          <label className="col-xs-5 col-sm-3 col-md-2">
                            When ?
                          </label>
                          <div className="col-xs-7 col-sm-5 col-md-6">
                            <input
                              type="input"
                              className="form-control"
                              name="rs1_when"
                              id="rs1_when"
                              value=""
                            />
                          </div>
                        </div>
                        <div className="row form-group">
                          <label className="col-xs-5 col-sm-3 col-md-2">
                            Fatigue
                          </label>
                          <div className="col-xs-7 col-sm-5 col-md-6">
                            <label className="radio-inline">
                              <input
                                type="radio"
                                name="rs1_fatigue"
                                id="rs1_fatigue"
                                value="yes"
                              />{" "}
                              Yes
                            </label>
                            <label className="radio-inline">
                              <input
                                type="radio"
                                name="rs1_fatigue"
                                id="rs1_fatigue"
                                value="no"
                              />{" "}
                              No
                            </label>
                          </div>
                        </div>
                        <div className="row form-group">
                          <label className="col-xs-5 col-sm-3 col-md-2">
                            Weakness
                          </label>
                          <div className="col-xs-7 col-sm-5 col-md-6">
                            <label className="radio-inline">
                              <input
                                type="radio"
                                name="rs1_weakness"
                                id="rs1_weakness"
                                value="yes"
                              />{" "}
                              Yes
                            </label>
                            <label className="radio-inline">
                              <input
                                type="radio"
                                name="rs1_weakness"
                                id="rs1_weakness"
                                value="no"
                              />{" "}
                              No
                            </label>
                          </div>
                        </div>
                        <div className="row form-group">
                          <label className="col-xs-5 col-sm-3 col-md-2">
                            Fever
                          </label>
                          <div className="col-xs-7 col-sm-5 col-md-6">
                            <label className="radio-inline">
                              <input
                                type="radio"
                                name="rs1_fever"
                                id="rs1_fever"
                                value="yes"
                              />{" "}
                              Yes
                            </label>
                            <label className="radio-inline">
                              <input
                                type="radio"
                                name="rs1_fever"
                                id="rs1_fever"
                                value="no"
                              />{" "}
                              No
                            </label>
                          </div>
                        </div>
                        <div className="row form-group">
                          <label className="col-xs-5 col-sm-3 col-md-2">
                            Chills
                          </label>
                          <div className="col-xs-7 col-sm-5 col-md-6">
                            <label className="radio-inline">
                              <input
                                type="radio"
                                name="rs1_chills"
                                id="rs1_chills"
                                value="yes"
                              />{" "}
                              Yes
                            </label>
                            <label className="radio-inline">
                              <input
                                type="radio"
                                name="rs1_chills"
                                id="rs1_chills"
                                value="no"
                              />{" "}
                              No
                            </label>
                          </div>
                        </div>
                        <div className="row form-group">
                          <label className="col-xs-5 col-sm-3 col-md-2">
                            Night sweat
                          </label>
                          <div className="col-xs-7 col-sm-5 col-md-6">
                            <label className="radio-inline">
                              <input
                                type="radio"
                                name="rs1_night_sweats"
                                id="rs1_night_sweats"
                                value="yes"
                              />{" "}
                              Yes
                            </label>
                            <label className="radio-inline">
                              <input
                                type="radio"
                                name="rs1_night_sweats"
                                id="rs1_night_sweats"
                                value="no"
                              />{" "}
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 currentComplaints">
                  <div className="eachAccorRow open">
                    <div className="eachAccorRowHeading">
                      <span className="eachAccorHeadingTxt">Skin</span>
                      <span className="eachAccorHeadingToggle">
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </div>
                    <div className="formRow row eachAccorRowContent">
                      <div className="col-xs-12">
                        <div className="form-group row eachFormRow">
                          <div className="accordTabs col-xs-12">
                            <div className="eachAccordTabs activeTab">
                              <div className="eachAccordLink">Skin</div>
                              <div className="eachAccordInputBlock">
                                <textarea
                                  name="rs1_skin"
                                  id="rs1_skin"
                                  rows="3"
                                  className="form-control"
                                  placeholder="Skin"
                                ></textarea>
                              </div>
                            </div>
                            <div className="eachAccordTabs">
                              <div className="eachAccordLink">Hair</div>
                              <div className="eachAccordInputBlock">
                                <textarea
                                  name="rs1_hair"
                                  id="rs1_hair"
                                  rows="3"
                                  className="form-control"
                                  placeholder="Hair"
                                ></textarea>
                              </div>
                            </div>
                            <div className="eachAccordTabs">
                              <div className="eachAccordLink">Nail Changes</div>
                              <div className="eachAccordInputBlock">
                                <textarea
                                  name="rs1_nail_changes"
                                  id="rs1_nail_changes"
                                  rows="3"
                                  className="form-control"
                                  placeholder="Nail Changes"
                                ></textarea>
                              </div>
                            </div>
                            <div className="eachAccordTabs">
                              <div className="eachAccordLink">Itching</div>
                              <div className="eachAccordInputBlock">
                                <textarea
                                  name="rs1_itching_skin"
                                  id="rs1_itching_skin"
                                  rows="3"
                                  className="form-control"
                                  placeholder="Itching"
                                ></textarea>
                              </div>
                            </div>
                            <div className="eachAccordTabs">
                              <div className="eachAccordLink">Rashes</div>
                              <div className="eachAccordInputBlock">
                                <textarea
                                  name="rs1_rashes"
                                  id="rs1_rashes"
                                  rows="3"
                                  className="form-control"
                                  placeholder="Rashes"
                                ></textarea>
                              </div>
                            </div>
                            <div className="eachAccordTabs">
                              <div className="eachAccordLink">Sores</div>
                              <div className="eachAccordInputBlock">
                                <textarea
                                  name="rs1_sores"
                                  id="rs1_sores"
                                  rows="3"
                                  className="form-control"
                                  placeholder="Sores"
                                ></textarea>
                              </div>
                            </div>
                            <div className="eachAccordTabs">
                              <div className="eachAccordLink">Lumps</div>
                              <div className="eachAccordInputBlock">
                                <textarea
                                  name="rs1_lumps"
                                  id="rs1_lumps"
                                  rows="3"
                                  className="form-control"
                                  placeholder="Lumps"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 currentComplaints">
                  <div className="eachAccorRow open">
                    <div className="eachAccorRowHeading">
                      <span className="eachAccorHeadingTxt">Head</span>
                      <span className="eachAccorHeadingToggle">
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </div>

                    <div className="formRow row eachAccorRowContent">
                      <div className="col-xs-12">
                        <div className="row form-group">
                          <label className="col-xs-5 col-sm-3 col-md-2">
                            Trauma
                          </label>
                          <div className="col-xs-7 col-sm-5 col-md-6">
                            <label className="radio-inline">
                              <input
                                type="radio"
                                name="rs1_trauma"
                                id="rs1_trauma"
                                value="yes"
                              />{" "}
                              Yes
                            </label>
                            <label className="radio-inline">
                              <input
                                type="radio"
                                name="rs1_trauma"
                                id="rs1_trauma"
                                value="no"
                              />{" "}
                              No
                            </label>
                          </div>
                        </div>

                        <div className="row form-group">
                          <label className="col-xs-5 col-sm-3 col-md-2">
                            Trauma
                          </label>
                          <div className="col-xs-7 col-sm-5 col-md-6">
                            <textarea
                              name="rs1_trauma_desc"
                              id="rs1_trauma_desc"
                              cols=""
                              rows="4"
                              className="form-control"
                            ></textarea>
                          </div>
                        </div>

                        <div className="row form-group">
                          <label className="col-xs-5 col-sm-3 col-md-2">
                            Headache
                          </label>
                          <div className="col-xs-7 col-sm-5 col-md-6">
                            <label className="radio-inline">
                              <input
                                type="radio"
                                name="rs1_headache"
                                id="rs1_headache"
                                value="yes"
                              />{" "}
                              Yes
                            </label>
                            <label className="radio-inline">
                              <input
                                type="radio"
                                name="rs1_headache"
                                id="rs1_headache"
                                value="no"
                              />{" "}
                              No
                            </label>
                          </div>
                        </div>

                        <div className="row form-group">
                          <label className="col-xs-5 col-sm-3 col-md-2">
                            Location
                          </label>
                          <div className="col-xs-7 col-sm-5 col-md-6">
                            <input
                              type="text"
                              id="rs1_location"
                              name="rs1_location"
                              className="form-control"
                              value=""
                            />
                          </div>
                        </div>

                        <div className="row form-group">
                          <label className="col-xs-5 col-sm-3 col-md-2">
                            Frequency
                          </label>
                          <div className="col-xs-7 col-sm-5 col-md-6">
                            <input
                              type="text"
                              id="rs1_frequency"
                              name="rs1_frequency"
                              className="form-control"
                              value=""
                            />
                          </div>
                        </div>

                        <div className="row form-group">
                          <label className="col-xs-5 col-sm-3 col-md-2">
                            Vomiting
                          </label>
                          <div className="col-xs-7 col-sm-5 col-md-6">
                            <input
                              type="text"
                              id="rs1_vomiting"
                              name="rs1_vomiting"
                              className="form-control"
                              value=""
                            />
                          </div>
                        </div>

                        <div className="row form-group">
                          <label className="col-xs-5 col-sm-3 col-md-2">
                            Nausea
                          </label>
                          <div className="col-xs-7 col-sm-5 col-md-6">
                            <input
                              type="text"
                              id="rs1_nauseo"
                              name="rs1_nauseo"
                              className="form-control"
                              value=""
                            />
                          </div>
                        </div>

                        <div className="row form-group">
                          <label className="col-xs-5 col-sm-3 col-md-2">
                            Visual changes
                          </label>
                          <div className="col-xs-7 col-sm-5 col-md-6">
                            <input
                              type="text"
                              id="rs1_visual_changes"
                              name="rs1_visual_changes"
                              className="form-control"
                              value=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 currentComplaints">
                  <div className="eachAccorRow open">
                    <div className="eachAccorRowHeading">
                      <span className="eachAccorHeadingTxt">Eyes</span>
                      <span className="eachAccorHeadingToggle">
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </div>
                    <div className="formRow row eachAccorRowContent">
                      <div className="col-xs-12">
                        <div className="form-group row eachFormRow">
                          <div className="accordTabs col-xs-12">
                            <div className="eachAccordTabs activeTab">
                              <div className="eachAccordLink">Glasses</div>
                              <div className="eachAccordInputBlock">
                                <textarea
                                  name="rs1_glasses"
                                  id="rs1_glasses"
                                  rows="3"
                                  className="form-control"
                                  placeholder="Glasses"
                                ></textarea>
                              </div>
                            </div>
                            <div className="eachAccordTabs">
                              <div className="eachAccordLink">Contact Lenses</div>
                              <div className="eachAccordInputBlock">
                                <textarea
                                  name="rs1_contact_lenses"
                                  id="rs1_contact_lenses"
                                  rows="3"
                                  className="form-control"
                                  placeholder="Contact Lenses"
                                ></textarea>
                              </div>
                            </div>
                            <div className="eachAccordTabs">
                              <div className="eachAccordLink">Bluriness</div>
                              <div className="eachAccordInputBlock">
                                <textarea
                                  name="rs1_blurrness"
                                  id="rs1_blurrness"
                                  rows="3"
                                  className="form-control"
                                  placeholder="Bluriness"
                                ></textarea>
                              </div>
                            </div>
                            <div className="eachAccordTabs">
                              <div className="eachAccordLink">Tearing</div>
                              <div className="eachAccordInputBlock">
                                <textarea
                                  name="rs1_tearing"
                                  id="rs1_tearing"
                                  rows="3"
                                  className="form-control"
                                  placeholder="Tearing"
                                ></textarea>
                              </div>
                            </div>
                            <div className="eachAccordTabs">
                              <div className="eachAccordLink">Itching</div>
                              <div className="eachAccordInputBlock">
                                <textarea
                                  name="rs1_itching_eyes"
                                  id="rs1_itching_eyes"
                                  rows="3"
                                  className="form-control"
                                  placeholder="Itching"
                                ></textarea>
                              </div>
                            </div>

                            <div className="eachAccordTabs">
                              <div className="eachAccordLink">
                                Acute Visual Loss
                              </div>
                              <div className="eachAccordInputBlock">
                                <textarea
                                  name="rs1_acute_visual_lose"
                                  id="rs1_acute_visual_lose"
                                  rows="3"
                                  className="form-control"
                                  placeholder="Acute Visual Loss"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 currentComplaints">
                  <div className="eachAccorRow open">
                    <div className="eachAccorRowHeading">
                      <span className="eachAccorHeadingTxt">
                        Nose &amp; Sinuses
                      </span>
                      <span className="eachAccorHeadingToggle">
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </div>
                    <div className="formRow row eachAccorRowContent">
                      <div className="col-xs-12">
                        <div className="form-group row eachFormRow">
                          <div className="accordTabs col-xs-12">
                            <div className="eachAccordTabs activeTab">
                              <div className="eachAccordLink">Rhinorrhea</div>
                              <div className="eachAccordInputBlock">
                                <textarea
                                  name="rs1_rhinorrhea"
                                  id="rs1_rhinorrhea"
                                  rows="3"
                                  className="form-control"
                                  placeholder="Rhinorrhea"
                                ></textarea>
                              </div>
                            </div>
                            <div className="eachAccordTabs">
                              <div className="eachAccordLink">Stuffiness</div>
                              <div className="eachAccordInputBlock">
                                <textarea
                                  name="rs1_stiffiness"
                                  id="rs1_stiffiness"
                                  rows="3"
                                  className="form-control"
                                  placeholder="Stuffiness"
                                ></textarea>
                              </div>
                            </div>

                            <div className="eachAccordTabs">
                              <div className="eachAccordLink">Sneezing</div>
                              <div className="eachAccordInputBlock">
                                <textarea
                                  name="rs1_sneezing"
                                  id="rs1_sneezing"
                                  rows="3"
                                  className="form-control"
                                  placeholder="Sneezing"
                                ></textarea>
                              </div>
                            </div>

                            <div className="eachAccordTabs">
                              <div className="eachAccordLink">Allergy</div>
                              <div className="eachAccordInputBlock">
                                <textarea
                                  name="rs1_allergy"
                                  id="rs1_allergy"
                                  rows="3"
                                  className="form-control"
                                  placeholder="Allergy"
                                ></textarea>
                              </div>
                            </div>

                            <div className="eachAccordTabs">
                              <div className="eachAccordLink">Itching</div>
                              <div className="eachAccordInputBlock">
                                <textarea
                                  name="rs1_itching_nose"
                                  id="rs1_itching_nose"
                                  rows="3"
                                  className="form-control"
                                  placeholder="Itching"
                                ></textarea>
                              </div>
                            </div>

                            <div className="eachAccordTabs">
                              <div className="eachAccordLink">Epistaxis</div>
                              <div className="eachAccordInputBlock">
                                <textarea
                                  name="rs1_epistaxis"
                                  id="rs1_epistaxis"
                                  rows="3"
                                  className="form-control"
                                  placeholder="Epistaxis"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 currentComplaints">
                  <div className="eachAccorRow open">
                    <div className="eachAccorRowHeading">
                      <span className="eachAccorHeadingTxt">
                        Mouth, Throat, Neck
                      </span>
                      <span className="eachAccorHeadingToggle">
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </div>
                    <div className="formRow row eachAccorRowContent">
                      <div className="col-xs-12">
                        <div className="form-group row eachFormRow">
                          <div className="accordTabs col-xs-12">
                            <div className="eachAccordTabs activeTab">
                              <div className="eachAccordLink">Bleeding Gums</div>
                              <div className="eachAccordInputBlock">
                                <textarea
                                  name="rs1_bleeding_gums"
                                  id="rs1_bleeding_gums"
                                  rows="3"
                                  className="form-control"
                                  placeholder="Bleeding Gums"
                                ></textarea>
                              </div>
                            </div>

                            <div className="eachAccordTabs">
                              <div className="eachAccordLink">Hoarseness</div>
                              <div className="eachAccordInputBlock">
                                <textarea
                                  name="rs1_hoarsness"
                                  id="rs1_hoarsness"
                                  rows="3"
                                  className="form-control"
                                  placeholder="Hoarseness"
                                ></textarea>
                              </div>
                            </div>

                            <div className="eachAccordTabs">
                              <div className="eachAccordLink">Soar Throat</div>
                              <div className="eachAccordInputBlock">
                                <textarea
                                  name="rs1_aore_throat"
                                  id="rs1_aore_throat"
                                  rows="3"
                                  className="form-control"
                                  placeholder="Soar Throat"
                                ></textarea>
                              </div>
                            </div>

                            <div className="eachAccordTabs">
                              <div className="eachAccordLink">Swollen Neck</div>
                              <div className="eachAccordInputBlock">
                                <textarea
                                  name="rs1_swollen_neck"
                                  id="rs1_swollen_neck"
                                  rows="3"
                                  className="form-control"
                                  placeholder="Swollen Neck"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12">
                  <input
                    type="submit"
                    className="submitForm btn"
                    value="Add Current Complaints"
                    id="btn-save"
                    name="btn-save"
                  />
                </div>
              </div>
            </form>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
