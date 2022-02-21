import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import "./CSS/Login.css"

export const Login = () => {
    const navigate = useNavigate();
    const [list, setList] = useState([]);
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const { setIsLoggedIn } = useContext(AuthContext);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        fetch("http://localhost:3000/cred", {
            method: "GET",
            headers: {
                "content-type": "application/json",
            }
        }).then((r) => r.json()
        ).then((d) => {
            setList(d);
        })
    }

    console.log(list)
    const onChangeUser = (e) => {
        let { value } = e.currentTarget;
        setUser(value)
    }

    const onChangePass = (e) => {
        let { value } = e.currentTarget;
        setPass(value)
    }

    const onsubmit = () => {
        list.map(item => {
            if (item.user === user && item.pass === pass) {
                console.log("success")
                setIsLoggedIn(true)
            }
            else {
                setIsLoggedIn(false)
                console.log("fail");
            }
        })
    }
    return (
        <div className='loginForm'>
            <div className='login'>
                <p className='title'>Sign In Form</p>
                <div className='inputTags'>
                    <label htmlFor="userId">User Id:</label>
                    <input type="text" id='userId' value={user} onChange={onChangeUser} placeholder='Enter your user id' className='input' />
                    <label htmlFor="pass">Password:</label>
                    <input type="text" id='pass' value={pass} onChange={onChangePass} placeholder='Enter your password' className='input' />
                </div>
                <button onClick={() => onsubmit()} className="btn">Sign In</button>
                <p>Don't have an account <span className='link' onClick={() => navigate("/signup")}>Sign Up</span></p>
            </div>
        </div>
    )
}
