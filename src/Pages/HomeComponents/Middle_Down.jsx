import React from 'react'
import './Middle_Down.css'
import img2 from './imgs/img2.jpg'

function Middle_Down() {
    return (
        <>
            <div className="container2">

                <div className="details">
                    <img src={img2} alt="Failed to reload" id='img2' />
                    <h1 id='Mcomsats'>Comsats University</h1>
                    <p id='Sahiwal1'>Sahiwal Campus</p>
                    <p id='Deatials1'>Briefly introduce yourself and share something interesting</p>
                    <p id='Deatials2'>with website visitors. Double click to edit the text.</p>

                    <button id='btn1'>About Me</button>
                </div>
            </div>
        </>
    )
}

export default Middle_Down
