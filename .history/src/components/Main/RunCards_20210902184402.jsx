import React from 'react'
import cars from '../../Data'
import MainBox from './Main'

const RunCards = () => {
    return (
        <div></div>
        <div className="outside_box_card">
            {cars.map((car) => { 
                return <MainBox key={car.name} car={car} />
            })}
        </div>
    )
}

export default RunCards