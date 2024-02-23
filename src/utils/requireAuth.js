import { redirect } from "react-router-dom";

/*
  Ideally would be reaching out to db or server for auth.
*/
export async function requireAuth() {
  const pathname = new URL(request.url).pathname;
  const isLoggedIn = localStorage.getItem('loggedin');

  if (!isLoggedIn) {
    throw redirect('/login?message=Please log into your account');
  }
}