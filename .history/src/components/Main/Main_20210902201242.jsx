import React from 'react'
import { Link } from 'react-router-dom'
import "./main.css"


const MainBox = ({car}) => {
    return (
        <div className="mainBox1">
            <div className="card_container">
                <Link to="/d">
                <div className="img_container">
                    <img src={car.Img} alt="" />
                </div>
                </Link>
                <div className="card_content">
                <Link to="/d">
                    <div className="card_title">
                        <h3>{car.Nombre}</h3>
                    </div>
                    </Link>        
                    <div className="card_body">
                        <p>{car.Precio}</p>
                    </div>
                    <div className="card_body">
                        <p>{car.Description}</p>
                    </div>
                </div>
                <div className="btn_view">
                    <button>
                        <Link to="/d">View more</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MainBox
