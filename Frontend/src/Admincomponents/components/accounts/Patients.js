import React, { useState, useEffect } from "react";
import Menu from "../Menu";
import { Link } from "react-router-dom";
import axios from "axios";
import Editpatient from "./Editpatient";
import Navbar from "../Navbar";
import Csvclipboard from "../Csvclipboard"
import Searchbar from "../Searchbar"
import Pagination from "../Pagination"

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [modaldata, setModaldata] = useState([]);
  const [editedData, setEditedData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewRowIndex, setViewRowIndex] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/patients")
      .then((res) => {
        res.data.map((item) => {
          return setPatients((oldArray) => [...oldArray, item]);
        });
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(patients);
  useEffect(() => {
    setCurrentPage(1);
    setViewRowIndex(null);
  }, [pageSize]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const tableData = patients.slice(startIndex, endIndex);

  const handleClick = (index) => {
    setModaldata([patients[index]]);
    setViewRowIndex(index);
  };

  const handleEdit = (index) => {
    setEditedData({ ...patients[index] });
    setIsEditing(true);
  };

  const replaceEdit = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/patients`, editedData)
      .then((res) => {
        console.log(res);
        window.location.reload(false);
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      })
      .finally(() => {
        setEditedData({});
        setIsEditing(false);
      });
  };

  const handleDelete = (index) => {
    const emailToDelete = patients[index].email;

    axios
      .delete(`http://localhost:8080/patients`, {
        data: { email: emailToDelete },
      })
      .then((res) => {
        console.log(res);
        window.location.reload(false);
        // Update your UI as needed, e.g., remove the deleted row from the table
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  const handleChecked = (e) => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    if(e.currentTarget.checked){
      for(let i=0;i<checkboxes.length;i++){
        checkboxes[i].checked = true;
      }
    }
    else{
      for(let i=0;i<checkboxes.length;i++){
        checkboxes[i].checked = false;
      }
    }
  }

  return (
    <>
      <Navbar />
      {isEditing ? (
        <Editpatient
          replaceEdit={replaceEdit}
          editedData={editedData}
          handleChange={handleChange}
          handleSave={handleSave}
        ></Editpatient>
      ) : (
        <div className="d-flex ">
          <div className="col-2 p-0">
            <Menu />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-10 p-0">
            <nav className="d-flex bg-light border border-bottom-info p-2">
            <Link to="/dashboardPage" className="text-decoration-none">
            <i className="bi bi-house-fill"></i>&nbsp;Home&nbsp;
          </Link>
              &gt;&nbsp;Accounts&nbsp;&gt;&nbsp;&nbsp;Patients&nbsp;
            </nav>
            <h4 className="mt-2 ms-2 text-primary">Patients</h4>
            <hr className="ms-4 me-4" />
            <div className="ms-4 me-4 d-flex justify-content-between">
              <Csvclipboard/>

          <button
            style={{ width: "80px", height: "40px" }}
            className="btn btn-primary m-0"
          >
            <Link to="/addpatient" className="text-decoration-none text-white">
            <i className="fa fa-edit"></i> Add
            </Link>
          </button>
        </div>
        <div className="ps-2 pe-2 ps-lg-4 pe-lg-4 pb-4">
              <div
                className="table-header p-2 text-white fs-5"
                style={{ background: "#307ECC", width: "100%" }}
              >
                Results for "List of Patients"
              </div>
              <Searchbar pageSize={pageSize} setPageSize={setPageSize}/>
              <div className="table-responsive">
              <table
                id="dynamic-table"
                className="table table-striped table-bordered table-hover dataTable no-footer"
                role="grid"
                aria-describedby="dynamic-table_info"
              >
                <thead>
                  <tr role="row">
                    <th
                      className="center sorting_disabled"
                      rowSpan="1"
                      colSpan="1"
                    >
                      <label className="pos-rel">
                        <input type="checkbox" name="allcheckboxes" className="ace" onChange={handleChecked}/>
                        <span className="lbl"></span>
                      </label>
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="dynamic-table"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Name: activate to sort column ascending"
                    >
                      ID
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="dynamic-table"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Name: activate to sort column ascending"
                    >
                      Name
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="dynamic-table"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Address:activate to sort column ascending"
                    >
                      Email
                    </th>
                    <th
                      className="hidden-480 sorting"
                      tabIndex="0"
                      aria-controls="dynamic-table"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Timings: activate to sort column ascending"
                    >
                      Email verification
                    </th>
                    <th
                      className="hidden-480 sorting_disabled"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Status"
                    >
                      Account Status
                    </th>
                    <th
                      className="hidden-480 sorting_disabled"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Status"
                    >
                      Payment Status
                    </th>
                    <th
                      className="hidden-480 sorting_disabled"
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
                    <tr role="row" className="odd" key={startIndex+index+1}>
                      <td className="center">
                        <label className="pos-rel">
                          <input type="checkbox" name="solocheckboxes" className="ace" />
                          <span className="lbl"></span>
                        </label>
                      </td>
                      <td>{item.patient_id}</td>
                      <td>
                        {item.firstname} {item.lastname}
                      </td>
                      <td>{item.email}</td>

                      <td>{item.status}</td>

                      <td className="hidden-480">{item.status}</td>
                      <td className="hidden-480">{item.status}</td>

                      <td>
                        <div className="hidden-sm hidden-xs action-buttons d-flex justify-content-around">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            id={index}
                            onClick={() => handleClick(startIndex+index)}
                          >
                            View
                          </button>

                          <button
                            className="btn text-success border-0"
                            onClick={() => handleEdit(startIndex+index)}
                          >
                            <i className="bi bi-pencil-fill"></i>
                          </button>
                          <button
                            className="btn text-danger  border-0"
                            onClick={() => handleDelete(startIndex+index)}
                          >
                            <i className="bi bi-trash-fill"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  <tr id="noresults"></tr>
                </tbody>
              </table>
              </div>
              <Pagination stateData={patients} pageSize={pageSize} setViewRowIndex={setViewRowIndex} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
              {/* <div
                className="d-flex justify-content-between "
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
                <nav>
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
              </div> */}
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
      )}

      {/* modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>View</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {viewRowIndex !== null &&
              modaldata.map((item, index) => (
                <div key={index} className="text-center">
                  <p className="">
                    <span>First Name :</span>
                    <span> {item.firstname}</span>
                  </p>
                  <p className="">
                    <span>Last Name :</span>
                    <span> {item.lastname}</span>
                  </p>
                  <p className="">
                    <span>Gender :</span>
                    <span> {item.gender}</span>
                  </p>
                  <p className="">
                    <span>Bloodgroup :</span>
                    <span> {item.bloodgroup}</span>
                  </p>
                  <p className="">
                    <span>Date of Birth :</span>
                    <span>{new Date(item.dob).toLocaleDateString('en-GB')}</span>
                  </p>
                  <p className="">
                    <span>Phone Number :</span>
                    <span> {item.phone}</span>
                  </p>
                  <p className="">
                    <span>Email :</span>
                    <span> {item.email}</span>
                  </p>
                  <p className="">
                    <span>Address :</span>
                    <span> {item.address}</span>
                  </p>
                  <p className="">
                    <span>State :</span>
                    <span> {item.state}</span>
                  </p>
                  <p className="">
                    <span>City :</span>
                    <span> {item.city}</span>
                  </p>
                </div>
              ))}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Patients;
