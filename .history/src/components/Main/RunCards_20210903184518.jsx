import React from 'react'
import cars from '../../Data'
import MainBox from './Main'


const RunCards = () => {
    return (
        <div className="container_box_card">
            <div className="outside_box_card">
                {cars.map((car) => { 
                    return <MainBox key={car.name} car={car} />
                })}
            </div>
        </div>
    )
}

export default RunCards
