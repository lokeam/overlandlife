import React from 'react';
import { Form } from 'react-router-dom';

export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: ""
  });

  function handleSubmit(event) {
    event.preventDefault()
    console.log(loginFormData);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setLoginFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="login-container">
      <h1>Sign into your account</h1>
      <Form
        method="post"
        className="login-form"
        onSubmit={handleSubmit}
        replace
      >
        <input
          name="email"
          type="email"
          placeholder="Email address"
          onChange={handleChange}
          value={loginFormData.email}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
          value={loginFormData.password}
        />
        <button>Log in</button>
      </Form>
    </div>
  )
}