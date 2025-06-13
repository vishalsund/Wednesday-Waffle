import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
  const { user } = useAuth();
  return (
    <nav className="navbar">
      <Link to="/" className = "nav-left">Home</Link>
      <div className = "mainTitle">
        <span id = "whiteTitle">wednesday</span> <span id = "yellowTitle">waffle</span>
      </div>
      {user ? <Link to="/account" className = "nav-right">Account</Link> : <Link to="/signin" className = "nav-right">Sign In</Link>}
    </nav>
  );
}

export default Navbar;