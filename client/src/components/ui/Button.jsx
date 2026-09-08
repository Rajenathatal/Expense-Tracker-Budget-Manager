// export default function Button({ children, onClick, type = 'button', variant = 'primary' }) {
//   const btnStyle = {
//     padding: '0.6rem 1.2rem',
//     borderRadius: '6px',
//     border: 'none',
//     fontWeight: '600',
//     cursor: 'pointer',
//     backgroundColor: variant === 'secondary' ? '#64748b' : '#2563eb',
//     color: '#ffffff',
//   };

//   return (
//     <button type={type} onClick={onClick} style={btnStyle}>
//       {children}
//     </button>
//   );
// }

export default function Button({ children, onClick, type = 'button', variant = 'primary' }) {
  const className = variant === 'secondary' ? 'btn btn-secondary' : 'btn btn-primary';
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}