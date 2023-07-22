import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks';

function AuthStatus() {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user) {
    return (
      <p>
        You are not logged in.<Link to="/login">Login</Link>
      </p>
    );
  }

  return (
    <p>
      Welcome {auth.user}!{' '}
      <button
        onClick={() => {
          auth.signout(() => navigate('/'));
        }}
      >
        Sign out
      </button>
    </p>
  );
}

function Header() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/a/abcd">post/abcd</Link>
        </li>
        <li>
          <Link to="/protected">protected</Link>
        </li>
        <li>
          <Link to="/nothing-here">Nothing Here</Link>
        </li>
      </ul>
      <AuthStatus />
    </nav>
  );
}

export default Header;
