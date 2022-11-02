import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Editbook() {

  const { id } = useParams()

  const [book, setBook] = useState(null)
  useEffect(() => {
    fetch(`https://636215b87521369cd0643438.mockapi.io/book/${id}`, { method: "GET", })
      .then(data => data.json())
      .then((book) => setBook(book))
  }, [])


  return (
    book ? <EditBookForm book={book} /> : "Loading.."
  )
}


function EditBookForm({ book }) {

  const [bookname, setBookName] = useState(book.bookname)
  const [authorname, setAuthorName] = useState(book.authorname)
  const [price, setPrice] = useState(book.price)

  const navigate = useNavigate()

  return (
    <div className="bookhome">
      <div className="container mt-5">
        <div className="w-100 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Edit Book</h2>
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
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            type="text"
            placeholder="edit price"
            aria-label=".form-control-lg example" />
          <div className="d-grid gap-2 col-6 mx-auto">
            <button
              onClick={() => {
                const updatedBook = {
                  bookname: bookname,
                  authorname: authorname,
                  price: price,
                }
                fetch(`https://636215b87521369cd0643438.mockapi.io/book/${book.id}`,
                  {
                    method: "PUT",
                    body: JSON.stringify(updatedBook),
                    headers: {
                      "Content-Type": "application/json",
                    }
                  })
                  .then(data => data.json())
                  .then(() => navigate("/book"))
              }
              }
              className="btn btn-info mt-3" type="submit">Save Book</button>
          </div>
        </div>
      </div>
    </div>
  )
}

