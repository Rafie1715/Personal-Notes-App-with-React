import React from 'react';
import { MdSearch } from 'react-icons/md';

function NoteSearch({ keyword, onKeywordChange }) {
  return (
    <div className="search-bar">
      <div className="search-bar__container">
        <MdSearch className="search-bar__icon" />
        <input
          type="text"
          placeholder="Cari berdasarkan judul ..."
          value={keyword}
          onChange={(e) => onKeywordChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default NoteSearch;