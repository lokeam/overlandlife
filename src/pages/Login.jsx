import React from 'react';
import {
  Form,
} from 'react-router-dom';

export default function Login() {
  return (
    <div className="login-container">
      <h1>Sign into your account</h1>
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
        <button>Submit</button>
      </Form>
    </div>
  )
}