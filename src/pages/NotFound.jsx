import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h1>Sorry, we couldn&#8220;t find that page.</h1>
      <Link to="/">Return to Home</Link>
    </div>
  );
}