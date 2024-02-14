import { Link, NavLink } from "react-router-dom";

export default function Header () {

  return (
    <header>
      <Link className="site-logo" to="/">#Overlandlife</Link>
      <nav>
        <NavLink className={(isActive) => isActive ? "active-link" : null} to="/about">About</NavLink>
        <NavLink className={(isActive) => isActive ? "active-link" : null} to="/rigs">Rigs</NavLink>
        <NavLink className={(isActive) => isActive ? "active-link" : null} to="/host">Host</NavLink>
      </nav>
  </header>
  );
}
