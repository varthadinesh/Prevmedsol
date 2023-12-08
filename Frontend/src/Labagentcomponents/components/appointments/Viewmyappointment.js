import React, { useState, useEffect } from "react";
import Menu from "../Menu";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import axios from "axios";
import Navbar from "../Navbar";

function Labagentappointment() {
  const [info1, setInfo1] = useState([]);
  const [info2, setInfo2] = useState([]);

  let date = new Date().toLocaleDateString('sv');

  useEffect(() => {
    axios
      .get("http://localhost:8080/patientappointment")
      .then((res) => {
        // console.log(res.data);
        res.data.data2.map((item1) => {
          res.data.data1.map((item2) => {
            if (item2.firstname + " " + item2.lastname == item1.patient) {
              setInfo1((prev) => [...prev, item2]);
            }
          });
        });
        setInfo2(res.data.data2);
      })
      .catch((err) => console.log(err));
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
                    {(info2.length > 0) ? (
                      info2.map((item, index) => {
                        {if(item.appointment === "tests"){
                          if(item.date>date){
                          return <tr key={index}>
                          <td>{item.appointment_id}</td>
                          <td>{item.patient}</td>
                          <td>{info1[index].phone}</td>
                          <td>{item.date.slice(0,10)} - {item.time}</td>
                          <td>{}</td>
                        </tr>
                        }}}
                      })
                    ) : (
                      <tr>
                        <td colSpan={5}>No records available</td>
                      </tr>
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
                    {(info2.length > 0) ? (
                      info2.map((item, index) => {
                        {if(item.appointment === "tests"){
                          if(item.date<date){
                          return <tr key={index}>
                          <td>{item.appointment_id}</td>
                          <td>{item.patient}</td>
                          <td>{info1[index].phone}</td>
                          <td>{item.date.slice(0,10)} - {item.time}</td>
                          <td>{}</td>
                        </tr>
                        }}}
                      })
                    ) : (
                      <tr>
                        <td colSpan={5}>No records available</td>
                      </tr>
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

export default Labagentappointment;
