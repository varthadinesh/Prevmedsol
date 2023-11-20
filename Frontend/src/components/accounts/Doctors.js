import React, { useState, useEffect } from "react";
import Menu from "../Menu";
import { Link } from "react-router-dom";
import axios from "axios";
import EditDoctor from "./Editdoctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [modaldata, setModaldata] = useState([]);
  const [editedData, setEditedData] = useState({});
  const [isEditing, setIsEditing] = useState(false);


  useEffect(() => {
    axios
      .get("http://localhost:8080/doctors")
      .then((res) => {
        res.data.map((item) => {
          setDoctors((oldArray) => [...oldArray, item]);
        });
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(doctors);

  const handleClick = (e) => {
    e.preventDefault();
    doctors.map((item,index)=>{
      if(e.currentTarget.id == index){
        setModaldata([item]);
      }
    });
  }

  const handleEdit = (index) => {
    setEditedData({...doctors[index]});
    setIsEditing(true);
  }

  const replaceEdit = () => {
    setIsEditing(false);
  }

  const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.currentTarget;
    setEditedData((prevData)=>({ ...prevData, [name]:value}))
  }


  const handleSave = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/doctors`, editedData)
      .then((res) => {
        console.log(res);
        window.location.reload(false);

        // Refresh the data after saving
        // axios.get('http://localhost:8080/managecenters')
        //   .then(response => {
        //     setCenters(response.data);
        //   })
        //   .catch(error => {
        //     console.error('Error fetching data:', error);
        //     // Handle the error, such as displaying an error message to the user.
        //   });
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
    const emailToDelete = doctors[index].email;

    axios.delete(`http://localhost:8080/doctors`, { data: { email: emailToDelete } })
        .then((res) => {
            console.log(res);
            window.location.reload(false);
            // Update your UI as needed, e.g., remove the deleted row from the table
        })
        .catch(error => {
            console.error('Error deleting data:', error);
        });
  };

  return (
    <>
    {isEditing ? (<EditDoctor replaceEdit={replaceEdit} editedData={editedData} handleChange={handleChange} handleSave={handleSave}></EditDoctor>) :

    (<div className="d-flex ">
      <div className="col-2 p-0">
        <Menu />
      </div>
      <div className="col-10 p-0">
        <nav className="d-flex bg-light border border-bottom-info p-2">
          <i className="bi bi-house-fill"></i>
          &nbsp;Home&nbsp;&gt;&nbsp;Accounts&nbsp;&gt;&nbsp;&nbsp;Doctors&nbsp;
        </nav>
        <h4 className="mt-2 ms-2 text-primary">Doctors</h4>
        <hr className="ms-4 me-4" />
        <div className="d-flex justify-content-between">
          <div className="pull-left p-3">
            <div className="btn-overlap btn-group">
              <a
                href="/"
                className="btn btn-white btn-primary btn-bold"
                tabIndex="0"
                aria-controls="dynamic-table"
                data-original-title=""
                title=""
              >
                <span>
                  <i className="fa fa-search bigger-110 blue"></i>{" "}
                </span>
              </a>
              <a
                href="/"
                className="btn btn-white btn-primary btn-bold"
                tabIndex="0"
                aria-controls="dynamic-table"
                data-original-title=""
                title=""
              >
                <span>
                  <i className="fa fa-copy bigger-110 pink"></i>{" "}
                </span>
              </a>
              <a
                href="/"
                className="btn btn-white btn-primary btn-bold"
                tabIndex="0"
                aria-controls="dynamic-table"
                data-original-title=""
                title=""
              >
                <span>
                  <i className="fa fa-database bigger-110 orange"></i>{" "}
                </span>
              </a>
              <a
                href="/"
                className="btn btn-white btn-primary btn-bold"
                tabIndex="0"
                aria-controls="dynamic-table"
                data-original-title=""
                title=""
              >
                <span>
                  <i className="fa fa-print bigger-110 grey"></i>{" "}
                </span>
              </a>
            </div>
          </div>
          <div className="pull-right p-3">
            <Link to="/adddoctor">
              <button className="btn btn-primary">
                <i className="fa fa-edit"></i> Add
              </button>
            </Link>
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
              <label>Display records</label>
              <select
                name="dynamic-table_length"
                aria-controls="dynamic-table"
                className="form-control"
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
                className="form-control"
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
                <th className="center sorting_disabled" rowSpan="1" colSpan="1">
                  <label className="pos-rel">
                    <input type="checkbox" className="ace" />
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
                  Hospital
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
              {doctors.map((item, index) => (
                <tr role="row" className="odd" key={index}>
                  <td className="center">
                    <label className="pos-rel">
                      <input type="checkbox" className="ace" />
                      <span className="lbl"></span>
                    </label>
                  </td>
                  <td>
                    {item.firstname} {item.lastname}
                  </td>
                  <td>{item.email}</td>

                  <td>{item.phone}</td>

                  <td className="hidden-480">{item.hospital}</td>
                  <td className="hidden-480">Active</td>

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
                        className="text-success"
                        onClick={()=>handleEdit(index)}
                      >
                        <i className="bi bi-pencil-fill"></i>
                      </button>
                      <button
                        className="text-danger"
                        onClick={()=>handleDelete(index)}
                      >
                        <i className="bi bi-trash-fill"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
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
                Showing 1 to {doctors.length} of {doctors.length} entries
              </div>
            </div>
            <div className="pull-left p-2">
              <div className="btn-overlap btn-group">
                <a
                  href="/"
                  className="btn btn-white btn-primary btn-bold"
                  tabIndex="0"
                  aria-controls="dynamic-table"
                  data-original-title=""
                  title=""
                >
                  <span>Previous</span>
                </a>
                <a
                  href="/"
                  className="btn btn-white btn-bold border"
                  tabIndex="0"
                  aria-controls="dynamic-table"
                  data-original-title=""
                  title=""
                >
                  <span>1</span>
                </a>
                <a
                  href="/"
                  className="btn btn-white btn-primary btn-bold"
                  tabIndex="0"
                  aria-controls="dynamic-table"
                  data-original-title=""
                  title=""
                >
                  <span>Next</span>
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
    </div>)}

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
                     <span>Hospital :</span> 
                     <span> {item.hospital}</span>
                   </p>
                   <p className="">
                     <span>Specialization :</span> 
                     <span> {item.specialization}</span>
                   </p>
                   <p className="">
                     <span>Address :</span> 
                     <span> {item.address}</span>
                   </p>
                   <p className="">
                     <span>Country :</span> 
                     <span> {item.country}</span>
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

export default Doctors;
