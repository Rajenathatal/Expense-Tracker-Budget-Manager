// import Navbar from '../components/layout/Navbar';
// import Sidebar from '../components/layout/Sidebar';
// import Footer from '../components/layout/Footer';

// export default function MainLayout({ children }) {
//   return (
//     <div>
//       <Navbar />
//       <div style={{ display: 'flex' }}>
//         <Sidebar />
//         <main style={{ flex: 1, padding: '2rem' }}>
//           {children}
//         </main>
//       </div>
//       <Footer />
//     </div>
//   );
// }

import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function MainLayout() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}