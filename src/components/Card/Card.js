import React from 'react'
import './Card.css'

const Card = ( {deleteTrick, stance, trickName, obstacle, tutorial, id} ) => {
    return (
        <div className="card">
            <p className={id}>
                {trickName}
                <br></br>
                <br></br>
                Obstacle: {obstacle}
                <br></br>
                <br></br>
                Link to Tutorial:
                <br></br>
                {tutorial}
            </p>
            <button onClick={() => deleteTrick(id)} className='delete'>DELETE</button>
        </div>
    )
}

export default Card