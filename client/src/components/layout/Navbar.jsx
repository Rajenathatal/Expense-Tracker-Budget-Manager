// import { NavLink } from 'react-router-dom';

// export default function Navbar() {
//   const navStyle = {
//     backgroundColor: '#1e293b',
//     padding: '1rem 1.5rem',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     color: '#ffffff',
//   };

//   const getLinkStyle = ({ isActive }) => ({
//     color: isActive ? '#60a5fa' : '#ffffff',
//     textDecoration: 'none',
//     marginLeft: '1rem',
//     fontWeight: isActive ? 'bold' : 'normal',
//   });

//   return (
//     <nav style={navStyle}>
//       <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Expense Tracker</h2>
//       <div>
//         <NavLink to="/" style={getLinkStyle}>
//           Home
//         </NavLink>
//         <NavLink to="/dashboard" style={getLinkStyle}>
//           Dashboard
//         </NavLink>
//         <NavLink to="/profile" style={getLinkStyle}>
//           Profile
//         </NavLink>
//         <NavLink to="/login" style={getLinkStyle}>
//           Login
//         </NavLink>
//       </div>
//     </nav>
//   );
// }

import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Expense Tracker</div>
      <ul className="nav-links">
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
        <li><NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>Dashboard</NavLink></li>
        <li><NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : '')}>Profile</NavLink></li>
        <li><NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>Login</NavLink></li>
      </ul>
    </nav>
  );
}