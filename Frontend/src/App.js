import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Adminaccount from './Admincomponents/components/settings/Adminaccount';
import Adminprofile from './Admincomponents/components/settings/Adminprofile';
import AddSpecialization from './Admincomponents/components/users/AddSpecialization';
import AddDoctor from './Admincomponents/components/users/AddDoctor';
import Addpatient from './Admincomponents/components/users/AddPatient';
import DashboardPage from './Admincomponents/components/Dashboard';
import Addlab from './Admincomponents/components/centers/AddLab';
import Addcenter from './Admincomponents/components/centers/AddCenter';
import Addappointment from './Admincomponents/components/appointments/AddAppointment';
import Addlabagent from './Admincomponents/components/users/AddLabagent';
import Editcenter from './Admincomponents/components/centers/Editcenter';
import Editlab from './Admincomponents/components/centers/Editlab';
import Managecenters from './Admincomponents/components/centers/ManageCenters';
import Managelabs from './Admincomponents/components/centers/Managelabs';
import Addlocation from './Admincomponents/components/locations/Addlocation';
import Managestate from './Admincomponents/components/locations/ManageState';
import Managecity from './Admincomponents/components/locations/ManageCity';
import Managelocation from './Admincomponents/components/locations/Managelocation';
import EditPackages from './Admincomponents/components/packages/Editpackages';
import Managepackage from './Admincomponents/components/packages/ManagePackage';
import Addpackage from './Admincomponents/components/packages/Addpackage';
import Patientappointment from './Admincomponents/components/appointments/PatientAppointment';
import Patientpreviousappointment from './Admincomponents/components/appointments/PatientPreviousAppointment';
import Labappointment from './Admincomponents/components/appointments/LabAppointment';
import Labpreviousappointment from './Admincomponents/components/appointments/LabPreviousAppointments';
import Register from './Admincomponents/components/loginpages/Register';
import Adminpage from './Admincomponents/components/loginpages/Adminpage';
import Frontoffice from './Admincomponents/components/loginpages/Frontoffice';
import Doctor from './Admincomponents/components/loginpages/Doctor';
import Patient from './Admincomponents/components/loginpages/Patient';
import Lab from './Admincomponents/components/loginpages/Lab';
import Superadminpage from './Admincomponents/components/loginpages/Superadminpage';
import Doctors from './Admincomponents/components/accounts/Doctors';
import Editdoctor from './Admincomponents/components/accounts/Editdoctor';
import Patients from './Admincomponents/components/accounts/Patients';
import Editpatient from './Admincomponents/components/accounts/Editpatient';
import Labagents from './Admincomponents/components/accounts/Labagents';
import Editlabagent from './Admincomponents/components/accounts/Editlabagent';
import Sitemanagers from './Admincomponents/components/accounts/Sitemanagers';
import Invoice from './Admincomponents/components/payments/Invoice';
import Viewpayments from './Admincomponents/components/payments/Viewpayments';
import Home from './Admincomponents/components/Home';
import Plans from './Admincomponents/components/plans';

import Viewmyappointment from './Patientcomponents/components/appointments/Viewmyappointment';
import Viewmypreviousappointment from './Patientcomponents/components/appointments/Viewmypreviousappointments';
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
import Doctorpreviousappointment from './Doctorcomponents/components/appointments/Viewmypreviousappointments';
import Doctormessage from './Doctorcomponents/components/messages/Composemessage';
import Doctorinbox from './Doctorcomponents/components/messages/Inbox';
import DoctorSentmessage from './Doctorcomponents/components/messages/Sentmessage';
import Doctoraccount from './Doctorcomponents/components/settings/Myaccount';
import Doctorprofile from './Doctorcomponents/components/settings/Myprofile';

import Labagentappointment from './Labagentcomponents/components/appointments/Viewmyappointment';
import Labagentpreviousappointment from './Labagentcomponents/components/appointments/Viewmypreviousappointments';
import Labagentmessage from './Labagentcomponents/components/messages/Composemessage';
import Labagentinbox from './Labagentcomponents/components/messages/Inbox';
import LabagentSentmessage from './Labagentcomponents/components/messages/Sentmessage';
import Labagentaccount from './Labagentcomponents/components/settings/Myaccount';
import Labagentprofile from './Labagentcomponents/components/settings/Myprofile';

import Superadmindashboard from './Superadmincomponents/components/dashboard/Superadmindashboard'
import History1 from './Superadmincomponents/components/dashboard/History1';
import History2 from './Superadmincomponents/components/dashboard/History2';
import Medications from './Superadmincomponents/components/dashboard/Medications';
import Reviewsystem1 from './Superadmincomponents/components/dashboard/Reviewsystem1';
import Reviewsystem2 from './Superadmincomponents/components/dashboard/Reviewsystem2';
import Reviewsystem3 from './Superadmincomponents/components/dashboard/Reviewsystem3';
import PhysicalExam1 from './Superadmincomponents/components/dashboard/Physicalexam1';
import PhysicalExam2 from './Superadmincomponents/components/dashboard/Physicalexam2';
import Assessments from './Superadmincomponents/components/dashboard/Assessments';
import Superadminmessage from './Superadmincomponents/components/messages/Composemessage';
import Superadmininbox from './Superadmincomponents/components/messages/Inbox';
import SuperadminSentmessage from './Superadmincomponents/components/messages/Sentmessage';
import Superadminaccount from './Superadmincomponents/components/settings/Myaccount';
import Superadminprofile from './Superadmincomponents/components/settings/Myprofile';

