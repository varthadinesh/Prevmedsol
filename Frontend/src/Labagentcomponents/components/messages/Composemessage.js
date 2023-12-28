import React, { useState } from "react";
import Navbar from "../Navbar"
import Menu from "../Menu";
import axios from "axios";
import { useData } from "../../../Admincomponents/components/Datacontext";

const Labagentmessage = () => {
  const {labagent}=useData();
  // console.log(doctor);
  let date = new Date().toLocaleDateString("sv");
  let time=new Date().toLocaleTimeString('it-IT');


  const [values, setValues] = useState({
    fromemail:labagent.email,
    toemail: "",
    date:date,
    time:time,
    subject: "",
    message: "",
    status: "unread"
  });

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    console.log(values);
    event.preventDefault();
   
    axios.post("http://localhost:8080/patientsentdata", values)
      .then((res) => {
        if(res.data === "Error"){
          alert('Error while sending mail to Patient. Please try again filling all the fields');
        }
        else{
          alert("Mail sent to Patient successfully");
          window.location.reload(false);
        }

      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    <Navbar/>
    <div>
      <div className="d-flex">
        <div className="col-2 p-0">
          <Menu />
        </div>

        <div className="col-10 p-0">
          <div className="col-md-8 m-5">
            <form action="" method="post" onSubmit={handleSubmit}>
              <div className="form-group row">
                <label className="col-sm-2 fs-6 fw-bold">
                  To
                </label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control mb-2"
                    id="toemail"
                    name="toemail"
                    placeholder="Email"
                    onChange={handleInput}
                    required
                  />
                </div>
              
              </div>
            
              <div className="form-group row">
                <label htmlFor="text" className="col-sm-2 fs-6 fw-bold">
                  Subject
                </label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    placeholder="Type Subject"
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>

              <div className="compose-body">
                <label htmlFor="text" className="fs-6 fw-bold">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  onChange={handleInput}
                  required
                ></textarea>
                <div className="compose-footer p-3">
                  <div className="float-end">
                    <button
                      className="btn btn-success "
                      name="btn-submit"
                      id="btn-submit"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Labagentmessage;