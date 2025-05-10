import React, { useState } from 'react';
import './Auth.css';
import Header from '../../component/Header';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <div className="auth-container">
      <Header />
      <div className="auth-main">
        <div className="auth-card" style={{maxWidth:'400px',margin:'0 auto',width:'100%'}}>
          <div className="auth-form-section" style={{width:'100%'}}>
            <h2 style={{textAlign:'center',marginBottom:'0.5rem'}}>Forgot Your Password?</h2>
            <p style={{textAlign:'center',marginBottom:'1.5rem',color:'#64748b',fontSize:'1rem'}}>Enter your university email address, and we'll send you instructions to reset your password.</p>
            <form className="auth-form" style={{gap:'1rem'}}>
              <div>
                <label>Email Address</label>
                <input type="email" placeholder="your.email@university.edu" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <button type="submit" className="submit-btn">Send Reset Link</button>
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