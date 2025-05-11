import React, { useState } from 'react';
import './Auth.css';
import Header from '../../component/Header';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';

const SignUp = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });
  const [passwordStrength, setPasswordStrength] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (name === 'password') {
      if (value.length > 8 && /[A-Z]/.test(value) && /[0-9]/.test(value)) setPasswordStrength('strong');
      else if (value.length > 5) setPasswordStrength('medium');
      else setPasswordStrength('weak');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!form.terms) {
      setError('You must agree to the Terms of Service and Privacy Policy.');
      return;
    }
    if (!form.fullName || !form.email || !form.password || !form.confirmPassword) {
      setError('Please fill in all required fields.');
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setLoading(true);
    try {
      // Split full name into first and last name
      const [first_name, ...lastArr] = form.fullName.trim().split(' ');
      const last_name = lastArr.join(' ');
      await authService.register(
        form.username || form.email.split('@')[0],
        form.email,
        form.password,
        first_name,
        last_name
      );
      setSuccess('Registration successful! Redirecting to login...');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setError(err.response?.data?.detail || 'Registration failed. Please check your details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <Header />
      <div className="auth-main">
        <div className="auth-card">
          <div className="auth-illustration">
            <img src="https://undraw.co/api/illustrations/0b0b0b0b-0b0b-0b0b-0b0b-0b0b0b0b0b0b" alt="Campus" />
            <h2>Connect with Your Campus Community</h2>
            <p>Meet new people. Build lasting connections. Stay in the loop with everything happening on campus.</p>
            <ul>
              <li>✔️ Verified University Students Only</li>
              <li>✔️ Join 50,000+ Students Nationwide</li>
              <li>✔️ Safe & Secure Environment</li>
            </ul>
          </div>
          <div className="auth-form-section">
            <h2>Create Your Campus Account</h2>
            <p>Join your university's online community today</p>
            <form className="auth-form" onSubmit={handleSubmit}>
              <div>
                <label>Full Name</label>
                <input name="fullName" value={form.fullName} onChange={handleChange} type="text" placeholder="Enter your full name" />
              </div>
              <div>
                <label>University Email</label>
                <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="your.email@university.edu" />
              </div>
              <div>
                <label>Username <span style={{color:'#94a3b8', fontWeight:400}}>(Optional)</span></label>
                <input name="username" value={form.username} onChange={handleChange} type="text" placeholder="Choose a username" />
              </div>
              <div>
                <label>Password</label>
                <input name="password" value={form.password} onChange={handleChange} type="password" placeholder="Create a strong password" />
                {form.password && (
                  <div className={`password-strength ${passwordStrength}`}>
                    Password strength: {passwordStrength}
                  </div>
                )}
              </div>
              <div>
                <label>Confirm Password</label>
                <input name="confirmPassword" value={form.confirmPassword} onChange={handleChange} type="password" placeholder="Confirm your password" />
              </div>
              <div className="checkbox-row">
                <input name="terms" type="checkbox" checked={form.terms} onChange={handleChange} />
                <span>I agree to the <a href="#" className="terms-link">Terms of Service</a> and <a href="#" className="terms-link">Privacy Policy</a></span>
              </div>
              {error && <div className="auth-error">{error}</div>}
              {success && <div className="auth-success">{success}</div>}
              <button type="submit" className="submit-btn" disabled={loading}>{loading ? 'Creating Account...' : 'Create Account'}</button>
            </form>
            <div className="auth-divider">
              <div className="line" />
              <span className="or">or continue with</span>
              <div className="line" />
            </div>
            <div className="auth-social">
              <button type="button"><img src="/google.svg" alt="Google" style={{width:'20px',height:'20px'}} /> Google</button>
              <button type="button"><img src="/linkedin.svg" alt="LinkedIn" style={{width:'20px',height:'20px'}} /> LinkedIn</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp; 