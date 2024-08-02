import React from 'react'
import Card from "../Card/Card"
import './Appointments.css'

function Appointments({ appointments, deleteAppointment }) {
    const appointmentCards = appointments.map(appointment => {
        return (
            <Card
                pet={appointment.pet}
                date={appointment.date}
                id={appointment.id}
                key={appointment.id}
                deleteAppointment={deleteAppointment}
            />
        )
    })
    return (
        <div className='appointments-container'>
            {appointmentCards}
        </div>
    )
}

export default Appointments