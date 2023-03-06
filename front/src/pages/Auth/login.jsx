import React, { useState } from "react"
import Logo from "../../img/logo.png";
// import "./login.css"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        // console.log("User->" + user.password)
        axios.post("http://localhost:4000/login", user)
            .then(res => {
                alert(res.data.message)
                // console.log("->" + user.email) 
                // setLoginUser(res.data.user)
                navigate("/home", {state:{email:user.email}})
                
            })
    }

    return (

        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h1>VeteranMeet</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>

            <div className="a-right">
                <div>
                    <form className="infoForm authForm">
                        <h1>Login</h1>

                        <div><input className="infoInput" type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input></div>
                        <div><input className="infoInput" type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input></div>
                        <div>
                            <span style={{ fontSize: "12px" }}>Don't have an account</span>
                            <a href="/signup" style={{ fontSize: "12px" }}>
                                Sign up
                            </a>
                        </div>
                    </form>
                    <div>
                        <button className="button infoButton" onClick={login}>Login</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
