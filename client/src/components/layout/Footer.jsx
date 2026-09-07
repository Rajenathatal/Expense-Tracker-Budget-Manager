export default function Footer() {
  const footerStyle = {
    backgroundColor: '#1e293b',
    color: '#94a3b8',
    padding: '1.25rem',
    textAlign: 'center',
    marginTop: 'auto',
  };

  return (
    <footer style={footerStyle}>
      <p style={{ margin: 0 }}>
        &copy; {new Date().getFullYear()} Expense Tracker & Budget Manager. All rights reserved.
      </p>
    </footer>
  );
}