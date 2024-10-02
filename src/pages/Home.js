// import React, { useState } from 'react';
import "./index.css"
import { ReactComponent as Waves } from "./wave-haikei.svg"

export default function Home() {
    return (<>
        <section class="hero-section">
            <div class="hero-content">
                <h1>Back to Nature</h1>
                <p>Welcome to the homepage...</p>
            </div>
            <Waves className="curve-svg"/>
            <div class="hero-bg"></div>
        </section>
    </>);
}