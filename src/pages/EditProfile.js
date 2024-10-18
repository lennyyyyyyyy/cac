// TOOD: Link this page to the Authorized Route <-------------------------------------------------------

import React, { useState } from 'react';
import "./index.css"

export default function EditProfile() {
    // TODO: Get the actual user data from backend
    const [formData, setFormData] = useState({ // temporary storage
        username: 'Test User',
        password: 'qwerty1',
        passwordConf: '',
    });
    
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
    
        setFormData({ // update the temporary storage
          ...formData,
          [name]: value,
        });
    
        if (submitted) { // will display errors
          validateField(name, value);
        }
    };

    const validateField = (name, value) => { // checks entered data for 1 field
        let error = '';
    
        if (name === 'username' && !value) {
          error = 'Username is required.'; // error msgs
        }
    
        if (name === 'password') {
          if (!value) {
            error = 'Password is required';
          } else if (value.length < 5 || !/\d/.test(value) || !/[a-zA-Z]/.test(value)) {
            error = 'Password did not meet requirements.';
          }
        }
    
        if (name === 'passwordConf' && value !== formData.password) {
          error = 'Passwords do not match.';
        }
    
        setErrors((prevErrors) => ({ // Update error for the field
          ...prevErrors,
          [name]: error,
        }));
    };

    const handleSubmit = (e) => { // called when submitting
        e.preventDefault();
        setSubmitted(true);
    
        const newErrors = validateForm();
    
        if (Object.keys(newErrors).length === 0) { // if no errors, send data to back end
          // TODO: Send updating info to back end and redirect <-------------------------------------------
        }
    };
    
    const validateForm = () => { // checks the entire form
        const newErrors = {};
    
        if (!formData.username) { // error msgs say what these do
          newErrors.username = 'Username is required.';
        }

        if (!formData.password) {
          newErrors.password = 'Password is required.';
        }
        else if (formData.password.length < 5 || !/\d/.test(formData.password) || !/[a-zA-Z]/.test(formData.password)) {
          newErrors.password = 'Password does not meet requirements.';
        }

        if (!formData.passwordConf) {
            newErrors.passwordConf = 'Password confirmation is required.'
        }
        else if (formData.passwordConf !== formData.password) {
          newErrors.passwordConf = 'Passwords do not match.';
        }
    
        setErrors(newErrors);
        return newErrors;
    };

    // the rest is just html
    return (<>
        <div class="img-header">
            <img class="overlay-img" src="editprofile-bg.png" alt=""></img>
            <h1 class="overlay-header">Edit Profile</h1>
        </div>

        <form onSubmit={handleSubmit}>
            <div class="form-single-row">
                <div class="form-item-single">
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                {errors.username && (
                    <span className="error-msg">{errors.username}</span>
                )}
            </div>

            <div class="form-single-row">
                <div class="form-item-single">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                {errors.password && (
                    <span className="error-msg">{errors.password}</span>
                )}
            </div>
            <div className="form-single-row">
                <div className="form-item-single">
                    <span className="form-paragraph">
                        <p className="form-info">Password must consist of</p>
                        <ul className="form-list">
                            <li className="form-info">At least 1 number</li>
                            <li className="form-info">At least 1 letter</li>
                            <li className="form-info">At least 5 characters</li>
                        </ul>
                    </span>
                </div>
            </div>

            <div class="form-single-row">
                <div class="form-item-single">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="passwordConf"
                        value={formData.passwordConf}
                        onChange={handleChange}
                    />
                </div>
                {errors.passwordConf && (
                    <span className="error-msg">{errors.passwordConf}</span>
                )}
            </div>
            <div class="form-submit-row centered">
                <input type="submit" value="Update"></input>
            </div>
        </form>
    </>);
}