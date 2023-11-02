import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddDoctor from './components/users/AddDoctor';
import Addpatient from './components/users/AddPatient';
import DashboardPage from './components/Dashboard';
import Navbar from './components/Navbar';
import Addlab from './components/centers/AddLab';
import Addcenter from './components/centers/AddCenter';
import Addappointment from './components/appointments/AddAppointment';
import Addlabagent from './components/users/AddLabagent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<DashboardPage/>}></Route>
          <Route path='addDoctor' element={<AddDoctor />}></Route>
          <Route path='addPatient' element={<Addpatient />}></Route>
          <Route path='addlabagent' element={<Addlabagent />}></Route>
          <Route path='addlab' element={<Addlab/>}></Route>
          <Route path='addcenter' element={<Addcenter/>}></Route>
          <Route path='addappointment' element={<Addappointment/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
