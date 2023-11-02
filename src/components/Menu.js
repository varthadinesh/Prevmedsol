import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <div
        className="accordion accordion-flush"
        id="accordionFlushExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <Link
              className="accordion-button collapsed text-decoration-none text-dark"
              to='/'
            >
              <div>
                <i className="bi bi-speedometer"></i>
                <span> Dashboard</span>
              </div>
            </Link>
          </h2>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <div>
                <i className="bi bi-buildings-fill"></i>
                <span> Centers</span>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body p-0">
              <ul className="list-group">
                <li className="list-group-item"><Link to='/addcenter' className="text-decoration-none text-dark">Add Center</Link></li>
                <li className="list-group-item"><Link to='/addlab' className="text-decoration-none text-dark">Add Lab</Link></li>
                <li className="list-group-item"><Link to='/addPatient' className="text-decoration-none text-dark">Manage Centers</Link></li>
                <li className="list-group-item"><Link to='/addPatient' className="text-decoration-none text-dark">Manage Labs</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <div>
                <i className="bi bi-person-fill"></i>
                <span> Users</span>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body p-0">
              <ul className="list-group">
                <li className="list-group-item"><Link to='/addDoctor' className="text-decoration-none text-dark">Add Doctor</Link></li>
                <li className="list-group-item"><Link to='/addPatient' className="text-decoration-none text-dark">Add Patient</Link></li>
                <li className="list-group-item"><Link to='/addlabagent' className="text-decoration-none text-dark">Add Lab Agent</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              <div>
                <i className="bi bi-calendar2-week-fill"></i>
                <span> Appointments</span>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body p-0">
              <ul className="list-group">
                <li className="list-group-item"><Link to='/addappointment' className="text-decoration-none text-dark">Add Appointment</Link></li>
                <li className="list-group-item"><Link to='/addPatient' className="text-decoration-none text-dark">Patient Appointment</Link></li>
                <li className="list-group-item"><Link to='/addPatient' className="text-decoration-none text-dark">Lab Appointment</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              <div>
                <i className="bi bi-geo-alt-fill"></i>
                <span> Locations</span>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFive"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body p-0">
              <ul className="list-group">
                <li className="list-group-item"><Link to='/addPatient' className="text-decoration-none text-dark">Manage State</Link></li>
                <li className="list-group-item"><Link to='/addPatient' className="text-decoration-none text-dark">Manage City</Link></li>
                <li className="list-group-item"><Link to='/addPatient' className="text-decoration-none text-dark">Manage Location</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
              aria-expanded="false"
              aria-controls="flush-collapseSix"
            >
              <div>
                <i className="bi bi-currency-exchange"></i>
                <span> packages</span>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingSix"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body p-0">
              <ul className="list-group">
                <li className="list-group-item"><Link to='/addPatient' className="text-decoration-none text-dark">Manage Package</Link></li>
                <li className="list-group-item"><Link to='/addPatient' className="text-decoration-none text-dark">Add Package</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingSeven">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSeven"
              aria-expanded="false"
              aria-controls="flush-collapseSeven"
            >
              <div>
                <i className="bi bi-credit-card-2-back-fill"></i>
                <span> Payments</span>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingSeven"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body p-0">
              <ul className="list-group">
                <li className="list-group-item"><Link to='/addPatient' className="text-decoration-none text-dark">View Payments</Link></li>
                <li className="list-group-item"><Link to='/addPatient' className="text-decoration-none text-dark">Invoice</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingEight">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseEight"
              aria-expanded="false"
              aria-controls="flush-collapseEight"
            >
              <div>
                <i className="bi bi-people-fill"></i>
                <span> Accounts</span>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingEight"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body p-0">
              <ul className="list-group">
                <li className="list-group-item"><Link to='/addPatient' className="text-decoration-none text-dark">Site Managers</Link></li>
                <li className="list-group-item"><Link to='/addPatient' className="text-decoration-none text-dark">Patients</Link></li>
                <li className="list-group-item"><Link to='/addPatient' className="text-decoration-none text-dark">Doctors</Link></li>
                <li className="list-group-item"><Link to='/addPatient' className="text-decoration-none text-dark">Lab Agents</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
