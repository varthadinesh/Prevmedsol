import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddDoctor from './Admincomponents/components/users/AddDoctor';
import Addpatient from './Admincomponents/components/users/AddPatient';
import DashboardPage from './Admincomponents/components/Dashboard';
import Addlab from './Admincomponents/components/centers/AddLab';
import Addcenter from './Admincomponents/components/centers/AddCenter';
import Addappointment from './Admincomponents/components/appointments/AddAppointment';
import Addlabagent from './Admincomponents/components/users/AddLabagent';
import Editcenter from './Admincomponents/components/centers/Editcenter';
import Managecenters from './Admincomponents/components/centers/ManageCenters';
import Managelabs from './Admincomponents/components/centers/Managelabs';
import Managestate from './Admincomponents/components/locations/ManageState';
import Managecity from './Admincomponents/components/locations/ManageCity';
import Managelocation from './Admincomponents/components/locations/Managelocation';
import Managepackage from './Admincomponents/components/packages/ManagePackage';
import Addpackage from './Admincomponents/components/packages/Addpackage';
import Patientappointment from './Admincomponents/components/appointments/PatientAppointment';
import Labappointment from './Admincomponents/components/appointments/LabAppointment';
import Register from './Admincomponents/components/loginpages/Register';
import Adminpage from './Admincomponents/components/loginpages/Adminpage';
import Frontoffice from './Admincomponents/components/loginpages/Frontoffice';
import Doctor from './Admincomponents/components/loginpages/Doctor';
import Patient from './Admincomponents/components/loginpages/Patient';
import Lab from './Admincomponents/components/loginpages/Lab';
import Superadminpage from './Admincomponents/components/loginpages/Superadminpage';
import Doctors from './Admincomponents/components/accounts/Doctors';
import Patients from './Admincomponents/components/accounts/Patients';
import Labagents from './Admincomponents/components/accounts/Labagents';
import Sitemanagers from './Admincomponents/components/accounts/Sitemanagers';
import Invoice from './Admincomponents/components/payments/Invoice';
import Viewpayments from './Admincomponents/components/payments/Viewpayments';
import Home from './Admincomponents/components/Home';
import Plans from './Admincomponents/components/plans';
import Viewmyappointment from './Patientcomponents/components/appointments/Viewmyappointment';
import Booknewappointment from './Patientcomponents/components/appointments/Booknewappointment';
import Composemessage from './Patientcomponents/components/messages/Composemessage';
import Inbox from './Patientcomponents/components/messages/Inbox';
import Sentmessage from './Patientcomponents/components/messages/Sentmessage';
import Myaccount from './Patientcomponents/components/settings/Myaccount';
import Myprofile from './Patientcomponents/components/settings/Myprofile';
import Pinvoice from './Patientcomponents/components/billing/Invoice';
import Emailverification from './Admincomponents/components/loginpages/Emailverification';
import Forgotpassword from './Admincomponents/components/loginpages/Forgotpassword';

import Doctorappointment from './Doctorcomponents/components/appointments/Viewmyappointment';
import Doctormessage from './Doctorcomponents/components/messages/Composemessage';
import Doctorinbox from './Doctorcomponents/components/messages/Inbox';
import DoctorSentmessage from './Doctorcomponents/components/messages/Sentmessage';
import Doctoraccount from './Doctorcomponents/components/settings/Myaccount';
import Doctorprofile from './Doctorcomponents/components/settings/Myprofile';

import Scrolltotop from './Admincomponents/components/Scrolltotop';

function App() {
  return (
    <div className="App">
      <BrowserRouter  basename="Prevmedsol">
      <Scrolltotop/>
        <Routes>
          {/* Admin components routes */}
          <Route path='/' element={<Home/>}></Route>
          <Route path='plans' element={<Plans/>}></Route>
          <Route path='register' element={<Register/>}></Route>
          <Route path='emailverification' element={<Emailverification/>}></Route>
          <Route path='forgotpassword' element={<Forgotpassword/>}></Route>
          <Route path='adminpage' element={<Adminpage/>}></Route>
          <Route path='frontoffice' element={<Frontoffice/>}></Route>
          <Route path='doctor' element={<Doctor/>}></Route>
          <Route path='patient' element={<Patient/>}></Route>
          <Route path='lab' element={<Lab/>}></Route>
          <Route path='superadminpage' element={<Superadminpage />}></Route>
          <Route path='dashboardPage' element={<DashboardPage/>}></Route>
          <Route path='adddoctor' element={<AddDoctor />}></Route>
          <Route path='addpatient' element={<Addpatient />}></Route>
          <Route path='addlabagent' element={<Addlabagent />}></Route>
          <Route path='addlab' element={<Addlab/>}></Route>
          <Route path='addcenter' element={<Addcenter/>}></Route>
          <Route path='editcenter' element={<Editcenter/>}></Route>
          <Route path='managecenters' element={<Managecenters/>}></Route>
          <Route path='managelabs' element={<Managelabs/>}></Route>
          <Route path='addappointment' element={<Addappointment/>}></Route>
          <Route path='patientappointment' element={<Patientappointment/>}></Route>
          <Route path='labappointment' element={<Labappointment/>}></Route>
          <Route path='managestate' element={<Managestate/>}></Route>
          <Route path='managecity' element={<Managecity/>}></Route>
          <Route path='managelocation' element={<Managelocation/>}></Route>
          <Route path='managepackage' element={<Managepackage/>}></Route>
          <Route path='addpackage' element={<Addpackage/>}></Route>
          <Route path='doctors' element={<Doctors/>}></Route>
          <Route path='patients' element={<Patients/>}></Route>
          <Route path='labagents' element={<Labagents/>}></Route>
          <Route path='sitemanagers' element={<Sitemanagers/>}></Route>
          <Route path='invoice' element={<Invoice/>}></Route>
          <Route path='viewpayments' element={<Viewpayments/>}></Route>

          {/* Patient components routes */}
          <Route path='upcomingappointments' element={<Viewmyappointment/>}></Route>
          <Route path='booknewappointment' element={<Booknewappointment/>}></Route>
          <Route path='composemessage' element={<Composemessage/>}></Route>
          <Route path='inbox' element={<Inbox/>}></Route>
          <Route path='sentmessage' element={<Sentmessage/>}></Route>
          <Route path='changepassword' element={<Myaccount/>}></Route>
          <Route path='editprofile' element={<Myprofile/>}></Route>
          <Route path='patientinvoice' element={<Pinvoice/>}></Route>

          {/* Doctor components routes */}
          <Route path='doctorappointments' element={<Doctorappointment/>}></Route>
          <Route path='doctormessage' element={<Doctormessage/>}></Route>
          <Route path='doctorinbox' element={<Doctorinbox/>}></Route>
          <Route path='doctorsentmessage' element={<DoctorSentmessage/>}></Route>
          <Route path='doctoraccount' element={<Doctoraccount/>}></Route>
          <Route path='doctorprofile' element={<Doctorprofile/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
