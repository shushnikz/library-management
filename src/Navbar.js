import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-secondary topbar mb-4 static-top shadow">
                    <div className="container-fluid">
                        <a className="navbar-brand fw-bold fs-1 ms-5" href="#">📔Library Management📚</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="btn btn-lg btn-outline-light" to="/book/add">Add Book</Link>
                        <Link className="btn btn-lg btn-outline-light" to="/borrow/add">Borrow Book</Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
