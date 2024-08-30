import React, { useState } from 'react';
import CourseDisplay from './courseDisplay';
import Header from '../navbar/header';
import Footer from '../footer/Footer';
const Book = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Header/>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <CourseDisplay searchTerm={searchTerm} />
      <Footer />
    </div>
  );
};

export default Book;