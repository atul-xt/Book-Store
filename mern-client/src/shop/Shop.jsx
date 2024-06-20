import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/all-books')
    .then(response => response.json())
    .then(data => setBooks(data))
  }, [])

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center '>All Books are here</h2>
      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {
          books.map(book => <Card className="py-6 shadow-xl">
            <img src={book.imageURL} alt="" className="h-96 mx-auto shadow-2xl rounded-r-xl"/>
            <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white">
              <p className="pl-6 pt-4 text text-2xl font-serif">
                {book.bookTitle}
              </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p className="pl-6 pb-6 font-serif text-base text-[#7c7e81]">
                  {book.authorName}
              </p>
            </p>
            <Link to={book.bookPdfURL} className="flex justify-center items-center">
            <button className="py-3 w-full mx-2 font-semibold rounded-md bg-green-500 text-white">
              Want to read
            </button>
          </Link>
          </Card>
          )
        }
      </div>

    </div>
  )
}

export default Shop