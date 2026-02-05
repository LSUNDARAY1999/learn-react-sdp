import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-xl mb-3">Dashboard</h2>

      <nav className="space-x-4 mb-4">
        <Link to="profile" className="text-blue-600">Profile</Link>
        <Link to="settings" className="text-blue-600">Settings</Link>
      </nav>

      {/* Nested route renders here */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
