"use client";

import { useRef } from 'react';
import style from './LoginForm.module.css';
import config from '@/config';

const  LoginForm = () => {

  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = loginRef.current ? loginRef.current.value : '';
    const password = passwordRef.current ? passwordRef.current.value : '';

    try {
      const res = await fetch(`${config.apiUrl}/login`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              username,
              password
          })
      });
      const response = await res.json();

      console.log('response -------------- ', response);

    } catch (error) {
      console.log('error -------------- ', error);
      return undefined
    }
  }

  return (
    <div className={style['forms-container']}>
      <form className={style['form']} onSubmit={handleSubmit}>
        <label htmlFor="username">
          <span>Username:</span>
          <input type="input" name="username" id="username" ref={loginRef} autoComplete="on"/>
        </label>
        <label htmlFor="password">
            <span>Password:</span>
          <input type="password" name="password" id="password" ref={passwordRef} autoComplete="on"/>
        </label>
        <label htmlFor="form-submit">
          <span></span>
          <button className={style['cta-button']} type="submit" id="form-submit">Log in</button>  
        </label>
      </form>
    </div>
  )
} 

export default LoginForm;

