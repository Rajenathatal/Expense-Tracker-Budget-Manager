import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const navStyle = {
    backgroundColor: '#1e293b',
    padding: '1rem 1.5rem',
    display: 'flex',
    justify-content: 'space-between',
    alignItems: 'center',
    color: '#ffffff',
  };

  const linkStyle = ({ isActive }) => ({
    color: isActive ? '#60a5fa' : '#ffffff',
    textDecoration: 'none',
    marginLeft: '1rem',
    fontWeight: isActive ? 'bold' : 'normal',
  });

  return (
    <nav style={navStyle}>
      <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Expense Tracker</h2>
      <div>
        <NavLink to="/" style={linkStyle}>Home</NavLink>
        <NavLink to="/dashboard" style={linkStyle}>Dashboard</NavLink>
        <NavLink to="/profile" style={linkStyle}>Profile</NavLink>
        <NavLink to="/login" style={linkStyle}>Login</NavLink>
      </div>
    </nav>
  );
}