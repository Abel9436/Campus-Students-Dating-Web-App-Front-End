import React, { useState } from 'react';
import './Auth.css';
import Header from '../../component/Header';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    remember: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await authService.login(form.email, form.password);
      navigate('/home');
    } catch (err) {
      setError(err.response?.data?.detail || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <Header />
      <div className="auth-main">
        <div className="auth-card">
          <div className="auth-form-section">
            <div style={{display:'flex',alignItems:'center',marginBottom:'1.5rem'}}>
              <span style={{fontSize:'2rem',marginRight:'0.5rem'}}>🎓</span>
              <h2 style={{margin:0}}>Welcome back!</h2>
            </div>
            <p>Log in to your Campus Circle account</p>
            <form className="auth-form" onSubmit={handleSubmit}>
              <div>
                <label>Email address</label>
                <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email address" />
              </div>
              <div>
                <label>Password</label>
                <input name="password" value={form.password} onChange={handleChange} type="password" placeholder="Password" />
              </div>
              <div className="checkbox-row" style={{justifyContent:'space-between'}}>
                <label style={{display:'flex',alignItems:'center',gap:'0.5rem',fontWeight:400}}>
                  <input name="remember" type="checkbox" checked={form.remember} onChange={handleChange} />
                  Remember me
                </label>
                <a href="/forgot-password" className="terms-link">Forgot password?</a>
              </div>
              {error && <div className="auth-error">{error}</div>}
              <button type="submit" className="submit-btn" disabled={loading}>{loading ? 'Logging in...' : 'Log in'}</button>
            </form>
            <div className="auth-divider">
              <div className="line" />
              <span className="or">or continue with</span>
              <div className="line" />
            </div>
            <div className="auth-social" style={{flexDirection:'column',gap:'0.7rem'}}>
              <button type="button"><img src="/google.svg" alt="Google" style={{width:'20px',height:'20px'}} /> Continue with Google</button>
              <button type="button"><img src="/microsoft.svg" alt="Microsoft" style={{width:'20px',height:'20px'}} /> Continue with Microsoft</button>
            </div>
          </div>
          <div className="auth-illustration">
            <img src="https://undraw.co/api/illustrations/0b0b0b0b-0b0b-0b0b-0b0b-0b0b0b0b0b0b" alt="Campus" />
            <h2 style={{textAlign:'center'}}>Connect with your campus</h2>
            <p style={{textAlign:'center'}}>Make new friends. Keep in touch. All in one place.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 