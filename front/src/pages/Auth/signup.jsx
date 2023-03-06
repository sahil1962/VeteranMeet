

import React, { useState } from "react";
import Logo from "../../img/logo.png";
import axios from 'axios';
// import Alert from 'react-bootstrap/Alert';

const SignUp = () => {
    // console.log("Hello : " + value)
    const options = [
        { label: 'IT Engineer', value: 'IT Engineer' },
        { label: 'Teacher', value: 'Teacher' },
        { label: 'Manager', value: 'Manager' },
    ];

    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [gender, setgender] = useState("");

    const [profession, setProfession] = useState("");
    const [password, setpassword] = useState("");
    const [c_password, setc_password] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("fname : " + fname)
        console.log("lname : " + lname)
        console.log("email : " + email)
        console.log("gender : " + gender)
        console.log("Profession : " + profession)
        console.log("password : " + password)
        console.log("c_password : " + c_password)

        const userObject = {
            fname: fname,
            lname: lname,
            email: email,
            gender: gender,
            profession: profession,
            password: password
        };

        if (password === c_password) {
            axios.post('http://localhost:4000/signup', userObject)
                .then(res => console.log(res.data));
            alert("Successfully Registered, Please login now.");
            window.location.href = "/login";
            // clean fields
            setfname("");
            setlname("");
            setemail("");
            setProfession("");
            setpassword("");
            setc_password("");

        }
        else if (password !== c_password) {
            alert("Passwords doesn't matches");
            // return false;
        }

        // event.target.reset();
    };


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
                <form className="infoForm authForm">
                    <h3>Sign up</h3>
                    <div>
                        {/* First name */}
                        <input
                            type="text"
                            value={fname}
                            placeholder="First Name"
                            className="infoInput"
                            name="firstname"
                            onChange={(e) => setfname(e.target.value)}
                            required
                        />
                        {/* Last name */}

                        <input
                            type="text"
                            value={lname}
                            placeholder="Last Name"
                            className="infoInput"
                            name="lastname"
                            onChange={(e) => setlname(e.target.value)}
                            required
                        />
                    </div>
                    {/* Email name */}

                    <div>
                        <input
                            type="email"
                            className="infoInput"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            required
                        />
                    </div>
                    <div >
                        <input type="radio" value="Male" name="gender" onChange={(e) => setgender(e.target.value)} /> Male
                        <input type="radio" value="Female" name="gender" onChange={(e) => setgender(e.target.value)} /> Female
                        <input type="radio" value="Other" name="gender" onChange={(e) => setgender(e.target.value)} /> Other
                    </div>
                    <div >
                        <select
                            className="infoInput"
                            value={profession}
                            onChange={(e) => setProfession(e.target.value)}
                        >
                            <option value="" disabled selected hidden>Choose your profession</option>
                            {options.map((option) => (
                                <option value={option.value} >{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <input
                            type="password"
                            className="infoInput"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            className="infoInput"
                            name="confirmpass"
                            placeholder="Confirm Password"
                            value={c_password}
                            onChange={(e) => setc_password(e.target.value)}
                            required
                        />
                    </div>
                    <div>

                        <button disabled={(!fname) || (!lname) || (!gender) || (!email) || (!gender) || (!profession) || (!c_password) || (!password)}
                            className="button infoButton"
                            type="submit"
                            onClick={(e) => handleSubmit(e)}>
                            Signup
                        </button>
                    </div>
                    <div>
                        <span style={{ fontSize: "12px" }}>Already have an account</span>
                        <a href="/login" style={{ fontSize: "12px" }}>
                            Login!
                        </a>
                    </div>
                </form>
            </div>
        </div>

    );
};
export default SignUp;
