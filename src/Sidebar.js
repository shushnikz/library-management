import React from 'react';
import { Link } from "react-router-dom";

export default function Sidebar() {

  return (
    <div className="sidebar">

      <div className="offcanvas offcanvas-start bg-info text-white sidebar-nav" tabIndex="-1"
        id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

        <div className="offcanvas-body p-0">
          <nav className="navbar-dark">
            <ul className="navbar-nav">
              <li>
                <a href="#" className="nav-link px-3 active">
                  <span className="me-3">
                    <i className="bi bi-emoji-wink ms-3" style={{ fontSize: "40px", transform: "rotate(60deg)" }}></i>
                  </span>
                  <span className="fs-5 fw-bold">
                    Library Management
                  </span>
                </a>
              </li>
              <hr className="dropdown-divider"></hr>
              <li>


                <span className="me-3">
                  <i className="bi bi-speedometer2 ms-3"></i>
                </span>
                <Link className="fw-bold text-decoration-none text-white"
                to="/"
                >Dashboard</Link>

              </li>
              <hr className="dropdown-divider"></hr>
              <li>


                <span className="me-3">
                <i className="bi bi-book-half ms-3"></i>
                </span>
                <Link className="fw-bold text-decoration-none text-white"
                to="/book"
                >Books</Link>

              </li>
              <hr className="dropdown-divider"></hr>
              <li>
                <span className="me-3">
                <i className="bi bi-credit-card-fill ms-3"></i>
                </span>
                <Link className="fw-bold text-decoration-none text-white"
                to="/borrow"
                >Borrow books</Link>
              </li>
            </ul>

          </nav>

        </div>
      </div>
    </div>
  )

}


