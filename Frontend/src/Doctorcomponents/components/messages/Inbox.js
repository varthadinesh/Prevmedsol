import React,{useState,useEffect} from "react";
import Menu from "../Menu";
import Navbar from "../Navbar";
import axios from "axios";
import { useData } from "../../../Admincomponents/components/Datacontext";

const Doctorinbox = () => {
  const [info1, setInfo1] = useState([]);
  const { doctor } = useData();

  const [values, setValues] = useState({
    toemail: doctor.email,
    status: "read"
  });
  
  useEffect(() => {
    axios
      .get("http://localhost:8080/patientsentdata")
      .then((res) => {
        // console.log(res.data);
        res.data.map((item) => {
          console.log(item);
          if (doctor.email == item.toemail) {
            setInfo1((prev) => [...prev, item]);
          }
        });
      })
      .catch((err) => console.log(err));
  }, []);
  

  const handleRowClick = (indexclicked) => {
    info1.map((item,index)=>{
      if(index===indexclicked){
        if(item.status === "unread"){
          axios.post("http://localhost:8080/inbox", values)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));

          document.getElementById('messagesdiv').innerHTML=
          `
          <p><b>Subject:</b> ${item.subject}</p>
          <p><b>From:</b> ${item.fromemail}</p>
          <p><b>Date:</b> ${item.date} <span class="ps-2">${item.time}</span></p>
          <p><b>Message:</b> ${item.message}</p>
          `;
        }
        else{
          document.getElementById('messagesdiv').innerHTML=
          `
          <p><b>Subject:</b> ${item.subject}</p>
          <p><b>From:</b> ${item.fromemail}</p>
          <p><b>Date:</b> ${item.date} <span class="ps-2">${item.time}</span></p>
          <p><b>Message:</b> ${item.message}</p>
          `;
        }

      }
    })   
  };

  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div className="col-2 p-0">
          <Menu />
        </div>

        <div className="col-10 ">
           
            <div className="d-flex justify-content-between">
              <h4 className="mt-4">Inbox</h4>
                <div className="input-group w-25 mt-4">
                <input type="text" className="form-control" name="search_by_name" id="search_by_name" placeholder="Search"/>
                <span>
                <button type="submit" className='form-control'><i className="fa fa-search"></i></button>
                </span>
                </div>
            </div>
            <hr/>
            <div className="d-flex"> 
              <div className="col-md-6">
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
                      >
                        Subject
                      </th>
                      <th
                        className="sorting"
                        tabIndex="0"
                        aria-controls="dynamic-table"
                        rowSpan="1"
                        colSpan="1"
                      >
                        From
                      </th>
                      <th
                        className="sorting"
                        tabIndex="0"
                        aria-controls="dynamic-table"
                        rowSpan="1"
                        colSpan="1"
                      >
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {info1.length > 0 ? (
                      info1.map((item, index) => {
                        {
                          
                          if(item.status==="unread"){
                            return (
                              <tr key={index} onClick={() => handleRowClick(index)} style={{cursor:"pointer"}}>
                                <td><b>{item.subject}</b></td>
                                <td><b>{item.fromemail}</b></td>
                                <td><b>{item.date} &nbsp;&nbsp;{item.time}</b></td>
                              </tr>
                            );
                          }
                          else{
                            return (
                              <tr key={index} onClick={() => handleRowClick(index)} style={{cursor:"pointer"}}>
                                <td>
                                  {item.subject}
                                </td>
                                <td>{item.fromemail}</td>
                                <td>{item.date.slice(0,10)} &nbsp;&nbsp;{item.time}</td>
                              </tr>
                            );
                          }
                        }
                      })
                    ) : (
                      <tr>
                        <td colSpan={3}>No messages for you</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="col-md-6 bg-light" id="messagesdiv">
              
              </div>

            </div>
        </div>
      </div>
    </>
  );
};

export default Doctorinbox;