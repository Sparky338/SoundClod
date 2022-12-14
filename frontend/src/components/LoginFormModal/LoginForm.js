import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import './LoginForm.css'

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  const handleDemoUser = () => {
    setCredential('Demo-lition')
    setPassword('password')
  }

  return (
    <div className='outer-login-form'>
      <form className='form login-form modal' onSubmit={handleSubmit}>
        <ul className='error-ul'>
          {errors.map((error, idx) => <li className='login-errors' key={idx}>{error}</li>)}
        </ul>
        <label className='input-label'>
          {/* Username or Email */}
          <input
            className='input login-input'
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            placeholder='Username or Email'
            required
          />
        </label>
        <label className='input-label'>
          {/* Password */}
          <input
            className='input login-input'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            required
          />
        </label>
        <button className='button submit-button' type="submit">Log In</button>
        <button className='demo-user button' onClick={handleDemoUser}>Demo User</button>
      </form>
    </div>
  );
}

export default LoginForm;
