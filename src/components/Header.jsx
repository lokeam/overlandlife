import { Link } from "react-router-dom";

export default function Header () {

  return (
    <header>
      <Link className="site-logo" to="/">#Overlandlife</Link>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/rigs">Rigs</Link>
      </nav>
  </header>
  );
}
