import React, { useState, useEffect, useMemo } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ArchivedPage from './pages/ArchivedPage';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { MdAdd, MdTranslate, MdOutlineWbSunny, MdOutlineDarkMode } from 'react-icons/md';
import { getUserLogged, putAccessToken } from './utils/network-data';
import ThemeContext from './contexts/ThemeContext';
import LocaleContext from './contexts/LocaleContext';

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'id');
  const location = useLocation();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  const toggleLocale = () => {
    const newLocale = locale === 'id' ? 'en' : 'id';
    localStorage.setItem('locale', newLocale);
    setLocale(newLocale);
  };

  const themeContextValue = useMemo(() => ({ theme, toggleTheme }), [theme]);
  const localeContextValue = useMemo(() => ({ locale, toggleLocale }), [locale]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
      setInitializing(false);
    });
  }, []);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  function onLogout() {
    setAuthedUser(null);
    putAccessToken('');
  }

  if (initializing) {
    return <div className='app-container'>Loading...</div>;
  }

  const showAddButton = !location.pathname.startsWith('/notes/') && authedUser;

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
        <div className="app-container">
          <header>
            <h1>{locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}</h1>
            {authedUser ? (
               <Navigation logout={onLogout} name={authedUser.name} />
            ) : (
               <div className="navigation">
                   <ul>
                       <li><button onClick={toggleLocale} className="toggle-btn"><MdTranslate /></button></li>
                       <li><button onClick={toggleTheme} className="toggle-btn">{theme === 'light' ? <MdOutlineDarkMode /> : <MdOutlineWbSunny />}</button></li>
                   </ul>
               </div>
            )}
          </header>
          <main>
            {authedUser ? (
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/archived" element={<ArchivedPage />} />
                <Route path="/notes/new" element={<AddPage />} />
                <Route path="/notes/:id" element={<DetailPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            ) : (
              <Routes>
                <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            )}
          </main>

          {showAddButton && (
            <div className="homepage__action">
              <Link to="/notes/new" className="action" title="Tambah">
                <MdAdd />
              </Link>
            </div>
          )}
        </div>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;