import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//business entertainment general health science sports technology
//955c9a03435b4c30a57808e21f90d027

export default class Navbar
    extends Component {


    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-warning fixed-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand " to="/">
                            <img src="newsbuzz1.png" alt="" width="150" height="70" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav mx-5">
                                <li className="nav-item">
                                    <Link className="nav-link active mx-5" aria-current="page" to="/"><h3>Trending</h3></Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link active mx-3" to="/Sports"><h3>Sports</h3></Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link active mx-3" to="/Technology"><h3>Technology</h3></Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link active mx-3" to="/Science"><h3>Science</h3></Link>
                                </li>

                                <li className="nav-item mx-3">
                                    <Link className="nav-link active mx-3" to="/Entertainment"><h3>Entertainment</h3></Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>


            </>



        )
    }
}
