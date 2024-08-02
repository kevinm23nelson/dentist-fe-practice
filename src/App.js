import { useState, useEffect } from "react"
import { getAppointments, postAppointment } from './api/apiCalls';
import './App.css';
import Form from './Components/Form/Form'
import Appointments from './Components/Appointments/Appointments'


function App() {
  const [appointments, setAppointment] = useState([])

  useEffect(() => {
    getAppointments().then(fetchedAppointments => {
      if (fetchedAppointments) {
        setAppointment(fetchedAppointments)
      }
    })
  }, [])
  return (
    <div className="App">
     <h1>Appointments!</h1>
     <Form />
     <Appointments appointments={appointments}/>
    </div>
  );
}

export default App;
