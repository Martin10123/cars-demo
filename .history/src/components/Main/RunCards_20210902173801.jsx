import React from 'react'
import cars from '../../Data'
// import MainBox from './Main'

const RunCards = () => {
    return (
        <>
        <div>
            {cars.map((car) => {
                // return <MainBox key={car.name} car={car} />
                return log(car)
            })}
        </div>
        </>
    )
}

export default RunCards
