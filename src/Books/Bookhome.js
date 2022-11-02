import React, { useEffect, useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

function Bookhome() {

  const navigate = useNavigate();

  const [books, setBook] = useState([])

  useEffect(() => {
    getBooks()
  }, [])

  const getBooks = () => {
    fetch("https://636215b87521369cd0643438.mockapi.io/book")
      .then(data => data.json())
      .then((book) => setBook(book.reverse()))
  }

  return (
    <div className="bookhome">
      <div className="container">
        <div className="py-4">
          <h1 className="text-center text-dark">Books</h1>

          <table className="table table-success table-hover table-striped border shadow mt-4">
            <thead>
              <tr>
                <th className="p-3" scope="col">id</th>
                <th className="p-3" scope="col">Book_Name</th>
                <th className="p-3" scope="col">Author_Name</th>
                <th className="p-3" scope="col">Price💲</th>
                <th className="p-3" scope="col">View</th>
                <th className="p-3" scope="col">Edit</th>
                <th className="p-3" scope="col">Delete</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {
                books.map((book, index) => (
                  <tr>
                    <th scope='row'>{index + 1}</th>
                    <td>{book.bookname}</td>
                    <td>{book.authorname}</td>
                    <td>{book.price}</td>
                    <td>
                      <IconButton
                        onClick={() => {
                          navigate(`/book/${book.id}`)
                        }}
                      >
                        <VisibilityIcon color="secondary" />
                      </IconButton>
                    </td>
                    <td>
                      <IconButton
                        onClick={() => {
                          navigate(`/book/edit/${book.id}`)
                        }}
                      >
                        <ModeEditIcon color="primary" />
                      </IconButton>
                    </td>
                    <td>
                      <IconButton
                      // onClick={() => {
                      //   fetch(`https://635f784e3e8f65f283b3b428.mockapi.io/student/${stud.id}`, { method: "DELETE", })
                      //     .then(() => getStudents())

                      // }}
                      >
                        <DeleteIcon color="error" />
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

export default Bookhome