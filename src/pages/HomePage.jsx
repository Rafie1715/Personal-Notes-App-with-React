import React, { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import NoteSearch from '../components/NoteSearch';
import LocaleContext from '../contexts/LocaleContext';
import { getActiveNotes } from '../utils/network-data';
import Loading from '../components/Loading';

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { locale } = useContext(LocaleContext);

  const keyword = searchParams.get('q') || '';

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
      setLoading(false);
    });
  }, []);

  function onKeywordChangeHandler(keyword) {
    setSearchParams({ q: keyword });
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  if (loading) {
      return <Loading />;
  }

  return (
    <section className="homepage">
      <NoteSearch keyword={keyword} onKeywordChange={onKeywordChangeHandler} />
      <h2>{locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}</h2>
      <NoteList notes={filteredNotes} emptyMessage={locale === 'id' ? 'Tidak ada catatan' : 'No notes found'} />
    </section>
  );
}

export default HomePage;