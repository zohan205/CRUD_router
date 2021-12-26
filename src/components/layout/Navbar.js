import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
                <Link className="navbar-brand " to='/' >React CRUD</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <Link className="nav-link" to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" >About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" >Contact</Link>
                        </li>

                    </ul>
                </div>
                <Link to="/user/add" className='btn btn-info'>Add User</Link>
            </nav>
        </div>
    )
}

export default Navbar
