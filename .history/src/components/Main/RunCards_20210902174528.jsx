import React from 'react'
import cars from '../../Data'
import MainBox from './Main'

const RunCards = () => {
    return (
        <div className="container_cards">
            {cars.map((car) => { 
                return <MainBox key={car.name} car={car} />
            })}
        </div>
    )
}

export default RunCards
