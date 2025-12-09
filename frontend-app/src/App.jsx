import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import CustomerLogin from './components/CustomerLogin';
import CustomerHome from './components/CustomerHome';
import ForgotPassword from './components/ForgotPassword';
import './App.css';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import CustomModal from './components/modals/CustomModel';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          <Route path="/login" element={<CustomerLogin />} />
          <Route path="/customerhome" element={<CustomerHome />} />
          
          <Route path='/admin' element={<AdminLogin />} />
          <Route path='/admindashboard' element={<AdminDashboard />} /> 

          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;