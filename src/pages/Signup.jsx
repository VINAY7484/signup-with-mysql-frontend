import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import axios from 'axios';

const Signup = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate()

    const handleInput = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: [e.target.value] }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/signup', values)
            .then(res => {

                console.log(res);
                navigate('/login')
            })
            .catch(err => console.log("Error", err));
    }


    return (
        <>
            <div className="container">
                <div className="container-item">
                    <h1>Create <br />Account</h1>
                    <form className="form" onSubmit={handleSubmit}>

                        <div>
                            <input type="text" id="username" placeholder="Your Name" name="name" required onChange={handleInput} />

                        </div>
                        <div>
                            <input type="email" id="email" placeholder="Your Email" name="email" required onChange={handleInput} />

                        </div>
                        <div>
                            <input type="password" id="password" placeholder="Password" name="password" onChange={handleInput} />

                        </div>
                        {/* <div>

                            <input type="password" id="password-conform" placeholder="Conform Password" />
                        </div> */}
                        <div>

                            <button className="btn btn-submit" type="submit">Sign up</button>
                        </div>
                        <p>or</p>

                        Back to <Link to="/login">Sign in</Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup
