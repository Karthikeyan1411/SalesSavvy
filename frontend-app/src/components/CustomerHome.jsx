import { useEffect, useState } from 'react';
import './CustomerHome.css';

const CustomerHome = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // You can fetch user info from API or localStorage if needed
    // For now, this is a placeholder dashboard
  }, []);

  return (
    <div className="customer-home-container">
      <div className="customer-home-header">
        <h1>Welcome to Customer Dashboard</h1>
        {username && <p>Hello, {username}!</p>}
      </div>
      <div className="customer-home-content">
        <div className="dashboard-card">
          <h2>Dashboard</h2>
          <p>This is your customer dashboard. You have successfully logged in!</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerHome;

