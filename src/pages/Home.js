// import React, { useState } from 'react';
import "./index.css"
import { ReactComponent as Waves } from "./images/wave-haikei.svg"

export default function Home() {
    return (<>
        <section class="sides-section">
            <div class="sides-content">
                <h1>Back to Nature</h1>
                <p>Welcome to the homepage...</p>
            </div>
            <Waves className="curve-svg"/>
            <div class="sides-bg"></div>
        </section>
    </>);
}