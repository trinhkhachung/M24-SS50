import { Outlet } from 'react-router-dom';

export default function PrivateRouter2() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Outlet />
    </div>
  );
}