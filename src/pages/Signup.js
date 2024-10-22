import React, { useState } from 'react';
import { useAuth } from '../AuthProvider';
import { loginApi, signupApi } from '../api';
import "./index.css"

export default function Signup() {
    const {login} = useAuth();
    const [formData, setFormData] = useState({ // temporarily saving the values user enters
        username: '',
        password: '',
        passwordConf: '',
    });
    
    const [errors, setErrors] = useState({}); // used to display list of errors
    const [submitted, setSubmitted] = useState(false); // see if user has submitted at least once
    
    const handleChange = (e) => { // everytime user makes changes to one field, this is called
        const { name, value } = e.target;
    
        setFormData({ // update the temporary storage
          ...formData,
          [name]: value,
        });
    
        if (submitted) { // will display errors if submitted 1+ times
          validateField(name, value);
        }
    };

    const validateField = (name, value) => { // checks entered data for one field for errors
        let error = '';
    
        if (name === 'username' && !value) {
          error = 'Username is required.'; // error msgs say what each if statement does
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
    
        setErrors((prevErrors) => ({ // Update error state for the that field
          ...prevErrors,
          [name]: error,
        }));
    };

    const handleSubmit = async (e) => { // called when submit button pressed
        e.preventDefault();
        setSubmitted(true);
    
        const newErrors = validateForm();
    
        if (Object.keys(newErrors).length === 0) { // if no errors, send data to back end
            const result = await signupApi(formData);

            if (result) {
                const id = await loginApi(formData);
                if (id !== 0) {
                    login(id)
                    window.location.href = 'profile';
                }
                else
                    newErrors.submit = 'Something went wrong..';
            }
            else
                newErrors.submit = 'Username is already taken.';
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
        <div className="img-header">
            <img className="overlay-img" src="signup-bg.png" alt=""></img>
            <h1 className="overlay-header">Signup</h1>
        </div>

        <form onSubmit={handleSubmit}>
            <div className="form-single-row">
                {errors.submit && (
                    <span className="error-msg">{errors.submit}</span>
                )}
            </div>
            <div className="form-single-row">
                <div className="form-item-single">
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

            <div className="form-single-row">
                <div className="form-item-single">
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

            <div className="form-single-row">
                <div className="form-item-single">
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
            <div className="form-submit-row centered">
                <input type="submit" value="Signup"></input>
            </div>
        </form>
    </>);
}