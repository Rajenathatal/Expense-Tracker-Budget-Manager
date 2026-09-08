export default function WelcomeBanner({ username = "User", projectName = "Expense Tracker" }) {
  return (
    <div className="card" style={{ backgroundColor: '#eff6ff', borderColor: '#bfdbfe', marginBottom: '1.5rem' }}>
      <h2 style={{ color: '#1e40af', margin: 0 }}>Welcome back, {username}! 👋</h2>
      <p style={{ color: '#1d4ed8', margin: '0.25rem 0 0 0', fontSize: '0.9rem' }}>
        Managing your finances on <strong>{projectName}</strong>.
      </p>
    </div>
  );
}