import React, { useState } from "react";
import Navbar from "../Navbar";
import Menu from "../Menu";
import Subnavbar from "./Subnavbar";

export default function Reviewsystem1() {
  const [activeIndexAccordion1, setActiveIndexAccordion1] = useState(0);
  const [activeIndexAccordion2, setActiveIndexAccordion2] = useState(0);
  const [activeIndexAccordion3, setActiveIndexAccordion3] = useState(0);
  const [activeIndexAccordion4, setActiveIndexAccordion4] = useState(0);

  const [accordionContents, setAccordionContents] = useState({
    "Skin" : "",
    "Hair" : "",
    "Nail Changes" : "",
    "Itching Skin" : "",
    "Rashes" : "",
    "Sores" : "",
    "Lumps" : "",
    "Glasses" : "",
    "Contact Lenses" : "",
    "Blurriness" : "",
    "Tearing" : "",
    "Itching Eyes" : "",
    "Acute Visual Loss" : "",
    "Rhinorrhea" : "",
    "Stuffiness" : "",
    "Sneezing" : "",
    "Allergy" : "",
    "Itching Nose" : "",
    "Epistaxis" : "",
    "Bleeding Gums" : "",
    "Hoarseness" : "",
    "Soar Throat" : "",
    "Swollen Neck" : "",
  });

  const handleToggle = (index, accordion) => {
    if (accordion === 1) {
      setActiveIndexAccordion1(index);
    } else if (accordion === 2) {
      setActiveIndexAccordion2(index);
    } else if (accordion === 3) {
      setActiveIndexAccordion3(index);
    } else if (accordion === 4) {
      setActiveIndexAccordion4(index);
    }
  };

  const getTitleStyles = (currentIndex, titleIndex) => ({
    backgroundColor: currentIndex === titleIndex ? "seagreen" : "#f1f1f1",
    color: currentIndex === titleIndex ? "white" : "black",
    margin: "4px",
    border: "1px solid lightgray",
    padding: "5px",
    borderRadius: "4px",
    cursor: "pointer",
  });

  const handleSave = () => {
    // const serverUrl = 'http://localhost:8080/saveContents';

    const data = {
      accordionContents: { ...accordionContents },
    };

    console.log(data)
    // axios.post(serverUrl, data)
    //   .then(response => {
    //     alert('Data saved successfully:', response.data);
    //     // Optionally, you can perform additional actions after a successful save
    //   })
    //   .catch(error => {
    //     console.error('Error saving data:', error);
    //     // Handle error, show the user a message, etc.
    //   });
  };

  const allAccordionTitles1 = [
    "Skin",
    "Hair",
    "Nail Changes",
    "Itching Skin",
    "Rashes",
    "Sores",
    "Lumps",
  ];

  const allAccordionTitles2 = [
    "Glasses",
    "Contact Lenses",
    "Blurriness",
    "Tearing",
    "Itching Eyes",
    "Acute Visual Loss",
  ];

  const allAccordionTitles3 = [
    "Rhinorrhea",
    "Stuffiness",
    "Sneezing",
    "Allergy",
    "Itching Nose",
    "Epistaxis",
  ];

  const allAccordionTitles4 = [
    "Bleeding Gums",
    "Hoarseness",
    "Soar Throat",
    "Swollen Neck",
  ];

  return (
    <>
      <Navbar />
      <div>
        <div className="d-flex">
          <div className="col-2 p-0">
            <Menu />
          </div>

          <div className="col-10">
            <Subnavbar />
            <form className="rs1_accordion">
              <div class="col-xs-12">
                <p class="text-muted">Please fill the form carefully</p>
              </div>
              <div
                className="accordion accordion-flush mb-4"
                id="accordionFlush"
              >
                {/* {/ Accordion header /} */}
                <div
                  className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded"
                  id="assessmentHeading"
                >
                  <h2 className="accordion-header" id="flush-head">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-drop"
                      aria-expanded="false"
                      aria-controls="flush-drop"
                    >
                      <div>
                        <span className="fs-5">General</span>
                      </div>
                    </button>
                  </h2>

                  {/* {/ Accordion body /} */}
                  <div
                    id="flush-drop"
                    className="accordion-collapse collapse show"
                    aria-labelledby="flush-head"
                    data-bs-parent="#accordionFlush"
                  >
                    <div className="accordion-body">
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
                            &nbsp;&nbsp;
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
                            &nbsp;&nbsp;
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
                            &nbsp;&nbsp;
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
                            &nbsp;&nbsp;
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
                            &nbsp;&nbsp;
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
                            &nbsp;&nbsp;
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
              </div>

              <div
                className="accordion  accordion-flush mb-4"
                id="accordionFlush1"
              >
                {/* {/ Accordion header /} */}
                <div
                  className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded"
                  id="assessmentHeading1"
                >
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
                        <span className="fs-5">Skin</span>
                      </div>
                    </button>
                  </h2>

                  {/* {/ Accordion body /} */}
                  <div
                    id="flush-dropOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="flush-headOne"
                    data-bs-parent="#accordionFlush1"
                  >
                    <div className="accordion-body d-flex p-3">
                      <div className="col-4">
                        {/* {/ Accordion titles /} */}
                        {allAccordionTitles1.map((title, index) => (
                          <div
                            key={index}
                            className={`eachAccordTab`}
                            onClick={() => handleToggle(index, 1)}
                            style={getTitleStyles(activeIndexAccordion1, index)}
                          >
                            <div className={`eachAccordLink`}>{title}</div>
                          </div>
                        ))}
                      </div>
                      <div className="col-8">
                        {/* {/ Accordion textarea /} */}
                        <div className="eachAccordInputBlock">
                          <textarea
                            rows="3"
                            className="form-control"
                            placeholder={`${allAccordionTitles1[activeIndexAccordion1]}`}
                            value={
                              accordionContents[
                                `${allAccordionTitles1[activeIndexAccordion1]}`
                              ]
                            }
                            onChange={(e) => {
                              setAccordionContents({
                                ...accordionContents,
                                [`${allAccordionTitles1[activeIndexAccordion1]}`]:
                                  e.target.value,
                              });
                            }}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="accordion accordion-flush mb-4"
                id="accordionFlush2"
              >
                {/* {/ Accordion header /} */}
                <div
                  className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded"
                  id="assessmentHeading2"
                >
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
                        <span className="fs-5">Head</span>
                      </div>
                    </button>
                  </h2>

                  {/* {/ Accordion body /} */}
                  <div
                    id="flush-dropTwo"
                    className="accordion-collapse collapse show"
                    aria-labelledby="flush-headTwo"
                    data-bs-parent="#accordionFlush2"
                  >
                    <div className="accordion-body">
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
                            </label>&nbsp;&nbsp;
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
                            </label>&nbsp;&nbsp;
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
              </div>

              <div
                className="accordion accordion-flush mb-4"
                id="accordionFlush3"
              >
                <div
                  className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded"
                  id="assessmentHeading3"
                >
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
                        <span className="fs-5">Eyes</span>
                      </div>
                    </button>
                  </h2>

                  {/* {/ Accordion body /} */}
                  <div
                    id="flush-dropThree"
                    className="accordion-collapse collapse show"
                    aria-labelledby="flush-headThree"
                    data-bs-parent="#accordionFlush3"
                  >
                    <div className="accordion-body d-flex p-3">
                      <div className="col-4">
                        {/* {/ Accordion titles /} */}
                        {allAccordionTitles2.map((title, index) => (
                          <div
                            key={index}
                            className={`eachAccordTab`}
                            onClick={() => handleToggle(index, 2)}
                            style={getTitleStyles(activeIndexAccordion2, index)}
                          >
                            <div className={`eachAccordLink`}>{title}</div>
                          </div>
                        ))}
                      </div>
                      <div className="col-8">
                        {/* {/ Accordion textarea /} */}
                        <div className="eachAccordInputBlock">
                          <textarea
                            rows="3"
                            className="form-control"
                            placeholder={`${allAccordionTitles2[activeIndexAccordion2]}`}
                            value={
                              accordionContents[
                                `${allAccordionTitles2[activeIndexAccordion2]}`
                              ]
                            }
                            onChange={(e) => {
                              setAccordionContents({
                                ...accordionContents,
                                [`${allAccordionTitles2[activeIndexAccordion2]}`]:
                                  e.target.value,
                              });
                            }}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="accordion  accordion-flush mb-4"
                id="accordionFlush4"
              >
                {/* {/ Accordion header /} */}
                <div
                  className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded"
                  id="assessmentHeading4"
                >
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
                        <span className="fs-5">Nose & Sinuses</span>
                      </div>
                    </button>
                  </h2>

                  {/* {/ Accordion body /} */}
                  <div
                    id="flush-dropFour"
                    className="accordion-collapse collapse show"
                    aria-labelledby="flush-headFour"
                    data-bs-parent="#accordionFlush4"
                  >
                    <div className="accordion-body d-flex p-3">
                      <div className="col-4">
                        {/* {/ Accordion titles /} */}
                        {allAccordionTitles3.map((title, index) => (
                          <div
                            key={index}
                            className={`eachAccordTab`}
                            onClick={() => handleToggle(index, 3)}
                            style={getTitleStyles(activeIndexAccordion3, index)}
                          >
                            <div className={`eachAccordLink`}>{title}</div>
                          </div>
                        ))}
                      </div>
                      <div className="col-8">
                        {/* {/ Accordion textarea /} */}
                        <div className="eachAccordInputBlock">
                          <textarea
                            rows="3"
                            className="form-control"
                            placeholder={`${allAccordionTitles3[activeIndexAccordion3]}`}
                            value={
                              accordionContents[`${allAccordionTitles3[activeIndexAccordion3]}`]
                            }
                            onChange={(e) => {
                              setAccordionContents({
                                ...accordionContents,
                                [`${allAccordionTitles3[activeIndexAccordion3]}`]:
                                  e.target.value,
                              });
                            }}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="accordion accordion-flush mb-4"
                id="accordionFlush5"
              >
                <div
                  className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded"
                  id="assessmentHeading5"
                >
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
                        <span className="fs-5">Mouth, Throat, Neck</span>
                      </div>
                    </button>
                  </h2>

                  {/* {/ Accordion body /} */}
                  <div
                    id="flush-dropFive"
                    className="accordion-collapse collapse show"
                    aria-labelledby="flush-headFive"
                    data-bs-parent="#accordionFlush5"
                  >
                    <div className="accordion-body d-flex p-3">
                      <div className="col-4">
                        {/* {/ Accordion titles /} */}
                        {allAccordionTitles4.map((title, index) => (
                          <div
                            key={index}
                            className={`eachAccordTab`}
                            onClick={() => handleToggle(index, 4)}
                            style={getTitleStyles(activeIndexAccordion4, index)}
                          >
                            <div className={`eachAccordLink`}>{title}</div>
                          </div>
                        ))}
                      </div>
                      <div className="col-8">
                        {/* {/ Accordion textarea /} */}
                        <div className="eachAccordInputBlock">
                          <textarea
                            rows="3"
                            className="form-control"
                            placeholder={`${allAccordionTitles4[activeIndexAccordion4]}`}
                            value={
                              accordionContents[`${allAccordionTitles4[activeIndexAccordion4]}`]
                            }
                            onChange={(e) => {
                              setAccordionContents({
                                ...accordionContents,
                                [`${allAccordionTitles4[activeIndexAccordion4]}`]:
                                  e.target.value,
                              });
                            }}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button className="btn btn-success m-2" onClick={handleSave}>
                Add Current Complaints
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
