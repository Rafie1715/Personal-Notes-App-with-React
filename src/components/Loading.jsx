import React, { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';

function Loading() {
  const { locale } = useContext(LocaleContext);

  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="loading-text">
        {locale === 'id' ? 'Sedang memuat...' : 'Loading...'}
      </p>
    </div>
  );
}

export default Loading;