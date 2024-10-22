// import React, { useState } from 'react';
import "./index.css"
import { ReactComponent as Waves } from "./images/wave-haikei.svg"

export default function Home() {
    return (<>
        <section className="sides-section">
            <div className="sides-content">
                <h1>Join for a Greener Tomorrow</h1>
                <p>BackToNature is your platform to unite with others in promoting environmental activism and raising awareness. Together, we can take meaningful steps to protect and restore the planet.</p>
            </div>
            <div className="semicircle"></div>
            <Waves className="curve-svg"/>
            <div className="sides-bg"></div>
        </section>
    </>);
}