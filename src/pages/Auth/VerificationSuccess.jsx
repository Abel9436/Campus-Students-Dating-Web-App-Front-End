import React from 'react';
import './Auth.css';
import Header from '../../component/Header';

const VerificationSuccess = () => {
  return (
    <div className="auth-container">
      <Header />
      <div className="auth-main">
        <div className="auth-card" style={{maxWidth:'500px',margin:'0 auto',width:'100%'}}>
          <div className="auth-form-section" style={{width:'100%'}}>
            <div style={{display:'flex',justifyContent:'center',marginBottom:'1.2rem'}}>
              <span style={{fontSize:'2.5rem',color:'#22c55e',background:'#e0fce5',borderRadius:'50%',padding:'0.7rem 1rem'}}>
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2l4-4"/></svg>
              </span>
            </div>
            <h2 style={{textAlign:'center',marginBottom:'0.5rem'}}>Verification Successful!</h2>
            <p style={{textAlign:'center',marginBottom:'1.5rem',color:'#64748b',fontSize:'1rem'}}>Your account has been verified. Welcome to EduPortal – your gateway to academic excellence!</p>
            <div style={{display:'flex',flexDirection:'column',gap:'0.7rem',marginBottom:'1.2rem'}}>
              <button className="submit-btn" style={{width:'100%'}}>Go to Dashboard &rarr;</button>
              <button className="submit-btn" style={{width:'100%',background:'#fff',color:'#2563eb',border:'1.5px solid #2563eb'}}>Set Up Your Profile</button>
            </div>
            <div style={{textAlign:'center',fontSize:'0.97rem',color:'#64748b'}}>
              Didn't expect this verification? <a href="#" className="terms-link">Contact Support</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationSuccess; 