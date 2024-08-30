import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './courseBooks.css';
import Footer from '../footer/Footer';
const CourseBooks = () => {
  const location = useLocation();
  const { subSubject } = location.state;
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`/api/books?subSubject=${subSubject}`);
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, [subSubject]);

  return (
    <div className="books-container">
      <h1>Books for {subSubject}</h1>
      <div className="books-list">
        {books.map((book) => (
          <div className="book-item" key={book.id}>
            <div className="book-cover">
              <img src={book.coverImage} alt={book.title} />
            </div>
            <div className="book-info">
              <h2>{book.title}</h2>
              <p>Publication Year: {book.publicationYear}</p>
              <p>Rating: {book.rating}</p>
              <button className="btn">Send</button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default CourseBooks;