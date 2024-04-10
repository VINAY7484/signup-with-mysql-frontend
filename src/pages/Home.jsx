// import React from 'react'

import { useEffect, useState } from "react"
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [name, setName] = useState("");
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get('http://localhost:5000')
            .then(res => {
                // console.log(res)
                if (res.data.valid) {
                    setName(res.data.username);
                    console.log(res.data)
                } else {
                    navigate('/login')
                }
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h1>Welcome to the home page {name}</h1>
        </div>
    )
}

export default Home
