import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { register } from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContext';

function RegisterPage() {
  const { locale } = React.useContext(LocaleContext);
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');
  const navigate = useNavigate();

  async function onRegisterHandler(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
        alert(locale === 'id' ? 'Password tidak sama' : 'Password mismatch');
        return;
    }

    const { error } = await register({ name, email, password });
    if (!error) {
      navigate('/');
    }
  }

  return (
    <section className='register-page'>
      <h2>{locale === 'id' ? 'Isi form untuk mendaftar akun.' : 'Fill the form to register account.'}</h2>
      <form onSubmit={onRegisterHandler} className='input-register'>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' value={name} onChange={onNameChange} />
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' value={email} onChange={onEmailChange} />
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' value={password} onChange={onPasswordChange} />
        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input type='password' id='confirmPassword' value={confirmPassword} onChange={onConfirmPasswordChange} />
        <button type='submit'>Register</button>
      </form>
      <p>
        {locale === 'id' ? 'Sudah punya akun?' : 'Already have an account?'} <Link to="/">{locale === 'id' ? 'Login di sini' : 'Login here'}</Link>
      </p>
    </section>
  );
}

export default RegisterPage;