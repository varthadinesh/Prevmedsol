import React, { useState, useEffect } from "react";
import Menu from "../Menu";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { useData } from "../../../Admincomponents/components/Datacontext";

function Labagentpreviousappointment() {
  const { labagent } = useData();
  const [info1, setInfo1] = useState([]);
  const [info2, setInfo2] = useState([]);

  let date = new Date().toLocaleDateString("sv");

  useEffect(() => {
    axios
      .get("http://localhost:8080/patientappointment")
      .then((res) => {
        res.data.data2.map((item1) => {
          res.data.data1.map((item2) => {
            if (item2.firstname + " " + item2.lastname === item1.patient) {
              return setInfo1((prev) => [...prev, item2]);
            }
            return null;
          });
          if (item1.center.trim() === labagent.labname.trim()) {
            return setInfo2((prev) => [...prev, item1]);
          }
          return null;
        });
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div className="col-2 p-0">
          <Menu />
        </div>

        <div className="col-10 p-0">
          <h5 className="mt-4 mb-2 ms-2">Appointment Details</h5>
          <hr className="ms-4 me-4" />
          <Link to="/labagentappointments">
            <button className="btn btn-light ms-4 m-1">
              Upcoming
            </button>
          </Link>
          <Link to="/labagentpreviousappointments">
            <button className="btn btn-secondary text-white">Previous</button>
          </Link>

          <div className="mt-3">
            <table
              id="dynamic-table"
              className="table table-striped table-bordered table-hover dataTable no-footer"
              role="grid"
              aria-describedby="dynamic-table_info"
            >
              <thead>
                <tr role="row">
                  <th
                    className="sorting"
                    tabIndex="0"
                    aria-controls="dynamic-table"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Appointment ID: activate to sort column ascending"
                  >
                    Appointment ID
                  </th>
                  <th
                    className="sorting"
                    tabIndex="0"
                    aria-controls="dynamic-table"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Patient Name: activate to sort column ascending"
                  >
                    Patient Name
                  </th>
                  <th
                    className="sorting"
                    tabIndex="0"
                    aria-controls="dynamic-table"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Phone:activate to sort column ascending"
                  >
                    Phone Number
                  </th>
                  <th
                    className="hidden-480 sorting"
                    tabIndex="0"
                    aria-controls="dynamic-table"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Gender: activate to sort column ascending"
                  >
                    Appointment Date
                  </th>
                  <th
                    className="hidden-480 sorting"
                    tabIndex="0"
                    aria-controls="dynamic-table"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Appointment Date: activate to sort column ascending"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {info2.map((item, index) => {
                  const labInfo = info1.find(
                    (info) =>
                      info.firstname + " " + info.lastname === item.patient
                  );

                  if (labInfo) {
                    if (item.date < date) {
                      return (
                        <tr key={index}>
                          <td>{item.appointment_id}</td>
                          <td>{item.patient}</td>
                          <td>{labInfo.phone}</td>
                          <td>
                            {new Date(item.date).toLocaleDateString("en-GB")}
                          </td>
                          <td>{}</td>
                        </tr>
                      );
                    }
                  } else {
                    return null; // Handle cases where patient information is not found
                  }
                  return null;
                })}
                <tr id="noresults"></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Labagentpreviousappointment;
