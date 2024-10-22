import React, { useState } from 'react';
import { useAuth } from '../AuthProvider';
import { loginApi } from '../api';
import "./index.css"

export default function Login() {
    const {login} = useAuth();
    const [formData, setFormData] = useState({ // temporary storage for entered data
        username: '',
        password: ''
    });
    
    const [errors, setErrors] = useState({}); // displays errors
    const [submitted, setSubmitted] = useState(false);
    
    const handleChange = (e) => { // called when one field is changed
        const { name, value } = e.target;
    
        setFormData({ // updates temporary storage
          ...formData,
          [name]: value,
        });
    
        if (submitted) {
          validateField(name, value);
        }
    };

    const validateField = (name, value) => { // checks for errors for one field at a time
        let error = '';
    
        if (name === 'username' && !value) {
          error = 'Username is required.';
        }
    
        if (name === 'password' && !value) {
            error = 'Password is required.';
        }
    
        setErrors((prevErrors) => ({ // Update error state for the specific field
          ...prevErrors,
          [name]: error,
        }));
    };

    const handleSubmit = async (e) => { // called when entire form is submitted
        e.preventDefault();
        setSubmitted(true);
    
        const newErrors = validateForm();
    
        if (Object.keys(newErrors).length === 0) { // if no errors, send data to backend
          const result = await loginApi(formData);

          if (result !== 0) {
            login(result);
            window.location.href = '/profile';
          }
          else
            newErrors.submit = 'Username or password is incorrect.';
        }
    };
    
    const validateForm = () => { // checks entire form for errors
        const newErrors = {};
    
        if (!formData.username) {
          newErrors.username = 'Username is required.';
        }

        if (!formData.password) {
          newErrors.password = 'Password is required.';
        }
    
        setErrors(newErrors);
        return newErrors;
    };

    return (<>
        <div className="img-header">
            <img className="overlay-img" src="login-bg.png" alt=""></img>
            <h1 className="overlay-header">Login</h1>
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
            <div className="form-submit-row centered">
                <input type="submit" value="Login"></input>
            </div>
        </form>
    </>);
}