import "./index.css"
import React, { useState, useEffect } from 'react';
import { editProfileApi, getAccountData } from '../api';
import { useAuth } from '../AuthProvider'

export default function EditProfile() {
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ // temporary storage
        id: '',
        username: '',
        password: '',
        passwordConf: '',
    });
    const [loadingPage, setLoadingPage] = useState(true);
    const { userId, loading } = useAuth();

    useEffect(() => {
        async function fetchData() {
            try {
                const storedData = await getAccountData(userId);

                if (storedData) {
                    setFormData({
                        ...storedData,
                        id: userId
                    });
                }
                else {
                    console.error("Failed to fetch data");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoadingPage(false);
            }
        }
        
        fetchData();
    }, [userId]);

    if (loadingPage || loading) {
        return <p>Loading...</p>; // Display this while fetching data
    }

    if (!formData) {
        return <p>No data found.</p>; // Display this if there's no data
    }
    
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

    const handleSubmit = async (e) => { // called when submitting
        e.preventDefault();
        setSubmitted(true);
    
        const newErrors = validateForm();
    
        if (Object.keys(newErrors).length === 0) { // if no errors, send data to back end
            const result = await editProfileApi(formData);
            if (result)
                window.location.href = '/profile';
            else
                newErrors.submit = 'Change your username or password.';
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
            <img className="overlay-img" src="editprofile-bg.png" alt=""></img>
            <h1 className="overlay-header">Edit Profile</h1>
        </div>

        <form onSubmit={handleSubmit}>
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
                        defaultValue={formData.passwordConf}
                        onChange={handleChange}
                    />
                </div>
                {errors.passwordConf && (
                    <span className="error-msg">{errors.passwordConf}</span>
                )}
            </div>
            <div className="form-submit-row centered">
                <input type="submit" value="Update"></input>
            </div>
        </form>
    </>);
}