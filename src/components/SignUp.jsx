import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import "./CSS/SigUp.css"

export const SignUp = () => {
    let navigate = useNavigate();
    const [formData, setFormData] = useState({});

    const onChangeInput = (e) => {
        let { name, value } = e.currentTarget;
        console.log(name, value)
        setFormData({
            ...formData,
            [name]: value,
            id: v4(),
        })
    }

    const handleSubmit = () => {
        fetch("http://localhost:3000/cred", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then((r) => r.json()
        ).then((d) => {
            console.log(d)
            navigate("/login")
        })
    }
    return (
        <div className='signUpForm'>
            <div className='signUp'>
                <p className='title'>Sign In Form</p>
                <div className='inputTags'>
                    <label htmlFor="userId">Enter your user Id:</label>
                    <input type="text" id='userId' name='user' value={formData.user} onChange={onChangeInput} className='input' />
                    <label htmlFor="pass">Enter your password:</label>
                    <input type="text" id='pass' name='pass' value={formData.pass} onChange={onChangeInput} className='input' />
                </div>
                <button onClick={() => handleSubmit()} className="btn">Register</button>
                <p>Already have an account <span className='link' onClick={() => navigate("/login")}>Sign In</span></p>
            </div>
        </div>
    )
}
