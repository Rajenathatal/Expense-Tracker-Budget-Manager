// client/src/components/layout/Navbar.jsx
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? '#38bdf8' : '#ffffff',
    textDecoration: 'none',
    marginRight: '1.5rem',
    fontWeight: isActive ? 'bold' : 'normal',
  });

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', background: '#1e293b', color: '#fff' }}>
      <h2>Expense Tracker & Budget Manager</h2>
      <div>
        <NavLink to="/" style={linkStyle}>Home</NavLink>
        <NavLink to="/dashboard" style={linkStyle}>Dashboard</NavLink>
        <NavLink to="/profile" style={linkStyle}>Profile</NavLink>
        <NavLink to="/login" style={linkStyle}>Login</NavLink>
      </div>
    </nav>
  );
}