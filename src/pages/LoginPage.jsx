import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { login } from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContext';

function LoginPage({ loginSuccess }) {
  const { locale } = React.useContext(LocaleContext);
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  async function onLogin(event) {
    event.preventDefault();
    const { error, data } = await login({ email, password });
    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section className='login-page'>
      <h2>{locale === 'id' ? 'Yuk, login untuk menggunakan aplikasi.' : 'Login to use app, please.'}</h2>
      <form onSubmit={onLogin} className='input-login'>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' value={email} onChange={onEmailChange} />
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' value={password} onChange={onPasswordChange} />
        <button type='submit'>Login</button>
      </form>
      <p>
        {locale === 'id' ? 'Belum punya akun?' : "Don't have an account?"} <Link to="/register">{locale === 'id' ? 'Daftar di sini' : 'Register here'}</Link>
      </p>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;