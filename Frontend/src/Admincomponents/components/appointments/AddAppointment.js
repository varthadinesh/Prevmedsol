import React, { useState,useEffect } from "react";
import Menu from "../Menu";
import { Link} from "react-router-dom";
import axios from "axios";
import Navbar from '../Navbar';


const Addappointment = () => {
  const [values, setValues] = useState({
    patient: "",
    appointment: "",
    center: "",
    date: "",
    timing: "",
  });

  const [patients,setPatients] = useState([]); 
  const [centers,setCenters] = useState([]); 
  const [labs,setLabs] = useState([]);

  useEffect(() => {
    // Get yesterday's date in the format "YYYY-MM-DD"
    const getYesterday = () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate());
      const day = String(yesterday.getDate()).padStart(2, '0');
      const month = String(yesterday.getMonth() + 1).padStart(2, '0');
      const year = yesterday.getFullYear();
      return `${year}-${month}-${day}`;
    };

    // Set the min attribute of the date input to yesterday
    const dateInput = document.getElementById('date');
    if (dateInput) {
      dateInput.min = getYesterday();
    }
  }, []);

   useEffect(()=>{
    axios
    .get("http://localhost:8080/addappointment")
    .then((res) => {
      // console.log(res.data.data2)
      res.data.data1.map((item)=>{
        return setPatients(oldArray => [...oldArray, item.firstname +" "+ item.lastname]);
      })
      res.data.data2.map((item)=>{
        return setCenters(oldArray => [...oldArray, item]);
      })
      res.data.data3.map((item)=>{
        return setLabs(oldArray => [...oldArray, item]);
      })
    })
    .catch((err) => console.log(err));
  },[]);

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
// console.log(values.appointment);
  const handleSubmit = (event) => {
    console.log(values);
    event.preventDefault();
    // setErrors(Validation(values));
    // if (errors.name === "" && errors.email === "" && errors.password === "" && errors.cnfpassword === "") {
    axios
      .post("http://localhost:8080/addappointment", values)
      .then((res) => {
        if(res.data === "Error"){
          alert('Error while adding appointment. Please try again filling all the fields');
        }
        else{
          alert("Patient appointment added successfully");
          window.location.reload(false);
        }
      })
      .catch((err) => console.log(err));
    // }
  };

  return (
    <>
    <Navbar/>
    <div className="d-flex">
      <div className="col-2 p-0">
        <Menu />
      </div>

      <div className="col-sm-12 col-md-12 col-lg-10 p-0">
        <nav className="d-flex bg-light border border-bottom-info p-2">
          <Link to="/dashboardPage" className="text-decoration-none">
            <i className="bi bi-house-fill"></i>&nbsp;Home&nbsp;
          </Link>
          &gt; &nbsp; <Link to="/patients"  className="text-decoration-none">Users</Link>&nbsp; &gt; Add Appointment
        </nav>
        <h4 className="mt-2 ms-2 text-primary">Add Appointment</h4>
        <hr className="ms-4 me-4" />
        <div className="">
          <div className="col-xs-12">
            <form
              className="form-horizontal mb-4"
              action=""
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="form-group d-md-flex">
                <label className="col-sm-4 text-md-end text-primary" htmlFor="patient">
                  Select Patient
                </label>
                <div className="col-sm-8">
                  <select
                    className="col-xs-10 col-sm-5 form-select"
                    id="patient"
                    name="patient"
                    onChange={handleInput}
                    required
                  >
                    <option value="">Select</option>
                    {
                      patients.map((item,index)=>(
                        <option key={index}>{item}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="appointment"
                >
                  Choose Appointment Type
                </label>
                <div className="col-sm-8">
                  <select
                    className="col-xs-10 col-sm-5 form-select"
                    id="appointment"
                    name="appointment"
                    onChange={handleInput}
                    required
                  >
                    <option value="">Select</option>
                    <option value="checkup">Checkup</option>
                    <option value="tests">Tests</option>
                  </select>
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="center"
                >
                  Center
                </label>
                <div className="col-sm-8">
                  <select
                    className="col-xs-10 col-sm-5 form-select"
                    id="center"
                    name="center"
                    onChange={handleInput}
                    required
                  >
                    <option value="">Select</option>
                    {(values.appointment.toString() === "checkup") &&
                      (centers.map((item,index)=>(
                        <option key={index}>{item.centername}</option>
                      )))
                    }
                    {(values.appointment.toString() === "tests") &&
                      (labs.map((item,index)=>(
                        <option key={index}>{item.labname}</option>
                      )))
                    }
                  </select>
                </div>
              </div>
              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="date"
                >
                  Date
                </label>
                <div className="col-sm-8">
                  <input
                    type="date"
                    placeholder="Date"
                    className="col-xs-10 col-sm-5 form-control"
                    id="date"
                    name="date"
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>

              <div className="form-group d-md-flex">
                <label
                  className="col-sm-4 text-md-end text-primary"
                  htmlFor="timing"
                >
                  {" "}
                  Time
                </label>
                <div className="col-sm-8">
                  <select
                    className="col-xs-10 col-sm-5 form-select"
                    id="timing"
                    name="timing"
                    onChange={handleInput}
                    required
                  >
                    <option value="">Select Time</option>
                    <option value="12:00AM">12:00 AM</option>
                    <option value="01:00AM">01:00 AM</option>
                    <option value="02:00AM">02:00 AM</option>
                    <option value="03:00AM">03:00 AM</option>
                    <option value="04:00AM">04:00 AM</option>
                    <option value="05:00AM">05:00 AM</option>
                    <option value="06:00AM">06:00 AM</option>
                    <option value="07:00AM">07:00 AM</option>
                    <option value="08:00AM">08:00 AM</option>
                    <option value="09:00AM">09:00 AM</option>
                    <option value="10:00AM">10:00 AM</option>
                    <option value="11:00AM">11:00 AM</option>
                  </select>
                </div>
              </div>

              <div className="text-center">
                <div className="col-md-offset-3">
                  <button
                    className="btn btn-success"
                    type="submit"
                    id="btn-save"
                    name="btn-save"
                  >
                    <i className="bi bi-save2-fill"></i>&nbsp; Save
                  </button>
                  &nbsp; &nbsp;
                  <button className="btn btn-danger" type="reset">
                    <i className="bi bi-trash-fill"></i>&nbsp; Cancel
                  </button>
                </div>
              </div>
            </form>
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

export default Addappointment;
