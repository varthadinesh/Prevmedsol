import React from "react";
import Menu from "../Menu";

const Doctors = () => {
  return (
    <div className="d-flex ">
      <div className="col-2 bg-light p-0">
      <Menu/>
      </div>
      <div className="col-10 p-0">
        <nav className="d-flex bg-light border border-bottom-info p-2">
          <i className="bi bi-house-fill"></i>&nbsp;Home&nbsp;&gt;&nbsp;Accounts&nbsp;&gt;&nbsp;&nbsp;Doctors&nbsp;
        </nav>
        <h4 className="mt-2 ms-2 text-primary">Doctors</h4>
        <hr className="ms-4 me-4" />
        <div class="d-flex justify-content-between">
          <div class="pull-left p-3">
            <div class="btn-overlap btn-group">
              <a
                href="/"
                class="btn btn-white btn-primary btn-bold"
                tabindex="0"
                aria-controls="dynamic-table"
                data-original-title=""
                title=""
              >
                <span>
                  <i class="fa fa-search bigger-110 blue"></i>{" "}
                </span>
              </a>
              <a
                href="/"
                class="btn btn-white btn-primary btn-bold"
                tabindex="0"
                aria-controls="dynamic-table"
                data-original-title=""
                title=""
              >
                <span>
                  <i class="fa fa-copy bigger-110 pink"></i>{" "}
                </span>
              </a>
              <a
                href="/"
                class="btn btn-white btn-primary btn-bold"
                tabindex="0"
                aria-controls="dynamic-table"
                data-original-title=""
                title=""
              >
                <span>
                  <i class="fa fa-database bigger-110 orange"></i>{" "}
                </span>
              </a>
              <a
                href="/"
                class="btn btn-white btn-primary btn-bold"
                tabindex="0"
                aria-controls="dynamic-table"
                data-original-title=""
                title=""
              >
                <span>
                  <i class="fa fa-print bigger-110 grey"></i>{" "}
                </span>
              </a>
            </div>
          </div>
          <div class="pull-right p-3">
            <a href="http://prevmedsol.com/admin/add_center">
              <button class="btn btn-primary">
                <i class="fa fa-edit"></i> Add
              </button>
            </a>
          </div>
        </div>
        <div className="p-3">
          <div
            className="table-header p-2 text-white fs-5"
            style={{ background: "#307ECC", width: "100%" }}
          >
          Results for "List of Doctors"
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ background: "#EFF3F8", width: "100%" }}
          >
            <div className="p-2">
              <label>
                Display records
                </label>
                <select
                  name="dynamic-table_length"
                  aria-controls="dynamic-table"
                  class="form-control"
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>{" "}
                
            </div>
            <div className="p-2">
              <label>Search:</label>
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
                  aria-label="Name: activate to sort column ascending"
                >
                  Name
                </th>
                <th
                  className="sorting"
                  tabindex="0"
                  aria-controls="dynamic-table"
                  rowspan="1"
                  colspan="1"
                  aria-label="Address:activate to sort column ascending"
                >
                  Email
                </th>
                <th
                  className="hidden-480 sorting"
                  tabindex="0"
                  aria-controls="dynamic-table"
                  rowspan="1"
                  colspan="1"
                  aria-label="Timings: activate to sort column ascending"
                >
                  Phone
                </th>
                <th
                  className="hidden-480 sorting_disabled"
                  rowspan="1"
                  colspan="1"
                  aria-label="Status"
                >
                 Hospital
                </th>
                <th
                  className="hidden-480 sorting_disabled"
                  rowspan="1"
                  colspan="1"
                  aria-label="Status"
                >
                 Account Status
                </th>
                <th
                  className="hidden-480 sorting_disabled"
                  rowspan="1"
                  colspan="1"
                  aria-label="Status"
                >
                 Actions
                </th>

              </tr>
            </thead>
            <tbody>
              <tr role="row" className="odd">
                <td className="center">
                  <label className="pos-rel">
                    <input type="checkbox" className="ace" />
                    <span className="lbl"></span>
                  </label>
                </td>
            
                <td>rohit dev</td>

                <td>abc@yahoo.com</td>

                <td className="hidden-480">3434231211</td>
                <td className="hidden-480">Testing Center</td>
                <td className="hidden-480">active</td>
                <td>
                  <div className="hidden-sm hidden-xs action-buttons d-flex justify-content-around">
                    <a
                      className="blue"
                      href="/"
                      data-toggle="tooltip"
                      title="View"
                    >
                      <button
                        type="button"
                        className=""
                        data-toggle="modal"
                        data-target="#myModal25"
                      >
                        View
                      </button>
                    </a>

                    <a
                      className="green"
                      href="http://prevmedsol.com/admin/edit_center/25"
                    >
                      <i class="bi bi-pencil-fill"></i>
                    </a>
                    <a
                      className="red"
                      href="http://prevmedsol.com/admin/delete_center/25"
                      onclick="return checkDelete();"
                    >
                      <i class="bi bi-trash-fill"></i>
                    </a>
                  </div>
                </td>
              </tr>
              <tr role="row" className="even">
                <td className="center">
                  <label className="pos-rel">
                    <input type="checkbox" className="ace" />
                    <span className="lbl"></span>
                  </label>
                </td>
            
                <td>luv dev</td>

                <td>sample@yahoo.com</td>

                <td className="hidden-480">4656468799</td>
                <td className="hidden-480">PUJA</td>
                <td>active</td>

                <td>
                  <div className="hidden-sm hidden-xs action-buttons d-flex justify-content-around">
                    <a
                      className="blue"
                      href="/"
                      data-toggle="tooltip"
                      title="View"
                    >
                      <button
                        type="button"
                        className=""
                        data-toggle="modal"
                        data-target="#myModal56"
                      >
                        View
                      </button>
                    </a>

                    <a
                      className="green"
                      href="http://prevmedsol.com/admin/edit_center/56"
                    >
                      <i class="bi bi-pencil-fill"></i>
                    </a>

                    <a
                      className="red"
                      href="http://prevmedsol.com/admin/delete_center/56"
                      onclick="return checkDelete();"
                    >
                      <i class="bi bi-trash-fill"></i>
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-between " style={{ background: "#EFF3F8", width: "100%"}} >
            <div class="p-3">
              <div
                class="dataTables_info"
                id="dynamic-table_info"
                role="status"
                aria-live="polite"
              >
                Showing 1 to 7 of 7 entries
              </div>
            </div>
            <div class="pull-left p-2">
            <div class="btn-overlap btn-group">
              <a
              href="/"
                 class="btn btn-white btn-primary btn-bold"
                tabindex="0"
                aria-controls="dynamic-table"
                data-original-title=""
                title=""
              >
                <span>
                  Previous
                </span>
              </a>
              <a
                            href="/"

                class="btn btn-white btn-bold border"
                tabindex="0"
                aria-controls="dynamic-table"
                data-original-title=""
                title=""
              >
                <span>
                  1
                </span>
              </a>
              <a
               href="/"
                class="btn btn-white btn-primary btn-bold"
                tabindex="0"
                aria-controls="dynamic-table"
                data-original-title=""
                title=""
              >
                <span>
                  Next
                </span>
              </a>
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
  );
};

export default Doctors;
