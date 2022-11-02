import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Editborrowbook() {

  const { id } = useParams()

  const [borrowbook, setBorrowBook] = useState(null)
  useEffect(() => {
    fetch(`https://63621de47521369cd0651a56.mockapi.io/borrow/${id}`, { method: "GET", })
      .then(data => data.json())
      .then((borrowbook) => setBorrowBook(borrowbook))
  }, [])


  return (
    borrowbook ? <EditBorrowBookForm borrowbook={borrowbook} /> : "Loading.."
  )
}


function EditBorrowBookForm({ borrowbook }) {

  const [bookname, setBookName] = useState(borrowbook.bookname)
  const [authorname, setAuthorName] = useState(borrowbook.authorname)
  const [language, setLanguage] = useState(borrowbook.language)

  const navigate = useNavigate()

  return (
    <div className="bookhome">
      <div className="container mt-5">
        <div className="w-100 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Edit Borrowed Book</h2>
          <input
            className="form-control form-control-lg mt-3"
            value={bookname}
            onChange={(event) => setBookName(event.target.value)}
            type="text"
            placeholder="edit book name"
            aria-label=".form-control-lg example" />
          <input
            className="form-control form-control-lg mt-3"
            value={authorname}
            onChange={(event) => setAuthorName(event.target.value)}
            type="text"
            placeholder="edit author name"
            aria-label=".form-control-lg example" />
          <input
            className="form-control form-control-lg mt-3"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            type="text"
            placeholder="edit language"
            aria-label=".form-control-lg example" />
          <div className="d-grid gap-2 col-6 mx-auto">
            <button
              onClick={() => {
                const updatedBorrowBook = {
                  bookname: bookname,
                  authorname: authorname,
                  language: language,
                }
                fetch(`https://63621de47521369cd0651a56.mockapi.io/borrow/${borrowbook.id}`,
                  {
                    method: "PUT",
                    body: JSON.stringify(updatedBorrowBook),
                    headers: {
                      "Content-Type": "application/json",
                    }
                  })
                  .then(data => data.json())
                  .then(() => navigate("/borrow"))
              }
              }
              className="btn btn-info mt-3" type="submit">Save Book</button>
          </div>
        </div>
      </div>
    </div>
  )
}

