import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Viewbook() {
  const { id } = useParams()

  const navigate = useNavigate()

  const [book, setBook] = useState({})

  useEffect(() => {
    fetch(`https://636215b87521369cd0643438.mockapi.io/book/${id}`, { method: "GET", })
      .then(data => data.json())
      .then((book) => setBook(book))
  }, [id])

  return (
    <div className="bookhome">
      <div className="container py-4">

        <h1 className="display-4">Book Id : {id}</h1>
        <hr />
        <ul className="list-group w-100 py-4">
          <li className="list-group-item bg-light py-3">Book Name : {book.bookname}</li>
          <li className="list-group-item bg-light py-3">Author Name : {book.authorname}</li>
          <li className="list-group-item bg-light py-3">Price : {book.price}</li>
        </ul>
        <button
          onClick={() => navigate(-1)}
          className="btn btn-primary mt-3" >
          <ArrowBackIosIcon />Back
        </button>
      </div>
    </div>

  )
}