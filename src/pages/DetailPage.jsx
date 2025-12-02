import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import { showFormattedDate } from '../utils/data';
import NotFoundPage from './NotFoundPage';
import LocaleContext from '../contexts/LocaleContext';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/network-data';
import { MdArchive, MdUnarchive, MdDeleteForever } from 'react-icons/md';
import Loading from '../components/Loading';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
      setLoading(false);
    });
  }, [id]);

  async function onDeleteHandler() {
    await deleteNote(id);
    navigate('/');
  }

  async function onArchiveHandler() {
    await archiveNote(id);
    navigate('/');
  }

  async function onUnarchiveHandler() {
    await unarchiveNote(id);
    navigate('/archived');
  }

  if (loading) {
    return <Loading />;
  }

  if (!note) {
    return <NotFoundPage />;
  }

  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{note.title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(note.createdAt)}</p>
      <div className="detail-page__body">{parse(note.body)}</div>
      
      <div className="detail-page__action">
        {note.archived ? (
           <button 
             className="action-icon" 
             title={locale === 'id' ? "Aktifkan" : "Activate"}
             onClick={onUnarchiveHandler}
           >
             <MdUnarchive />
           </button>
        ) : (
           <button 
             className="action-icon" 
             title={locale === 'id' ? "Arsipkan" : "Archive"} 
             onClick={onArchiveHandler}
           >
             <MdArchive />
           </button>
        )}
        
        <button 
          className="action-icon" 
          title={locale === 'id' ? "Hapus" : "Delete"}
          onClick={onDeleteHandler}
        >
          <MdDeleteForever />
        </button>
      </div>
    </section>
  );
}

export default DetailPage;