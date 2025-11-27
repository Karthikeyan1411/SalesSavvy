import { Link } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h2 className="form-title">Forgot Password</h2>
        <p className="form-subtitle">This page is under construction</p>
        <div className="back-link-container">
          <Link to="/login" className="link-text">
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

