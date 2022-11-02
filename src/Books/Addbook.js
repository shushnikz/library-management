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
  price: yup
    .number()
    .positive()
    .integer()
    .required("why not fill the price?"),
})

export default function Addbook() {

  const formik = useFormik({
    initialValues: { bookname: "", authorname: "", price: "" },
    validationSchema: userValidationSchema,
    onSubmit: (newBook) => {
      //  console.log("onSubmit",values);
      createBook(newBook)
    }
  })

  const createBook = (newBook) => {

    console.log("createBook", newBook)
    fetch("https://636215b87521369cd0643438.mockapi.io/book", {
      method: "POST",
      body: JSON.stringify(newBook),
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((data) => data.json())
      .then(() => navigate("/book"));

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
              id="price"
              name="price"
              type="number"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter Price"
              aria-label=".form-control-lg example" />
            {formik.touched.price && formik.errors.price ? formik.errors.price : ''}
            <br></br>


            <div className="d-grid gap-2 col-6 mx-auto">
              <button onClick={createBook} className="btn btn-success mt-5" type="submit">Add Book</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}
