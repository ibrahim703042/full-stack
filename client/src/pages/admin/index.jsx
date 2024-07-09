import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/backend/sidebar/Sidebar';
import NavBar from '../../components/backend/navbar/Navbar';

const DashboardLayout = () => {
  return (
    <div className=" flex-container dashboard-app">
      <Sidebar />
      <main className="main-container">
        <NavBar />
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
