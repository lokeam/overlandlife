import React, { useState } from 'react';
import {
    Form,
    useLoaderData,
    useNavigate,
    redirect
  } from 'react-router-dom';
import { loginUser } from '../api';

export function loader({ request }) {
  return new URL(request.url).searchParams.get('message');
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  const data = await loginUser({email, password});

  localStorage.setItem('loggedin', true);
  return redirect('/host');
}

export default function Login() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const message = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <h1>Sign into your account</h1>
      { message && <h3 className="loginAlert">{message}</h3> }
      { error && <h3 className="loginAlert">{error.message}</h3> }
      <Form
        method="post"
        className="login-form"
        replace
      >
        <input
          name="email"
          type="email"
          placeholder="Email address"
        />
        <input
          name="password"
          type="password"
          placeholder="password"
        />
        <button disabled={status === "submitting"}>
          {status === "submtting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  )
}