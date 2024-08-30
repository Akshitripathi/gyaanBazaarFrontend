import React, { useState } from 'react';
import CourseDisplay from './courseDisplay';
import Header from '../navbar/header';

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
    </div>
  );
};

export default Book;