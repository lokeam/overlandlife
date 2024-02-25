import React, { useState } from 'react';
import {
    Form,
    useActionData,
    useLoaderData,
    useNavigation,
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

  try {
    const data = await loginUser({email, password});
    localStorage.setItem('loggedin', true);
    return redirect('/host');
  } catch (error) {
    return error.message;
  }
}

export default function Login() {
  const errorMessage = useActionData();
  const message = useLoaderData();
  const navigation = useNavigation();

  return (
    <div className="login-container">
      <h1>Sign into your account</h1>
      { message && <h3 className="loginAlert">{message}</h3> }
      { errorMessage && <h3 className="loginAlert">{errorMessage}</h3> }
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
        <button disabled={navigation.state === "submitting"}>
          {navigation.state === "submtting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  )
}