import React, { useEffect, useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

function Boorowbook() {

  const navigate = useNavigate();

  const [borrowbooks, setBorrowBook] = useState([])

  useEffect(() => {
    getBorrowBooks()
  }, [])

  const getBorrowBooks = () => {
    fetch("https://63621de47521369cd0651a56.mockapi.io/borrow")
      .then(data => data.json())
      .then((borrowbook) => setBorrowBook(borrowbook.reverse()))
  }

  return (
    <div className="bookhome">
      <div className="container">
        <div className="py-4">
          <h1 className="text-center text-dark">Borrowed Books</h1>

          <table className="table table-success table-striped table-hover border shadow mt-4">
            <thead>
              <tr>
                <th className="p-3" scope="col">id</th>
                <th className="p-3" scope="col">Book_Name</th>
                <th className="p-3" scope="col">Author_Name</th>
                <th className="p-3" scope="col">Language</th>
                <th className="p-3" scope="col">View</th>
                <th className="p-3" scope="col">Edit</th>
                <th className="p-3" scope="col">Return</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {
                borrowbooks.map((borrowbook, index) => (
                  <tr>
                    <th scope='row'>{index + 1}</th>
                    <td>{borrowbook.bookname}</td>
                    <td>{borrowbook.authorname}</td>
                    <td>{borrowbook.language}</td>
                    <td>
                      <IconButton
                        onClick={() => {
                          navigate(`/borrow/${borrowbook.id}`)
                        }}
                      >
                        <VisibilityIcon color="secondary" />
                      </IconButton>
                    </td>
                    <td>
                      <IconButton
                        onClick={() => {
                          navigate(`/borrow/edit/${borrowbook.id}`)
                        }}
                      >
                        <ModeEditIcon color="primary" />
                      </IconButton>
                    </td>
                    <td>
                      <IconButton
                        onClick={() => {
                          fetch(`https://63621de47521369cd0651a56.mockapi.io/borrow/${borrowbook.id}`, { method: "DELETE", })
                            .then(() => getBorrowBooks())
                        }}

                      >
                        <AssignmentReturnIcon color="error" />
                      </IconButton>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Boorowbook