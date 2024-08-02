import { useState, useEffect } from "react"
import { getAppointments, postAppointment } from './api/apiCalls';
import './App.css';
import Form from './Components/Form/Form'
import Appointments from './Components/Appointments/Appointments'

function App() {
  return (
    <div className="App">
     <h1>Appointments!</h1>
     <Form />
     <Appointments />
    </div>
  );
}

export default App;
