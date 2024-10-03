// import React, { useState } from 'react';
// import { ReactComponent as Waves } from "./wave-haikei.svg"
import "./index.css"

export default function Login() {
    return (<>
        <div class="img-header">
            <img class="overlay-img" src="leaves.png" alt=""></img>
            <h1 class="overlay-header">Login</h1>
        </div>

        <form>
            <div class="form-single-row">
                <div class="form-item-single">
                    <label>Username</label>
                    <input type="text" placeholder="Username"></input>
                </div>
            </div>
            <div class="form-single-row">
                <div class="form-item-single">
                    <label>Password</label>
                    <input type="password" placeholder="Password"></input>
                </div>
            </div>
            <div class="form-single-row centered">
                <input type="submit" value="Login"></input>
            </div>
        </form>
    </>);
}