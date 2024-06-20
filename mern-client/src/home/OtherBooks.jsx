import React from 'react'
import BookCards from '../components/BookCards';
import { useState, useEffect } from 'react';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        //fetch books from the api
        fetch('http://localhost:5000/all-books')
        .then(res => res.json())
        .then(data => setBooks(data.slice(7, 15)))
    }, []);

  return (
    <div>
      <BookCards books={books} headline={"Other Books"}/>
    </div>
  )
}

export default OtherBooks