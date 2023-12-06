import React, { useState, useEffect } from "react";
import Menu from "../Menu";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import axios from "axios";
import Navbar from "../Navbar";
import { useData } from "../../../Admincomponents/components/Datacontext";

function Doctorappointment() {
  // const { doctor } = useData();
  const [info1, setInfo1] = useState([]);

  let date = new Date().toLocaleDateString("sv");
  console.log(typeof date);

  // const userdoctor = doctor.firstname + " " + doctor.lastname;
  // console.log(userdoctor);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/patientappointment")
  //     .then((res) => {
  //       // console.log(res.data);
  //       res.data.data2.map((item) => {
  //         console.log(item.patient, userdoctor);
  //         if (userdoctor == item.patient) {
  //           setInfo1((prev) => [...prev, item]);
  //         }
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  // console.log(info1);

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
          {/* <table className="mt-4 ms-2 mb-4">
          <tr className="m-5">
            <th  className="success-t"><Link to="/upcomingappointments" className="text-decoration-none bg-success text-white p-2">Up Coming</Link></th>
            <th  className="success-t" ><Link to="/previousappointments" className="text-decoration-none bg-dark text-white p-2">Previous</Link></th>
          </tr>
      </table>

      <table className="table">
       
       <tr>
         <th className="">Appointment Schedule Date</th>
         <th className="">Appointment type</th>
         <th className="">Center / City</th>
        <th className=""  colspan="4">Actions</th>
       </tr>
               
       <tr>
       <td colSpan={4}> No Records available</td>
       </tr>
      </table>
        */}
        </div>
      </div>
    </>
  );
}

export default Doctorappointment;
