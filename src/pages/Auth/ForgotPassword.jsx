import React, { useState } from 'react';
import './Auth.css';
import Header from '../../component/Header';
import authService from '../../services/authService';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      await authService.forgotPassword(email);
      setSuccess('Password reset instructions have been sent to your email.');
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to send reset instructions. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <Header />
      <div className="auth-main">
        <div className="auth-card" style={{maxWidth:'400px',margin:'0 auto',width:'100%'}}>
          <div className="auth-form-section" style={{width:'100%'}}>
            <h2 style={{textAlign:'center',marginBottom:'0.5rem'}}>Forgot Your Password?</h2>
            <p style={{textAlign:'center',marginBottom:'1.5rem',color:'#64748b',fontSize:'1rem'}}>
              Enter your university email address, and we'll send you instructions to reset your password.
            </p>
            <form className="auth-form" style={{gap:'1rem'}} onSubmit={handleSubmit}>
              <div>
                <label>Email Address</label>
                <input 
                  type="email" 
                  placeholder="your.email@university.edu" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)}
                  disabled={loading}
                />
              </div>
              {error && <div className="auth-error">{error}</div>}
              {success && <div className="auth-success">{success}</div>}
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>
            <div style={{textAlign:'center',marginTop:'1.2rem'}}>
              <a href="/login" className="terms-link">&larr; Back to Login</a>
            </div>
            <div style={{textAlign:'center',marginTop:'1.5rem',fontSize:'0.97rem',color:'#64748b'}}>
              Need Help? <a href="#" className="terms-link">Contact Support</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword; 