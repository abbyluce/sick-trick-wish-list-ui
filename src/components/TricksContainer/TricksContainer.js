import React from 'react'
import Card from '../Card/Card'
import './TricksContainer.css'

const TricksContainer = ( {tricks, deleteTrick} ) => {
    const trickCards = tricks.map(trick => {
        return <Card 
            stance={trick.stance} 
            trickName={trick.name} 
            obstacle={trick.obstacle}
            tutorial={trick.tutorial}
            id={trick.id}
            key={trick.id}
            deleteTrick={deleteTrick}
            />
    })

    return (
        <div className="trick-container">
            {trickCards}
        </div>
    )

}

export default TricksContainer