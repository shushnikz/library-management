import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const userValidationSchema = yup.object({
  bookname: yup
    .string()
    .required("Why not fill the bookname?"),
  authorname: yup
    .string()
    .required("why not fill the authorname?"),
  language: yup
    .string()
    .required("why not fill the price?"),
})

export default function AddborrowBook() {

  const formik = useFormik({
    initialValues: { bookname: "", authorname: "", language: "" },
    validationSchema: userValidationSchema,
    onSubmit: (newBorrowBook) => {
      //  console.log("onSubmit",values);
      createBorrowBook(newBorrowBook)
    }
  })

  const createBorrowBook = (newBorrowBook) => {

    console.log("createBorrowBook", newBorrowBook)
    fetch("https://63621de47521369cd0651a56.mockapi.io/borrow", {
      method: "POST",
      body: JSON.stringify(newBorrowBook),
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((data) => data.json())
      .then(() => navigate("/borrow"));

  }

  const navigate = useNavigate()

  return (
    <div className="addbook">
      <div className="container mt-5">
        <div className="w-100 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A Book</h2>
          <form onSubmit={formik.handleSubmit}>
            <input
              className="form-control form-control-lg"
              id="bookname"
              name="bookname"
              type="text"
              value={formik.values.bookname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter book name"
              aria-label=".form-control-lg example" />


            {formik.touched.bookname && formik.errors.bookname ? formik.errors.bookname : ''}
            <br></br>

            <input
              className="form-control form-control-lg"
              id="authorname"
              name="authorname"
              type="text"
              value={formik.values.authorname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter author name"
              aria-label=".form-control-lg example" />
            {formik.touched.authorname && formik.errors.authorname ? formik.errors.authorname : ''}
            <br></br>

            <input
              className="form-control form-control-lg"
              id="language"
              name="language"
              type="text"
              value={formik.values.language}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter language"
              aria-label=".form-control-lg example" />
            {formik.touched.language && formik.errors.language ? formik.errors.language : ''}
            <br></br>


            <div className="d-grid gap-2 col-6 mx-auto">
              <button onClick={createBorrowBook} className="btn btn-success mt-5" type="submit">Borrow Book</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}