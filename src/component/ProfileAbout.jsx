import React from 'react';
import '../styles/ProfileAbout.css';

export default function ProfileAbout({ profile }) {
  const { bio = '', interests = [] } = profile || {};
  return (
    <section className="profile-about" aria-label="About Me">
      <h2 className="profile-about-title">About Me</h2>
      <p className="profile-about-text">
        {bio || 'No bio provided.'}
      </p>
      <div className="profile-about-interests">
        <h3 className="profile-about-interests-title">Interests</h3>
        <div className="profile-about-interests-list">
          {interests.length > 0 ? interests.map((interest) => (
            <span key={interest} className="profile-interest-tag ai">#{interest}</span>
          )) : <span className="profile-interest-tag">No interests</span>}
        </div>
      </div>
    </section>
  );
} 