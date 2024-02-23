import { Link, NavLink } from "react-router-dom";
import imageUrl from '../assets/images/avatar-icon.png';

export default function Header () {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  function fakeLogOut() {
    localStorage.removeItem("loggedin")
  }

  return (
    <header>
      <Link className="site-logo" to="/">#Overlandlife</Link>
      <nav>
        <NavLink className={(isActive) => isActive ? activeStyles : null} to="about">About</NavLink>
        <NavLink className={(isActive) => isActive ? activeStyles : null} to="rigs">Rigs</NavLink>
        <NavLink className={(isActive) => isActive ? activeStyles : null} to="host">Host</NavLink>
        <Link className={(isActive) => isActive ? activeStyles : null} to="login">
          <img
            src={imageUrl}
            className="login-icon"
          />
        </Link>
        <button onClick={fakeLogOut}>X</button>
      </nav>
  </header>
  );
}
