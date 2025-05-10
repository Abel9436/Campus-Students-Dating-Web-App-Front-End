import React, { useState, useRef } from 'react';
import '../styles/ProfileEditModal.css';

export default function ProfileEditModal({ isOpen, onClose, onSave, initialData }) {
  const [form, setForm] = useState(initialData || {
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: '',
    username: '',
    major: '',
    birth: '',
    bio: '',
    mood: '',
    interests: ['Programming', 'Design', 'Photography'],
    newInterest: '',
  });
  const fileInputRef = useRef();

  if (!isOpen) return null;

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddInterest = () => {
    if (form.newInterest && !form.interests.includes(form.newInterest)) {
      setForm({ ...form, interests: [...form.interests, form.newInterest], newInterest: '' });
    }
  };

  const handleRemoveInterest = (interest) => {
    setForm({ ...form, interests: form.interests.filter(i => i !== interest) });
  };

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setForm({ ...form, avatar: ev.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="profile-edit-modal-backdrop" aria-modal="true" role="dialog">
      <div className="profile-edit-modal">
        <div className="profile-edit-avatar-block">
          <div className="profile-edit-avatar-wrap" style={{ position: 'relative' }} onClick={handleAvatarClick} tabIndex={0} role="button" aria-label="Change profile picture">
            <img src={form.avatar} alt="Profile avatar preview" className="profile-edit-avatar" />
            <button
              type="button"
              className="profile-edit-avatar-overlay"
              aria-label="Change profile picture"
              tabIndex={-1}
            >
              <span role="img" aria-label="Camera">📷</span>
            </button>
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              ref={fileInputRef}
              onChange={handleAvatarChange}
              aria-label="Upload profile picture"
            />
          </div>
          <button type="button" className="profile-edit-avatar-link" onClick={handleAvatarClick}>
            Change Photo
          </button>
        </div>
        <button className="profile-edit-close" aria-label="Close" onClick={onClose}>×</button>
        <h2 className="profile-edit-title">Edit Your Profile</h2>
        <form className="profile-edit-form" onSubmit={handleSubmit}>
          <div className="profile-edit-row">
            <div className="profile-edit-field">
              <label htmlFor="name">Full Name</label>
              <input id="name" name="name" type="text" value={form.name} onChange={handleChange} autoComplete="name" />
            </div>
            <div className="profile-edit-field">
              <label htmlFor="username">Username</label>
              <input id="username" name="username" type="text" value={form.username} onChange={handleChange} autoComplete="username" />
            </div>
          </div>
          <div className="profile-edit-row">
            <div className="profile-edit-field">
              <label htmlFor="major">Faculty/Major</label>
              <input id="major" name="major" type="text" value={form.major} onChange={handleChange} autoComplete="organization" />
            </div>
            <div className="profile-edit-field">
              <label htmlFor="birth">Birth Date</label>
              <input id="birth" name="birth" type="text" placeholder="mm/dd/yyyy" value={form.birth} onChange={handleChange} autoComplete="bday" />
            </div>
          </div>
          <div className="profile-edit-field">
            <label htmlFor="bio">Bio</label>
            <textarea id="bio" name="bio" value={form.bio} onChange={handleChange} placeholder="Tell us about yourself..." autoComplete="off" />
          </div>
          <div className="profile-edit-field">
            <label htmlFor="mood">Current Mood</label>
            <input id="mood" name="mood" type="text" value={form.mood} onChange={handleChange} placeholder="How are you feeling?" autoComplete="off" />
          </div>
          <div className="profile-edit-field">
            <label>Interests</label>
            <div className="profile-edit-interests-list">
              {form.interests.map(interest => (
                <span key={interest} className="profile-edit-interest">
                  {interest}
                  <button type="button" aria-label={`Remove ${interest}`} onClick={() => handleRemoveInterest(interest)}>×</button>
                </span>
              ))}
              <input
                type="text"
                name="newInterest"
                value={form.newInterest}
                onChange={handleChange}
                placeholder="Add interest"
                className="profile-edit-interest-input"
                autoComplete="off"
              />
              <button type="button" className="profile-edit-add-interest" onClick={handleAddInterest}>+ Add Interest</button>
            </div>
          </div>
          <div className="profile-edit-actions">
            <button type="button" className="profile-edit-cancel" onClick={onClose}>Cancel</button>
            <button type="submit" className="profile-edit-save">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
} 