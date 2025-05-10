import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProfileHeader.css';

export default function ProfileHeader({ onEdit, profile, isOwnProfile }) {
  const {
    avatar = 'https://randomuser.me/api/portraits/women/44.jpg',
    name = '',
    username = '',
    major = '',
    bio = '',
    // Add more fields as needed
  } = profile || {};

  const [friendRequested, setFriendRequested] = useState(false);
  const navigate = useNavigate();

  const handleAddFriend = () => {
    setFriendRequested((prev) => !prev);
  };

  const handleSendMessage = () => {
    navigate('/chat');
  };

  return (
    <header className="profile-header" aria-label="Profile Header">
      {isOwnProfile && onEdit && (
        <button className="profile-header-edit" aria-label="Edit Profile" onClick={onEdit}>
          ✎
        </button>
      )}
      <div className="profile-header-avatar-wrap">
        <img
          src={avatar}
          alt={name ? `${name}'s profile avatar` : 'Profile avatar'}
          className="profile-header-avatar"
        />
      </div>
      <div className="profile-header-info">
        <div className="profile-header-title-row">
          <h1 className="profile-header-name">{name}</h1>
          <span className="profile-header-username">@{username}</span>
        </div>
        <div className="profile-header-meta">
          <span className="profile-header-major">{major}</span>
        </div>
        <div className="profile-header-bio">
          {bio && `"${bio}"`}
        </div>
        <div className="profile-header-stats">
          <span><b>248</b> Matches</span>
          <span><b>1.2k</b> Friends</span>
          <span><b>3.4k</b> Likes</span>
        </div>
        <div className="profile-header-actions">
          <button className="profile-header-btn primary" aria-label="Send Message" onClick={handleSendMessage}>Send Message</button>
          {!isOwnProfile && (
            <button
              className={`profile-header-btn${friendRequested ? ' requested' : ''}`}
              aria-label={friendRequested ? 'Cancel Friend Request' : 'Add Friend'}
              onClick={handleAddFriend}
            >
              {friendRequested ? 'Request Sent' : 'Add Friend'}
            </button>
          )}
        </div>
      </div>
    </header>
  );
} 