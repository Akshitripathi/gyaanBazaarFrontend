import React, { useState } from 'react';
import CourseDisplay from './courseDisplay';
import Header from '../navbar/header';
import Footer from '../footer/Footer';
import './book.css';
import { FaSearch } from 'react-icons/fa';
const Book = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='book'>
      <div className='header-class'>
        <Header/>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <i className='search-icon'><FaSearch/></i>
        
      </div>
      <CourseDisplay searchTerm={searchTerm} />
      <Footer />
    </div>
  );
};

export default Book;