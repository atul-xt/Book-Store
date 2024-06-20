import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:5000/all-books')
      .then((response) => response.json())
      .then((data) => setAllBooks(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/book/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const remainingBooks = allBooks.filter((book) => book._id !== id);
          setAllBooks(remainingBooks);
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>
      <div className="container mx-auto lg:w-[1180px] px-4 py-8 bg-gray-300 rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">Sample Table</h2>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">NO</th>
              <th className="px-4 py-2 text-left">BOOK NAME</th>
              <th className="px-4 py-2 text-left">AUTHOR NAME</th>
              <th className="px-4 py-2 text-left">CATEGORY</th>
              <th className="px-4 py-2 text-left">PRICES</th>
              <th className="px-4 py-2 text-left">EDIT</th>
              <th className="px-4 py-2 text-left">DELETE</th>
            </tr>
          </thead>
          <tbody>
            {allBooks.map((book, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="px-4 py-2">{index+1}</td>
                <td className="px-4 py-2">{book.bookTitle}</td>
                <td className="px-4 py-2">{book.authorName}</td>
                <td className="px-4 py-2">{book.category}</td>
                <td className="px-4 py-2">$10</td>
                <td className="px-4 py-2">
                  <Link className='font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5' to={`/admin/dashboard/edit-books/${book._id}`}>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Edit
                  </button>
                  </Link>
                </td>
                <td className="px-4 py-2">
                   <button onClick={() => handleDelete(book._id)} className='bg-red-600 py-2 px-4 font-semibold text-white rounded hover:bg-red-700'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default ManageBooks