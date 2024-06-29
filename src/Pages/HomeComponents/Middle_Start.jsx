import React from 'react'
import img1 from '../HomeComponents/imgs/img1.jpg'
import './Middle_Start.css';

function Middle_Start() {
  return (
    <>
        <div>
        <img src={img1} alt="Failed to load the image" />
      <div className="container">
      
        <h1 id='welcome'>Welcome</h1>
        <p id='visitors'>Welcome visitors to your site with a short, engaging introduction. Double click to edit and add your own text.</p>
        <button id='btn'>Start Now</button>
      </div>

      </div>
    </>
  )
}

export default Middle_Start
