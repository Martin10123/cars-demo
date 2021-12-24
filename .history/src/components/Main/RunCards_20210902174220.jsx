import React from 'react'
import cars from '../../Data'
import MainBox from './Main'

const RunCards = () => {
    return (
        <>
            {cars.map((car) => { 
                return <MainBox key={car.name} car={car} />
            })}
        </>
    )
}

export default RunCards
