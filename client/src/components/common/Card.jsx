export default function Card({ title, children }) {
  return (
    <div style={{ padding: '1rem', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', marginBottom: '1rem' }}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
}

// export default function Card({ title, description, children }) {
//   return (
//     <div className="card">
//       {title && <h3 className="card-title">{title}</h3>}
//       {description && <p className="card-description">{description}</p>}
//       <div>{children}</div>
//     </div>
//   );
// }