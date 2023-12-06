import React, { useState, useEffect } from "react";
import Menu from "../Menu";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import axios from "axios";
import Navbar from "../Navbar";
import { useData } from "../../../Admincomponents/components/Datacontext";

function Viewmyappointment() {
  const { user } = useData();
  const [info1, setInfo1] = useState([]);

  let date = new Date().toLocaleDateString("sv");
  console.log(typeof date);

  const patient = user.firstname + " " + user.lastname;
  console.log(patient);

  useEffect(() => {
    axios
      .get("http://localhost:8080/patientappointment")
      .then((res) => {
        // console.log(res.data);
        res.data.data2.map((item) => {
          console.log(item.patient, patient);
          if (patient == item.patient) {
            setInfo1((prev) => [...prev, item]);
          }
        });
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(info1);

  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div className="col-2 p-0">
          <Menu />
        </div>

        <div className="col-10 p-0">
          <h5 className="mt-4 mb-2 ms-2">Appointment Details</h5>

          <Tabs defaultActiveKey="first" className="m-4">
            <Tab eventKey="first" title="Upcoming">
              <div>
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
                        Appointment Schedule Date
                      </th>
                      <th
                        className="sorting"
                        tabIndex="0"
                        aria-controls="dynamic-table"
                        rowSpan="1"
                        colSpan="1"
                        aria-label="Patient Name: activate to sort column ascending"
                      >
                        Appointment Type
                      </th>
                      <th
                        className="sorting"
                        tabIndex="0"
                        aria-controls="dynamic-table"
                        rowSpan="1"
                        colSpan="1"
                        aria-label="Phone:activate to sort column ascending"
                      >
                        Center / City
                      </th>
                      <th
                        className="hidden-480 sorting"
                        tabIndex="0"
                        aria-controls="dynamic-table"
                        rowSpan="1"
                        colSpan="1"
                        aria-label="Gender: activate to sort column ascending"
                      >
                        Actions
                      </th>
                      <th
                        className="hidden-480 sorting"
                        tabIndex="0"
                        aria-controls="dynamic-table"
                        rowSpan="1"
                        colSpan="1"
                        aria-label="Appointment Date: activate to sort column ascending"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    {info1.length > 0 ? (
                      info1.map((item, index) => {
                        {
                          if (item.date > date) {
                            return (
                              <tr key={index}>
                                <td>
                                  {item.date} - {item.time}
                                </td>
                                <td>{item.appointment}</td>
                                <td>{item.center}</td>
                                <td>{}</td>
                                <td>{}</td>
                              </tr>
                            );
                          }
                        }
                      })
                    ) : (
                      <tr>No records available</tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Tab>
            <Tab eventKey="second" title="Previous">
              <div>
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
                        Appointment Schedule Date
                      </th>
                      <th
                        className="sorting"
                        tabIndex="0"
                        aria-controls="dynamic-table"
                        rowSpan="1"
                        colSpan="1"
                        aria-label="Patient Name: activate to sort column ascending"
                      >
                        Appointment Type
                      </th>
                      <th
                        className="sorting"
                        tabIndex="0"
                        aria-controls="dynamic-table"
                        rowSpan="1"
                        colSpan="1"
                        aria-label="Phone:activate to sort column ascending"
                      >
                        Center / City
                      </th>
                      <th
                        className="hidden-480 sorting"
                        tabIndex="0"
                        aria-controls="dynamic-table"
                        rowSpan="1"
                        colSpan="1"
                        aria-label="Gender: activate to sort column ascending"
                      >
                        Actions
                      </th>
                      <th
                        className="hidden-480 sorting"
                        tabIndex="0"
                        aria-controls="dynamic-table"
                        rowSpan="1"
                        colSpan="1"
                        aria-label="Appointment Date: activate to sort column ascending"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    {info1.length > 0 ? (
                      info1.map((item, index) => {
                        {
                          if (item.date < date) {
                            return (
                              <tr key={index}>
                                <td>
                                  {item.date} - {item.time}
                                </td>
                                <td>{item.appointment}</td>
                                <td>{item.center}</td>
                                <td>{}</td>
                                <td>{}</td>
                              </tr>
                            );
                          }
                        }
                      })
                    ) : (
                      <tr>No records available</tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default Viewmyappointment;
