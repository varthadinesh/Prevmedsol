import React,{useState,useEffect} from "react";
import Menu from "../Menu";
import { Link } from "react-router-dom";
import states from '../states.json'
import Navbar from '../Navbar';
import { saveAs } from 'file-saver'

const Managecity = () => {
  
  const [stateData, setStateData] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(stateData.length / pageSize);

  useEffect(() => {
    setStateData(states);
  }, []); 

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
        <li key={i} className={`page-item ${i === currentPage ? 'active' : ''}`}>
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
  const tableData = stateData.slice(startIndex, endIndex);


  function handleSearch() {
    var input, filter, table, tr, td, i, txtValue, noResult;
    input = document.getElementById("searchbox");
    filter = input.value.toUpperCase();
    table = document.getElementById("dynamic-table");
    tr = table.getElementsByTagName("tr");


    noResult = document.getElementById('noresults')

    let found  = false;


    for (i = 1; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
            found = true;
        } else {
            tr[i].style.display = "none";
        }
    } else {
        console.error("No td element found in row ", i);
    }   
    }
    if(found){
      noResult.style.display='none'
    } else {
      noResult.style.display='block'
      noResult.innerText = "No matching records found"
    }
  }

  const exportCsv = () => {
    const rows = document.querySelectorAll("table tr")
    let csv = []
    for (const row of rows) {
      const cells = row.querySelectorAll("td, th")
      const rowText = Array.from(cells).map(cell => cell.innerText)
      csv.push(rowText.join(","))
    }
    const csvFile = new Blob([csv.join("\n")], {
      type: "text/csv;charset=utf-8;",
    })
    saveAs(csvFile, "data.csv")
  }

  const copyToClipboard = () => {
    var table = document.getElementById('dynamic-table');
        
    if (navigator.clipboard) {
        var text = table.innerText.trim();
        navigator.clipboard.writeText(text).catch(function () { });
    }
  }

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
      <div className="col-10 p-0">
        <nav className="d-flex bg-light border border-bottom-info p-2">
        <Link to='/dashboardPage' className="text-decoration-none"><i className="bi bi-house-fill"></i>&nbsp;Home&nbsp;</Link>&gt; Locations &gt; State
        </nav>
        <h4 className="mt-2 ms-2 text-primary">Manage City</h4>
        <hr className="ms-4 me-4" />
        <div className="ms-4 me-4 d-flex justify-content-between">
    
        <ul className="pagination">
            
            <li className="page-item"><Link className="page-link" ><i className="bi bi-search"></i></Link></li>
            <li className="page-item"><Link className="page-link" onClick={copyToClipboard}><i className="bi bi-copy"></i></Link></li>
            <li className="page-item"><Link className="page-link" onClick={exportCsv}><i className="bi bi-database-fill"></i></Link></li>
            <li className="page-item"><Link className="page-link"><i className="bi bi-printer-fill"></i></Link></li>
        </ul>
    
        <button style={{width:'80px',height:'40px'}} className="btn btn-primary m-0">Add</button>
        </div>
        <div className="ps-4 pe-4 pb-4">
          <div
            className="table-header p-2 text-white fs-6"
            style={{ background: "#307ECC", width: "100%" }}
          >
           Results for "Latest Registered Domains"
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ background: "#EFF3F8", width: "100%" }}
          >
             <div className="p-2 d-flex">
              <label className="mt-2" style={{minWidth:"120px"}}>
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
                onKeyUp={handleSearch}
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
                    <input type="checkbox" className="ace" onChange={handleChecked}/>
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
                <tr role="row" className="odd"  key={index}>
                <td className="center">
                  <label className="pos-rel">
                    <input type="checkbox" className="ace" />
                    <span className="lbl"></span>
                  </label>
                </td>
                <td>{startIndex+index+1}</td>
                <td className="hidden-480">{item.state}</td>
                <td></td>
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
          <div
            className="d-flex justify-content-between p-2"
            style={{ background: "#EFF3F8", width: "100%" }}
          >
            <div className=" d-flex">
              <label className="">
              Showing {startIndex + 1} to {Math.min(endIndex, stateData.length)} of {stateData.length} entries
                </label> 
            </div>
            <div>
            
            <nav>
                    <ul className="pagination">
                      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={handlePreviousClick}>
                          Previous
                        </button>
                      </li>
                      {generatePageNumbers()}
                      <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={handleNextClick}>
                          Next
                        </button>
                      </li>
                    </ul>
                  </nav>
        
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

export default Managecity;
