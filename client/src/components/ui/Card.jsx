// export default function Card({ title, description, children }) {
//   const cardStyle = {
//     backgroundColor: '#ffffff',
//     border: '1px solid #e2e8f0',
//     borderRadius: '8px',
//     padding: '1.25rem',
//     boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
//     marginBottom: '1rem',
//   };

//   return (
//     <div style={cardStyle}>
//       {title && <h3 style={{ margin: 0, color: '#1e293b' }}>{title}</h3>}
//       {description && <p style={{ margin: '0.25rem 0 1rem 0', color: '#64748b', fontSize: '0.875rem' }}>{description}</p>}
//       <div>{children}</div>
//     </div>
//   );
// }

export default function Card({ title, description, children }) {
  return (
    <div className="card">
      {title && <h3 className="card-title">{title}</h3>}
      {description && <p className="card-description">{description}</p>}
      <div>{children}</div>
    </div>
  );
}