import React from 'react';
import { Link } from 'react-router-dom';
import { MdHome, MdArchive, MdLogout, MdTranslate, MdOutlineWbSunny, MdOutlineDarkMode } from 'react-icons/md';
import LocaleContext from '../contexts/LocaleContext';
import ThemeContext from '../contexts/ThemeContext';

function Navigation({ logout, name }) {
  const { locale, toggleLocale } = React.useContext(LocaleContext);
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/"><MdHome /></Link></li>
        <li><Link to="/archived"><MdArchive /></Link></li>
        <li><button onClick={toggleLocale} className="toggle-btn"><MdTranslate /></button></li>
        <li><button onClick={toggleTheme} className="toggle-btn">{theme === 'light' ? <MdOutlineDarkMode /> : <MdOutlineWbSunny />}</button></li>
        <li><button onClick={logout} className="toggle-btn"><MdLogout /> {name}</button></li>
      </ul>
    </nav>
  );
}

export default Navigation;