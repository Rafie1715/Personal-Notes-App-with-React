import React, { useState } from 'react';
import { MdCheck } from 'react-icons/md';

function NoteInput({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const maxTitleLength = 50;

  const onTitleChangeHandler = (event) => {
    if (event.target.value.length <= maxTitleLength) {
      setTitle(event.target.value);
    }
  };

  const onBodyInputHandler = (event) => {
    setBody(event.target.innerHTML);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (title.trim() && body.trim()) {
      onAddNote({ title, body });
      setTitle('');
      setBody('');
    } else {
      alert("Judul dan isi catatan tidak boleh kosong.");
    }
  };

  return (
    <form className="add-new-page__input" onSubmit={onSubmitHandler}>
      <p className="add-new-page__title__char-limit">
        Sisa karakter: {maxTitleLength - title.length}
      </p>
      <input
        className="add-new-page__input__title"
        placeholder="Judul catatan..."
        value={title}
        onChange={onTitleChangeHandler}
      />
      <div
        className="add-new-page__input__body"
        data-placeholder="Isi catatan..."
        contentEditable
        onInput={onBodyInputHandler} 
      />
      <div className="add-new-page__action">
        <button type="submit" className="action" title="Simpan Catatan">
          <MdCheck />
        </button>
      </div>
    </form>
  );
}

export default NoteInput;