import './Card.css'

const Card = ({ pet, date, id, time, deleteAppointment }) => {
    return (
        <div className='appointment-card'>
            <h3>{pet}</h3>
            <p>{date}</p>
            <p>{time}</p>
            <button onClick={() => deleteAppointment(id)}>🗑️</button>
        </div>
    )
}

export default Card