import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './courseBooks.css';
import Header from '../navbar/header';
import Footer from '../footer/Footer';

const CourseBooks = () => {
  const location = useLocation();
  const { subSubject } = location.state || {};
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`/api/books?subSubject=${subSubject}`);
        if (response.ok) {
          const data = await response.json();
          setBooks(data);
        } else {
          const error = await response.json();
          setError(error.error);
        }
      } catch (err) {
        console.error('Error fetching books:', err);
        setError('An error occurred while fetching books');
      }
    };

    fetchBooks();
  }, [subSubject]);

  const handleSendBook = async (book) => {
    const { title, filePath } = book;
    const email = prompt('Please enter your email address:');

    if (email) {
      try {
        const response = await fetch('/api/send-book', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: email,
            bookTitle: title,
            bookFilePath: filePath,
          }),
        });

        if (response.ok) {
          alert('Book sent successfully!');
        } else {
          const error = await response.json();
          alert(`Failed to send book: ${error.error}`);
        }
      } catch (err) {
        console.error('Error sending book:', err);
        alert('An error occurred while sending the book');
      }
    }
  };

  return (
    <div>
    <div className="books-container">
      <div className="header-class">
        <Header />
      </div>
      <h1>Books for {subSubject}</h1>
      {error && <p className="error">{error}</p>}
      <div className="books-list">
        {books.length > 0 ? (
          books.map((book) => (
            <div className="book-item" key={book._id}>
              <div className="book-cover">
                <img src={book.coverImage} alt={book.title} />
              </div>
              <div className="book-info">
                <h2>{book.title}</h2>
                <p>Author: {book.author}</p>
                <p>Publication Year: {book.publicationYear}</p>
                <p>Rating: {book.rating}</p>
                <button className="btn" onClick={() => handleSendBook(book)}>
                  Send
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No books available for this sub-subject.</p>
        )}
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default CourseBooks;
