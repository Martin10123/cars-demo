import React from 'react'
import { Link } from 'react-router-dom'
import "./main.css"


const MainBox = ({car}) => {
    return (
        <div className="mainBox1">
            <div className="card_container">
                <div className="img_container">
                    <img src={car.Img} alt="" />
                </div>
                <div className="card_content">
                    <div className="card_title">
                        <h3>{car.Nombre}</h3>
                    </div>
                    <div className="card_body">
                        <p>{car.precio}</p>
                    </div>
                </div>
                <div className="btn_view">
                    <button>
                        <Link to="/">View more</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MainBox
