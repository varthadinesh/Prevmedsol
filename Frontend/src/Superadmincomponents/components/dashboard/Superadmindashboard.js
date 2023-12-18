import React, { useState, useEffect } from "react";
import Menu from "../Menu";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";

const Superadmindashboard = () => {
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(appointments.length / pageSize);

  useEffect(() => {
    axios
      .get("http://localhost:8080/patientappointment")
      .then((res) => {
        // console.log(res.data);
        res.data.data2.map((item1) => {
          res.data.data1.map((item2) => {
            if (item2.firstname + " " + item2.lastname == item1.patient) {
              setPatients((prev) => [...prev, item2]);
            }
          });
        });
        setAppointments(res.data.data2);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(appointments);

  useEffect(() => {
    setCurrentPage(1);
  }, [pageSize]);

  const handleRowsChange = (e) => {
    const rows = parseInt(e.target.value);
    setPageSize(rows);
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const generatePageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li
          key={i}
          className={`page-item ${i === currentPage ? "active" : ""}`}
        >
          <button className="page-link" onClick={() => handlePageClick(i)}>
            {i}
          </button>
        </li>
      );
    }
    return pages;
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const tableData = appointments.slice(startIndex, endIndex);

  return (
    <>
      <Navbar />
      <div className="d-flex ">
        <div className="col-2 p-0">
          <Menu />
        </div>
        <div className="col-10 p-0">
          <div className="bg-secondary p-2 m-3">
            <div className="col-xs-12">
              <span className="secondHeading text-white">New EMR</span>
            </div>
            <hr className="text-white" />
            <div className="">
              <div
                className="d-flex justify-content-between p-2 bg-light"
                style={{ width: "100%" }}
              >
                <div className="p-2 d-flex">
                  <label className="mt-2" style={{ minWidth: "120px" }}>
                    Display records
                  </label>
                  <select
                    name="dynamic-table_length"
                    aria-controls="dynamic-table"
                    className="form-select"
                    id="rowsDropdown"
                    //   onChange={handleRowsChange}
                    //   value={pageSize}
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
                <div className="p-2 d-flex">
                  <label className="mt-2">Search:</label>
                  <input
                    type="search"
                    placeholder="Search here"
                    id="searchbox"
                    aria-controls="dynamic-table"
                    className="form-control"
                    // onKeyUp={handleSearch}
                  />
                </div>
              </div>
              <div className="bg-light" style={{ padding: "10px 10px 0 10px" }}>
                <div className="row">
                  <div className="col-xs-12">
                    <table className="table table-bordered">
                      <thead className="">
                        <tr className="">
                          <th className="bg-primary text-white">
                            Appointment ID
                          </th>
                          <th className="bg-primary text-white">Name</th>
                          <th className="bg-primary text-white">
                            Appointment Date
                          </th>
                          <th className="bg-primary text-white">
                            Appointment Time
                          </th>
                          <th className="bg-primary text-white">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>23</td>
                          <td>patient patient </td>
                          <td>2023-12-08 </td>
                          <td>08:00AM </td>
                          <td>
                            <Link
                              to="/history1"
                              className="text-decoration-none text-white"
                            >
                              <button className="btn btn-secondary">
                                View EMR
                              </button>
                            </Link>
                          </td>
                        </tr>

                        <tr id="noresults"></tr>
                      </tbody>
                    </table>
                    <div
                      className="d-flex justify-content-between p-2"
                      style={{ background: "#EFF3F8", width: "100%" }}
                    >
                      <div className=" d-flex">
                        <label className="">Showing 1 to 1 of 1 entries</label>
                      </div>
                      <div>
                        <nav>
                          <ul className="pagination">
                            <li>
                              <button className="page-link" disabled>
                                Previous
                              </button>
                            </li>

                            <li>
                              <button className="page-link" disabled>
                                Next
                              </button>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="bg-secondary p-2 m-3"
            // style={{ margin: "10px 15px"}}
          >
            <div className="table-header text-white fs-5">History</div>
            <hr className="text-white" />
            <div className="">
              <div
                className="d-flex p-2 justify-content-between bg-light"
                style={{ width: "100%" }}
              >
                <div className="p-2 d-flex">
                  <label className="mt-2" style={{ minWidth: "120px" }}>
                    Display records
                  </label>
                  <select
                    name="dynamic-table_length"
                    aria-controls="dynamic-table"
                    className="form-select"
                    id="rowsDropdown"
                    onChange={handleRowsChange}
                    value={pageSize}
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
                <div className="p-2 d-flex">
                  <label className="mt-2">Search:</label>
                  <input
                    type="search"
                    placeholder="Search here"
                    id="searchbox"
                    aria-controls="dynamic-table"
                    className="form-control"
                    // onKeyUp={handleSearch}
                  />
                </div>
              </div>
              <div className="bg-light" style={{ padding: "10px 10px 0 10px" }}>
                <div className="row">
                  <div className="col-xs-12">
                    <table
                      id="dynamic-table"
                      className="table table-bordered"
                    >
                      <thead>
                        <tr role="row">
                          <th
                            className="bg-primary text-white"
                            tabIndex="0"
                            aria-controls="dynamic-table"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Name: activate to sort column ascending"
                          >
                            Appointment ID
                          </th>
                          <th
                            className="bg-primary text-white"
                            tabIndex="0"
                            aria-controls="dynamic-table"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Address:activate to sort column ascending"
                          >
                            Patient Name
                          </th>
                          <th
                            className="bg-primary text-white"
                            tabIndex="0"
                            aria-controls="dynamic-table"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Timings: activate to sort column ascending"
                          >
                            Appointment Date
                          </th>
                          <th
                            className="bg-primary text-white"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Status"
                          >
                            Appointment Time
                          </th>
                          <th
                            className="bg-primary text-white"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Status"
                          >
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.map((item, index) => (
                          <tr role="row" className="odd" key={index}>
                            <td>{item.appointment_id}</td>
                            <td>{item.patient}</td>
                            <td>{item.date.slice(0, 10)}</td>
                            <td>{item.time}</td>
                            <td>
                                <Link
                                  to="/history1"
                                  className="text-decoration-none text-white"
                                >
                                  <button className="btn btn-secondary">
                                    View EMR
                                  </button>
                                </Link>
                            </td>
                          </tr>
                        ))}
                        <tr id="noresults"></tr>
                      </tbody>
                    </table>
                    <div
                      className="d-flex justify-content-between p-2"
                      style={{ background: "#EFF3F8", width: "100%" }}
                    >
                      <div className="p-3">
                        <div
                          className="dataTables_info"
                          id="dynamic-table_info"
                          role="status"
                          aria-live="polite"
                        >
                          Showing {startIndex + 1} to{" "}
                          {Math.min(endIndex, patients.length)} of {patients.length}{" "}
                          entries
                        </div>
                      </div>
                      <nav className="pt-3 pr-3">
                        <ul className="pagination">
                          <li
                            className={`page-item ${
                              currentPage === 1 ? "disabled" : ""
                            }`}
                          >
                            <button
                              className="page-link"
                              onClick={handlePreviousClick}
                            >
                              Previous
                            </button>
                          </li>
                          {generatePageNumbers()}
                          <li
                            className={`page-item ${
                              currentPage === totalPages ? "disabled" : ""
                            }`}
                          >
                            <button className="page-link" onClick={handleNextClick}>
                              Next
                            </button>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr></hr>
          <footer className="page-footer font-small bg-blue m-4">
            <div className="footer-copyright text-center">
              <span className="text-primary fs-6">PrevMed Sol&nbsp;</span>
              Copyrights © 2023
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Superadmindashboard;
