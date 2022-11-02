import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Viewborrowbook() {
  const { id } = useParams()

  const navigate = useNavigate()

  const [borrowBook, setBorrowBook] = useState({})

  useEffect(() => {
    fetch(`https://63621de47521369cd0651a56.mockapi.io/borrow/${id}`, { method: "GET", })
      .then(data => data.json())
      .then((borrowbook) => setBorrowBook(borrowbook))
  }, [id])

  return (
    <div className="bookhome">
      <div className="container py-4">

        <h1 className="display-4">Borrowed Book Id : {id}</h1>
        <hr />
        <ul className="list-group w-100 py-4">
          <li className="list-group-item bg-light py-3">Book Name : {borrowBook.bookname}</li>
          <li className="list-group-item bg-light py-3">Author Name : {borrowBook.authorname}</li>
          <li className="list-group-item bg-light py-3">Language : {borrowBook.language}</li>
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