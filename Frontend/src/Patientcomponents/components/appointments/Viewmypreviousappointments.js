import React, { useState, useEffect } from "react";
import Menu from "../Menu";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Navbar from "../Navbar";
import { useData } from "../../../Admincomponents/components/Datacontext";

function Viewmypreviousappointment() {
  const { user } = useData();
  const [info1, setInfo1] = useState([]);

  let date = new Date().toLocaleDateString("sv");

  const patient = user.firstname + " " + user.lastname;

  useEffect(() => {
    axios
      .get("http://localhost:8080/patientappointment")
      .then((res) => {
        // console.log(res.data);
        res.data.data2.map((item) => {
          if (patient == item.patient) {
            setInfo1((prev) => [...prev, item]);
          }
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const cancelClick=()=>{
    // eslint-disable-next-line no-restricted-globals 
      if(confirm("Sure to Cancel the Appointment")==true){
        alert("Please contact our customer service for cancelling an appointment.");
      }
    }

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
          <Link to="/upcomingappointments"><button className="btn btn-dark text-white ms-4 m-1">Upcoming</button></Link>
          <Link to="/previousappointments"><button className="btn btn-success text-white">Previous</button></Link>
          
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
                                <td>{new Date(item.date).toLocaleDateString('en-GB')} - {item.time}</td>
                                <td>{item.appointment}</td>
                                <td>{item.center}</td>
                                <td><button className="btn" data-bs-toggle="modal" data-bs-target="#myModal"><i className="bi bi-folder2-open"></i> Reports</button></td>
                                <td><i className="bi bi-eye-fill"></i> After Visit Doc</td>
                              </tr>
                            );
                          }
                        }
                      })
                    ) : (
                    <tr>
                      <td colSpan={5}>No records available</td>
                    </tr>
                    )}
                  </tbody>
                </table>
              </div>
        </div>
      </div>

      {/* modal */}
      <div className="modal" id="myModal">
        <div className="modal-dialog modal-md">
          <div className="modal-content">

            <div className="modal-header">
              <h5>Uploaded Reports</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body" id='showmod'>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Viewmypreviousappointment;
