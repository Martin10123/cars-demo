import React from 'react'
import cars from '../../Data'
import MainBox from './Main'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
