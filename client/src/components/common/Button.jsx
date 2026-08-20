export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} style={{ padding: '0.5rem 1rem', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
      {children}
    </button>
  );
}