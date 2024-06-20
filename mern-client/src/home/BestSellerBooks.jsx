import React, { useState, useEffect } from 'react'
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        //fetch books from the api
        fetch('http://localhost:5000/all-books')
        .then(res => res.json())
        .then(data => setBooks(data.slice(0, 7)))
    }, []);

  return (
    <div>
      <BookCards books={books} headline={"Best Seller Books"}/>
    </div>
  )
}

export default BestSellerBooks