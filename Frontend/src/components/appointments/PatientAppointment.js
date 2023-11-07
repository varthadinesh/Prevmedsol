import React from "react";
import Menu from "../Menu";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Link } from "react-router-dom";

const Patientappointment = () => {
  return (
    <div className="d-flex ">
      <div className="col-2 bg-light p-0">
        <Menu />
      </div>
      <div className="col-10 p-0">
        <nav className="d-flex bg-light border border-bottom-info p-2">
          <Link to="/dashboardPage" className="text-decoration-none">
            <i className="bi bi-house-fill"></i>&nbsp;Home&nbsp;
          </Link>
          &gt; Appointment &gt; Patient-Appointment
        </nav>
        <h4 className="mt-2 ms-2 text-primary">Patient Appointment</h4>
        <hr className="ms-4 me-4" />
        <div className="">
          <div style={{ display: "block", width:'100%' }}>

            <Tabs defaultActiveKey="first" className="bg-light">
              <Tab eventKey="first" title="Upcoming">

                <div className="ps-4 pe-4 pb-4 mt-4">
          <div
            className="table-header p-2 text-white fs-6"
            style={{ background: "#307ECC", width: "100%" }}
          >
            Results for "Patient Appointments"
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ background: "#EFF3F8", width: "100%" }}
          >
            <div className="p-2 d-flex">
              <label className="mt-2" style={{ minWidth: "120px" }}>
                Display records
              </label>
              <select
                name="dynamic-table_length"
                aria-controls="dynamic-table"
                class="form-select"
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
                placeholder=""
                aria-controls="dynamic-table"
                class="form-control"
              />
            </div>
          </div>
          <table
            id="dynamic-table"
            className="table table-striped table-bordered table-hover dataTable no-footer"
            role="grid"
            aria-describedby="dynamic-table_info"
          >
            <thead>
              <tr role="row">
                <th className="center sorting_disabled" rowspan="1" colspan="1">
                  <label className="pos-rel">
                    <input type="checkbox" className="ace" />
                    <span className="lbl"></span>
                  </label>
                </th>
                <th
                  className="sorting"
                  tabindex="0"
                  aria-controls="dynamic-table"
                  rowspan="1"
                  colspan="1"
                  aria-label="Appointment ID: activate to sort column ascending"
                >
                  Appointment ID
                </th>
                <th
                  className="sorting"
                  tabindex="0"
                  aria-controls="dynamic-table"
                  rowspan="1"
                  colspan="1"
                  aria-label="Patient Name: activate to sort column ascending"
                >
                 Patient Name
                </th>
                <th
                  className="sorting"
                  tabindex="0"
                  aria-controls="dynamic-table"
                  rowspan="1"
                  colspan="1"
                  aria-label="Phone:activate to sort column ascending"
                >
                  Phone
                </th>
                <th
                  className="hidden-480 sorting"
                  tabindex="0"
                  aria-controls="dynamic-table"
                  rowspan="1"
                  colspan="1"
                  aria-label="Gender: activate to sort column ascending"
                >
                  Gender
                </th>
                <th
                  className="hidden-480 sorting"
                  tabindex="0"
                  aria-controls="dynamic-table"
                  rowspan="1"
                  colspan="1"
                  aria-label="Appointment Date: activate to sort column ascending"
                >
                  Appointment Date
                </th>
                <th
                  className="hidden-480 sorting_disabled"
                  rowspan="1"
                  colspan="1"
                  aria-label="Status"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
            <p>No data available in table</p>
            </tbody>
          </table>
          <div
            className="d-flex justify-content-between p-2"
            style={{ background: "#EFF3F8", width: "100%" }}
          >
            <div className=" d-flex">
              <label className="">Showing 0 to 0 of 0 entries</label>
            </div>
            <div>
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
              </Tab>
              <Tab eventKey="second" title="Previous">
              <div className="ps-4 pe-4 pb-4 mt-4">
          <div
            className="table-header p-2 text-white fs-6"
            style={{ background: "#307ECC", width: "100%" }}
          >
            Results for "Patient Appointments"
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ background: "#EFF3F8", width: "100%" }}
          >
            <div className="p-2 d-flex">
              <label className="mt-2" style={{ minWidth: "120px" }}>
                Display records
              </label>
              <select
                name="dynamic-table_length"
                aria-controls="dynamic-table"
                class="form-select"
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
                placeholder=""
                aria-controls="dynamic-table"
                class="form-control"
              />
            </div>
          </div>
          <table
            id="dynamic-table"
            className="table table-striped table-bordered table-hover dataTable no-footer"
            role="grid"
            aria-describedby="dynamic-table_info"
          >
            <thead>
              <tr role="row">
                <th className="center sorting_disabled" rowspan="1" colspan="1">
                  <label className="pos-rel">
                    <input type="checkbox" className="ace" />
                    <span className="lbl"></span>
                  </label>
                </th>
                <th
                  className="sorting"
                  tabindex="0"
                  aria-controls="dynamic-table"
                  rowspan="1"
                  colspan="1"
                  aria-label="Appointment ID: activate to sort column ascending"
                >
                  Appointment ID
                </th>
                <th
                  className="sorting"
                  tabindex="0"
                  aria-controls="dynamic-table"
                  rowspan="1"
                  colspan="1"
                  aria-label="Patient Name: activate to sort column ascending"
                >
                 Patient Name
                </th>
                <th
                  className="sorting"
                  tabindex="0"
                  aria-controls="dynamic-table"
                  rowspan="1"
                  colspan="1"
                  aria-label="Phone:activate to sort column ascending"
                >
                  Phone
                </th>
                <th
                  className="hidden-480 sorting"
                  tabindex="0"
                  aria-controls="dynamic-table"
                  rowspan="1"
                  colspan="1"
                  aria-label="Gender: activate to sort column ascending"
                >
                  Gender
                </th>
                <th
                  className="hidden-480 sorting"
                  tabindex="0"
                  aria-controls="dynamic-table"
                  rowspan="1"
                  colspan="1"
                  aria-label="Appointment Date: activate to sort column ascending"
                >
                  Appointment Date
                </th>
                <th
                  className="hidden-480 sorting_disabled"
                  rowspan="1"
                  colspan="1"
                  aria-label="Center"
                >
                  Center
                </th>
              </tr>
            </thead>
            <tbody>
            <tr role="row" className="even">
                <td className="center">
                  <label className="pos-rel">
                    <input type="checkbox" className="ace" />
                    <span className="lbl"></span>
                  </label>
                </td>
                <td>16</td>
                <td>Raju</td>
                <td>9885875921</td>
                <td>female</td>
                <td>2018-10-22</td>
                <td>test</td>
              </tr>
              <tr role="row" className="even">
                <td className="center">
                  <label className="pos-rel">
                    <input type="checkbox" className="ace" />
                    <span className="lbl"></span>
                  </label>
                </td>
                <td>22</td>
                <td>Kiran</td>
                <td>8885875924</td>
                <td>male</td>
                <td>2018-05-02</td>
                <td>Testing Center</td>
              </tr>
            
            </tbody>
          </table>
          <div
            className="d-flex justify-content-between p-2"
            style={{ background: "#EFF3F8", width: "100%" }}
          >
            <div className=" d-flex">
              <label className="">Showing 2 to 2 of 2 entries</label>
            </div>
            <div>
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
              </Tab>
            </Tabs>
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
  );
};

export default Patientappointment;
