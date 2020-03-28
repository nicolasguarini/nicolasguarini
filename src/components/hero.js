import React from 'react'

const Hero = (props) => (
    <>
    <div className="hero">
        <div className="header">
            <h1 className="line anim-typewriter">{props.text}</h1>
        </div>  
    </div>

    <div className="scroll-down"></div>
    </>
)

export default Hero