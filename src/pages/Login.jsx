import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
import "./style.css"

const Login = () => {

    const navigate = useNavigate()
    const [values, setValues] = useState({
        email: " ",
        password: " "
    })
    // const [password, setPassword] = useState()
    const handleInput = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: [e.target.value] }))
    }

    axios.defaults.withCredentials = true;

    // useEffect(() => {
    //     axios.get('http://localhost:5000')
    //         .then(res => {
    //             // console.log(res)
    //             if (res.data.valid) {
    //                 navigate("/")
    //                 console.log(res.data)
    //             } else {
    //                 navigate('/login')
    //             }
    //         })
    //         .catch(err => console.log(err))
    // }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/login', values)
            .then(res => {
                if (res.data.Login) {
                    alert("Logged in successfully")
                    navigate('/')
                } else {
                    alert("No record  found")
                }
                console.log(res)
            })
            .catch(err => console.log(err))
    }



    return (
        <>
            <div className="container">
                <div className="container-item">
                    <h1>Welcome <br />Back</h1>
                    <form className="form" onSubmit={handleSubmit}>

                        <div>
                            <input type="email" id="username" placeholder="Email" name='email' required onChange={handleInput} />
                        </div>

                        <div>
                            <input type="password" id="password" placeholder="Password" name='password' required onChange={handleInput} />
                        </div>
                        <div>

                            <Link className="forget" to="/">forget?</Link>
                        </div>
                        <div>

                            <button className="btn btn-submit" type="submit">Sign in</button>
                        </div>
                        <p>or</p>
                        {/* <div>
                            <div className="btn btn-google">
                                <Link to="/" className="btn btn-google" type=" ">Signup with google</Link>
                            </div>
                        </div> */}
                        <span>Create an account </span><Link to="/signup">Signup</Link>
                    </form>


                </div>
            </div>

        </>
    )
}

export default Login
