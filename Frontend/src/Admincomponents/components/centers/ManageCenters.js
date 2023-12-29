import React, { useState, useEffect } from "react";
import Menu from "../Menu";
import { Link } from "react-router-dom";
import axios from "axios";
import Editcenter from "./Editcenter"
import Navbar from '../Navbar';
import Csvclipboard from "../Csvclipboard"
import Searchbar from "../Searchbar"
import Pagination from '../Pagination'

const Managecenters = () => {
  const [centers, setCenters] = useState([]);
  const [modaldata, setModaldata] = useState([]);
  const [editedData, setEditedData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  // const totalPages = Math.ceil(centers.length / pageSize);

  useEffect(() => {
    axios
      .get("http://localhost:8080/managecenters")
      .then((res) => {
        res.data.map((item) => {
          setCenters((oldArray) => [...oldArray, item]);
        });
      })
      .catch((err) => console.log(err));
  },[]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const tableData = centers.slice(startIndex, endIndex);

  const handleClick = (e) => {
    e.preventDefault();
    centers.map((item,index)=>{
      if(e.currentTarget.id == index){
        setModaldata([item]);
      }
    });
  }

  const handleEdit = (index) => {
    setEditedData({...centers[index]});
    setIsEditing(true);
  }

  const replaceEdit = () => {
    setIsEditing(false);
  }

  const handleChange = (e) => {
    const {name, value} = e.currentTarget;
    setEditedData((prevData)=>({ ...prevData, [name]:value}))
  }


  const handleSave = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/managecenters`, editedData)
      .then((res) => {
        console.log(res);
        window.location.reload(false);
      })
      .catch(error => {
        console.error('Error saving data:', error);
      })
      .finally(() => {
        setEditedData({});
        setIsEditing(false);
      });
  };


  const handleDelete = (index) => {
    const emailToDelete = centers[index].email;

    axios.delete(`http://localhost:8080/managecenters`, { data: { email: emailToDelete } })
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
    {isEditing ? (<Editcenter replaceEdit={replaceEdit} editedData={editedData} handleChange={handleChange} handleSave={handleSave}></Editcenter>) :
    (<div className="d-flex ">
      <div className="col-2 p-0">
        <Menu />
      </div>
      <div className="col-sm-12 col-md-12 col-lg-10 p-0">
        <nav className="d-flex bg-light border border-bottom-info p-2">
          <Link to="/dashboardPage" className="text-decoration-none">
            <i className="bi bi-house-fill"></i>&nbsp;Home&nbsp;
          </Link>
          &gt; Centers &gt; Manage Centers
        </nav>
        <h4 className="mt-2 ms-2 text-primary">Manage center</h4>
        <hr className="ms-4 me-4" />
        <div className="ms-4 me-4 d-flex justify-content-between">
        <Csvclipboard/>

          <button
            style={{ width: "80px", height: "40px" }}
            className="btn btn-primary m-0"
          >
            <Link to="/addcenter" className="text-decoration-none text-white">
            <i className="fa fa-edit"></i> Add
            </Link>
          </button>
        </div>
        <div className="ps-2 pe-2 ps-lg-4 pe-lg-4 pb-4">
          <div
            className="table-header p-2 text-white fs-6"
            style={{ background: "#307ECC", width: "100%" }}
          >
            Results for "Centers"
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
                    <input type="checkbox" name="allcheckbox" className="ace" onChange={handleChecked}/>
                    <span className="lbl"></span>
                  </label>
                </th>
                <th
                  className="sorting"
                  tabIndex="0"
                  aria-controls="dynamic-table"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="ID: activate to sort column ascending"
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
                  Address
                </th>
                <th
                  className="hidden-480 sorting"
                  tabIndex="0"
                  aria-controls="dynamic-table"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="City: activate to sort column ascending"
                >
                  City
                </th>
                <th
                  className="hidden-480 sorting"
                  tabIndex="0"
                  aria-controls="dynamic-table"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="Timings: activate to sort column ascending"
                >
                  Timings
                </th>
                <th
                  className="hidden-480 sorting_disabled"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="Status"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr role="row" className="odd" key={index}>
                  <td className="center">
                    <label className="pos-rel">
                      <input type="checkbox" name="solocheckbox" className="ace" />
                      <span className="lbl"></span>
                    </label>
                  </td>
                  <td>{item.center_id}</td>
                  <td>{item.centername}</td>

                  <td>{item.address}</td>

                  <td className="hidden-480">{item.city}</td>
                  <td className="hidden-480">
                    {item.fromtiming} - {item.totiming}
                  </td>

                  <td>
                    <div className="hidden-sm hidden-xs action-buttons d-flex justify-content-around">
                      
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          id={index}
                          onClick={handleClick}
                        >
                          View
                        </button>
                      

                      <button
                        className="btn text-success border-0"
                        onClick={()=>handleEdit(index)}
                      >
                        <i className="bi bi-pencil-fill"></i>
                      </button>
                      <button
                        className="btn text-danger border-0"
                        onClick={()=>handleDelete(index)}
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
          <Pagination stateData={centers} pageSize={pageSize} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
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
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5>View</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {modaldata.map((item,index)=>(
              <div key={index} className="text-center">
                <p className="">
                  <span>Name :</span> 
                  <span> {item.centername}</span>
                </p>
                <p className="">
                  <span>Address :</span> 
                  <span> {item.address}</span>
                </p>
                <p className="">
                  <span>Timing :</span> 
                  <span> {item.fromtiming}-{item.totiming}</span>
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

export default Managecenters;
