import React from 'react'
import { Link } from 'react-router-dom'
import auto3 from '../../logos/auto3.jpg'
import "./main.css"


const MainBox = ({car}) => {
    return (
        <div className="mainBox1">
            <div className="card_container">
                <div className="img_container">
                    <img src={car.I} alt="" />
                </div>
                <div className="card_content">
                    <div className="card_title">
                        <h3>m</h3>
                    </div>
                    <div className="card_body">
                        <p></p>
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
