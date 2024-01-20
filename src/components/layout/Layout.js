import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {/* Need outlet for the following layout */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
