// export default function PageTitle({ title, description }) {
//   return (
//     <div style={{ marginBottom: '1.5rem' }}>
//       <h1 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>
//         {title}
//       </h1>
//       {description && (
//         <p style={{ color: '#64748b', marginTop: '0.25rem', fontSize: '0.95rem' }}>
//           {description}
//         </p>
//       )}
//     </div>
//   );
// }

export default function PageTitle({ title, description }) {
  return (
    <div className="page-header">
      <h1 className="page-title">{title}</h1>
      {description && <p className="page-description">{description}</p>}
    </div>
  );
}