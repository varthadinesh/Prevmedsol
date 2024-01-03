import React,{useState,useEffect} from "react";
import Menu from "../Menu";
import { Link } from "react-router-dom";
import states from '../states.json'
import Navbar from '../Navbar';
import Csvclipboard from "../Csvclipboard"
import Searchbar from "../Searchbar"
import Pagination from '../Pagination'

const Managestate = () => {

  const [stateData, setStateData] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setStateData(states);
  }, []); 

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const tableData = stateData.slice(startIndex, endIndex);

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
        <Link to='/dashboardPage' className="text-decoration-none"><i className="bi bi-house-fill"></i>&nbsp;Home&nbsp;</Link>&gt; Locations &gt; State
        </nav>
        <h4 className="mt-2 ms-2 text-primary">Manage State</h4>
        <hr className="ms-4 me-4" />
        <div className="ms-4 me-4 d-flex justify-content-between">
        <Csvclipboard/>
    
        <button style={{width:'80px',height:'40px'}} className="btn btn-primary m-0">Add</button>
        </div>
        <div className="ps-2 pe-2 ps-lg-4 pe-lg-4 pb-4">
          <div
            className="table-header p-2 text-white fs-6"
            style={{ background: "#307ECC", width: "100%" }}
          >
           Results for "Latest Registered Domains"
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
                  aria-label="ID: activate to sort column ascending"
                >
                  ID
                </th>
                <th
                  className="hidden-480 sorting_disabled"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="State"
                >
                  State
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
            {tableData.map((item,index)=>(
                <tr role="row" className="odd" key={index}>
                <td className="center">
                  <label className="pos-rel">
                    <input type="checkbox" name="solocheckbox" className="ace" />
                    <span className="lbl"></span>
                  </label>
                </td>
                <td>{startIndex + index + 1}</td>
                <td className="hidden-480">{item.state}</td>
                <td>
                  <div className="hidden-sm hidden-xs action-buttons d-flex justify-content-evenly">
                    
                    <Link
                      className="green"
                    to="/addcenter"
                    >
                      <i className="bi bi-pencil-fill"></i>
                    </Link>
                    <a
                      className="red"
                    >
                      <i className="bi bi-trash-fill"></i>
                    </a>
                  </div>
                </td>
              </tr>
            ))}
             <tr id="noresults"></tr>
            </tbody>
          </table>
          </div>
          <Pagination stateData={stateData} pageSize={pageSize} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
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

export default Managestate;

