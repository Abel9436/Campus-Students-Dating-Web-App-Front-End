import React, { useState } from 'react';
import './Auth.css';
import Header from '../../component/Header';

const VerifyEmail = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [email] = useState('student@university.edu');

  const handleChange = (e, idx) => {
    const val = e.target.value.replace(/[^0-9]/g, '').slice(0, 1);
    const newCode = [...code];
    newCode[idx] = val;
    setCode(newCode);
    // Move to next input if filled
    if (val && idx < 5) {
      document.getElementById(`code-input-${idx + 1}`).focus();
    }
  };

  return (
    <div className="auth-container">
      <Header />
      <div className="auth-main">
        <div className="auth-card" style={{maxWidth:'400px',margin:'0 auto',width:'100%'}}>
          <div className="auth-form-section" style={{width:'100%'}}>
            <div style={{display:'flex',justifyContent:'center',marginBottom:'1.2rem'}}>
              <span style={{fontSize:'2.2rem',color:'#2563eb',background:'#e0e7ff',borderRadius:'50%',padding:'0.5rem 0.7rem'}}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </span>
            </div>
            <h2 style={{textAlign:'center',marginBottom:'0.5rem'}}>Verify Your Email</h2>
            <p style={{textAlign:'center',marginBottom:'1.5rem',color:'#64748b',fontSize:'1rem'}}>We've sent a 6-digit code to your university email<br /><b>{email}</b></p>
            <form className="auth-form" style={{gap:'1.2rem',alignItems:'center'}}>
              <div style={{display:'flex',justifyContent:'center',gap:'0.5rem',marginBottom:'0.5rem'}}>
                {code.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`code-input-${idx}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={e => handleChange(e, idx)}
                    style={{width:'2.5rem',height:'2.5rem',textAlign:'center',fontSize:'1.3rem',border:'1.5px solid #e5e7eb',borderRadius:'0.5rem',background:'#f8fafc'}}
                  />
                ))}
              </div>
              <button type="submit" className="submit-btn" style={{width:'100%'}}>Verify Email</button>
            </form>
            <div style={{display:'flex',justifyContent:'space-between',marginTop:'1rem',fontSize:'0.97rem'}}>
              <a href="#" className="terms-link">Resend Code (30s)</a>
              <a href="#" className="terms-link">Edit Email</a>
            </div>
            <div style={{textAlign:'center',marginTop:'1.5rem'}}>
              <a href="/login" className="terms-link">&larr; Back to Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail; 