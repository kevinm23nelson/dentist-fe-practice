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

  function addAppointment(newAppointment) {
    postAppointment(newAppointment)
    .then(postedAppointment => {
      setAppointment([...appointments, postedAppointment])
    })
    .catch(error => {
      console.log('Error posting appointment')
    })
  }

  return (
    <div className="App">
     <h1>Appointments!</h1>
     <Form addAppointment={addAppointment}/>
     <Appointments appointments={appointments}/>
    </div>
  );
}

export default App;