import Scrolltotop from './Admincomponents/components/Scrolltotop';
import Notfound from './Notfound';

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
          <Route path='adminprofile' element={<Adminprofile/>}></Route>
          <Route path='adminaccount' element={<Adminaccount/>}></Route>
          <Route path='addspecialization' element={<AddSpecialization />}></Route>
          <Route path='adddoctor' element={<AddDoctor />}></Route>
          <Route path='addpatient' element={<Addpatient />}></Route>
          <Route path='addlabagent' element={<Addlabagent />}></Route>
          <Route path='addlab' element={<Addlab/>}></Route>
          <Route path='addcenter' element={<Addcenter/>}></Route>
          <Route path='editcenter'>
            <Route path=':id' element={<Editcenter />}></Route>
          </Route>
          <Route path='managecenters' element={<Managecenters/>}></Route>
          <Route path='editlab'>
            <Route path=':id' element={<Editlab />}></Route>
          </Route>
          <Route path='managelabs' element={<Managelabs/>}></Route>
          <Route path='addappointment' element={<Addappointment/>}></Route>
          <Route path='patientupcomingappointment' element={<Patientappointment/>}></Route>
          <Route path='patientpreviousappointment' element={<Patientpreviousappointment/>}></Route>
          <Route path='labupcomingappointment' element={<Labappointment/>}></Route>
          <Route path='labpreviousappointment' element={<Labpreviousappointment/>}></Route>
          <Route path='addlocation' element={<Addlocation/>}></Route>
          <Route path='managestate' element={<Managestate/>}></Route>
          <Route path='managecity' element={<Managecity/>}></Route>
          <Route path='managelocation' element={<Managelocation/>}></Route>
          <Route path='editpackage'>
            <Route path=':id' element={<EditPackages />}></Route>
          </Route>
          <Route path='managepackage' element={<Managepackage/>}></Route>
          <Route path='addpackage' element={<Addpackage/>}></Route>
          <Route path='doctors' element={<Doctors/>}></Route>
          <Route path='editdoctor'>
            <Route path=':id' element={<Editdoctor />}></Route>
          </Route>
          <Route path='patients' element={<Patients/>}></Route>
          <Route path='editpatient'>
            <Route path=':id' element={<Editpatient/>}></Route>
          </Route>
          <Route path='labagents' element={<Labagents/>}></Route>
          <Route path='editlabagent'>
            <Route path=':id' element={<Editlabagent/>}></Route>
          </Route>
          <Route path='sitemanagers' element={<Sitemanagers/>}></Route>
          <Route path='invoice' element={<Invoice/>}></Route>
          <Route path='viewpayments' element={<Viewpayments/>}></Route>

          {/* Patient components routes */}
          <Route path='upcomingappointments' element={<Viewmyappointment/>}></Route>
          <Route path='previousappointments' element={<Viewmypreviousappointment/>}></Route>
          <Route path='booknewappointment' element={<Booknewappointment/>}></Route>
          <Route path='composemessage' element={<Composemessage/>}></Route>
          <Route path='inbox' element={<Inbox/>}></Route>
          <Route path='sentmessage' element={<Sentmessage/>}></Route>
          <Route path='changepassword' element={<Myaccount/>}></Route>
          <Route path='editprofile' element={<Myprofile/>}></Route>
          <Route path='patientinvoice' element={<Pinvoice/>}></Route>

          {/* Doctor components routes */}
          <Route path='doctorappointments' element={<Doctorappointment/>}></Route>
          <Route path='doctorpreviousappointments' element={<Doctorpreviousappointment/>}></Route> 
          <Route path='doctormessage' element={<Doctormessage/>}></Route>
          <Route path='doctorinbox' element={<Doctorinbox/>}></Route>
          <Route path='doctorsentmessage' element={<DoctorSentmessage/>}></Route>
          <Route path='doctoraccount' element={<Doctoraccount/>}></Route>
          <Route path='doctorprofile' element={<Doctorprofile/>}></Route>

          {/* Labagent components routes */}
          <Route path='labagentappointments' element={<Labagentappointment/>}></Route>
          <Route path='labagentpreviousappointments' element={<Labagentpreviousappointment/>}></Route>
          <Route path='labagentmessage' element={<Labagentmessage/>}></Route>
          <Route path='labagentinbox' element={<Labagentinbox/>}></Route>
          <Route path='labagentsentmessage' element={<LabagentSentmessage/>}></Route>
          <Route path='labagentaccount' element={<Labagentaccount/>}></Route>
          <Route path='labagentprofile' element={<Labagentprofile/>}></Route>

          {/* Superadmin components routes */}
          <Route path='superadmindashboard' element={<Superadmindashboard/>}></Route>
          <Route path='/viewemr' >
            <Route path='history1/:id' element={<History1/>}></Route>
            <Route path='history2/:id' element={<History2/>}></Route>
            <Route path='medications/:id' element={<Medications/>}></Route>
            <Route path='reviewsystem1/:id' element={<Reviewsystem1/>}></Route>
            <Route path='reviewsystem2/:id' element={<Reviewsystem2/>}></Route>
            <Route path='reviewsystem3/:id' element={<Reviewsystem3/>}></Route>
            <Route path='physicalexam1/:id' element={<PhysicalExam1/>}></Route>
            <Route path='physicalexam2/:id' element={<PhysicalExam2/>}></Route>
            <Route path='assessments/:id' element={<Assessments/>}></Route>
          </Route>
          <Route path='superadminmessage' element={<Superadminmessage />}></Route>
          <Route path='superadmininbox' element={<Superadmininbox />}></Route>
          <Route path='superadminsentmessage' element={<SuperadminSentmessage/>}></Route>
          <Route path='superadminaccount' element={<Superadminaccount/>}></Route>
          <Route path='superadminprofile' element={<Superadminprofile/>}></Route>

          <Route path='*' element={<Notfound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
