import { redirect } from "react-router-dom";

/*
  Ideally would be reaching out to db or server for auth.
*/
export async function requireAuth() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    const response = redirect('/login');
    response.body = true;
    throw response;
  }
}