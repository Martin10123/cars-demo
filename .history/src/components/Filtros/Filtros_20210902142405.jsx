import React, { useState } from 'react'
import './filtros.css'
import cars from '../../Data'

const Filtros = () => {
    const [imgChange, setImgChange] = useState(0)

    const handleChange = () => {
        if(imgChange < 9) {
            setImgChange(imgChange + 1)
        }
    }

    const handleChangeimg = () => {
       if (imgChange !== 0) {
        setImgChange(imgChange - 1) 
       }
    }

    return (
        <div className="header">
        <div className="inside_header">
            <div className="div__images" style={{backgroundImage: `url(${cars[imgChange].img})`}}>
                <button className="btn" onClick={handleChangeimg}>Retroceder</button>
                <button className="btn"onClick={handleChange}>Pasar</button>
            </div>
        </div>
        
        <div className="container_select">
            <select>
                {cars.map((car) => {
                    return <option key={car.Nombre}>{car.Nombre}</option>
                })}
            </select>
            <select>
                {cars.map((car) => {
                    return <option key={car.Nombre}>{car.Año}</option>
                })}
            </select>
            <select>
                {cars.map((car) => {
                    return <option key={car.Nombre}>{car.Marca}</option>
                })}
            </select>
            <select>
                {cars.map((car) => {
                    return <option key={car.Nombre}>{car.Color}</option>
                })}
            </select>
            <select>
                {cars.map((car) => {
                    return <option key={car.Nombre}>{car.Precio}</option>
                })}
            </select>
        </div>
    </div>
    )
}

export default Filtros
