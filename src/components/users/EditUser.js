import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const EditUser = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const [ user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })
    const {name,username,email,phone,website} = user;
    const onInputChange = e => {
        setUser({...user,[e.target.name]: e.target.value})
    }

    useEffect(()=>{
        loadUser()
    },[])

    const loadUser = async e => {
        const result = await axios.get(`http://127.0.0.1:8000/users/${id}`)
        setUser(result.data)

    }
    const onSubmit = async e => {
        e.preventDefault()
        await axios.put(`http://127.0.0.1:8000/users/${id}`,user);
        navigate('/')

    }
    return (
        
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                <div className="form-group mb-4">
                    <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Your Name"
                    name="name"
                    value={name}
                    onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group mb-4">
                    <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Your Username"
                    name="username"
                    value={username}
                    onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group mb-4">
                    <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Enter Your E-mail Address"
                    name="email"
                    value={email}
                    onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group mb-4">
                    <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Your Phone Number"
                    name="phone"
                    value={phone}
                    onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group mb-4">
                    <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Your Website Name"
                    name="website"
                    value={website}
                    onChange={e => onInputChange(e)}
                    />
                </div>
                <button className="btn btn-warning btn-block">Update User</button>
                </form>
            </div>
        </div>
    )
}

export default EditUser
