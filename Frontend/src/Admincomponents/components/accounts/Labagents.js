import React, { useState, useEffect } from "react";
import Menu from "../Menu";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from '../Navbar';
import Csvclipboard from "../Csvclipboard"
import Searchbar from "../Searchbar"
import Pagination from '../Pagination'

const Labagents = () => {
  const [labagents, setLabagents] = useState([]);
  const [modaldata, setModaldata] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewRowIndex, setViewRowIndex] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/labagents")
      .then((res) => {
        res.data.map((item) => {
          return setLabagents((oldArray) => [...oldArray, item]);
        });
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(labagents);
  useEffect(() => {
    setCurrentPage(1);
    setViewRowIndex(null);
  }, [pageSize]);
 
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const tableData = labagents.slice(startIndex, endIndex);

  const handleClick = (index) => {
    setModaldata([labagents[index]]);
    setViewRowIndex(index);
  };

  const handleDelete = (index) => {
    const emailToDelete = labagents[index].email;

    axios.delete(`http://localhost:8080/labagents`, { data: { email: emailToDelete } })
        .then((res) => {
            console.log(res);
            window.location.reload(false);
            // Update your UI as needed, e.g., remove the deleted row from the table
        })
        .catch(error => {
            console.error('Error deleting data:', error);
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
    <Navbar/>
     <div className="d-flex ">
      <div className="col-2 p-0">
      <Menu/>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-10 p-0">
        <nav className="d-flex bg-light border border-bottom-info p-2">
        <Link to="/dashboardPage" className="text-decoration-none">
            <i className="bi bi-house-fill"></i>&nbsp;Home&nbsp;
          </Link>
          &gt;&nbsp;Accounts&nbsp;&gt;&nbsp;&nbsp;Lab agents&nbsp;
        </nav>
        <h4 className="mt-2 ms-2 text-primary">Lab Agent</h4>
        <hr className="ms-4 me-4" />
        <div className="ms-4 me-4 d-flex justify-content-between">
          <Csvclipboard/>

          <button
            style={{ width: "80px", height: "40px" }}
            className="btn btn-primary m-0"
          >
            <Link to="/addlabagent" className="text-decoration-none text-white">
            <i className="fa fa-edit"></i> Add
            </Link>
          </button>
        </div>
        <div className="ps-2 pe-2 ps-lg-4 pe-lg-4 pb-4">
          <div
            className="table-header p-2 text-white fs-5"
            style={{ background: "#307ECC", width: "100%" }}
          >
          Results for "List of Lab agents"
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
                <th className="center sorting_disabled" rowSpan="1" colSpan="1">
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
                  Phone
                </th>
                <th
                  className="hidden-480 sorting_disabled"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="Status"
                >
                 Lab
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
                  <td>{item.labagent_id}</td>
                  <td>
                    {item.firstname} {item.lastname}
                  </td>
                  <td>{item.email}</td>

                  <td>{item.phone}</td>

                  <td className="hidden-480">{item.labname}</td>
                  <td className="hidden-480">Active</td>

                  <td>
                    <div className="hidden-sm hidden-xs action-buttons d-flex justify-content-around">
                     
                    <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          id={index}
                          onClick={()=>handleClick(startIndex+index)}
                        >
                          View
                        </button>
                      
                        <Link
                        to={"/editlabagent/"+item.labagent_id}
                        className="text-decoration-none text-white"
                      >
                      <button
                        className="btn text-success border-0"
                      >
                        <i className="bi bi-pencil-fill"></i>
                      </button>
                      </Link>
                      <button
                        className="btn text-danger border-0"
                        onClick={()=>handleDelete(startIndex+index)}
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
          <Pagination stateData={labagents} pageSize={pageSize} setViewRowIndex={setViewRowIndex} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
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

     {/* modal */}
     <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
         <div className="modal-dialog">
           <div className="modal-content">
             <div className="modal-header">
               <h5>View</h5>
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <div className="modal-body">
               {viewRowIndex !== null &&
               modaldata.map((item,index)=>(
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
                     <span>Phone Number :</span> 
                     <span> {item.phone}</span>
                   </p>
                   <p className="">
                     <span>Email :</span> 
                     <span> {item.email}</span>
                   </p>
                   <p className="">
                     <span>Lab name :</span> 
                     <span> {item.labname}</span>
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
               <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
             </div>
           </div>
         </div>
       </div>
    </>
  );
};

export default Labagents;
