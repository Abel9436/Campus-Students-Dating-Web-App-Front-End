import React, { useState } from 'react';
import '../styles/ProfileFriends.css';

const demoFriends = [
  { name: 'Alex', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Emma', img: 'https://randomuser.me/api/portraits/women/65.jpg' },
  { name: 'Mike', img: 'https://randomuser.me/api/portraits/men/76.jpg' },
  { name: 'Lisa', img: 'https://randomuser.me/api/portraits/women/43.jpg' },
  { name: 'Tom', img: 'https://randomuser.me/api/portraits/men/41.jpg' },
  { name: 'More', img: '' },
];

const suggestedUsers = [
  { name: 'Sophia', img: 'https://randomuser.me/api/portraits/women/50.jpg' },
  { name: 'Ethan', img: 'https://randomuser.me/api/portraits/men/51.jpg' },
  { name: 'Olivia', img: 'https://randomuser.me/api/portraits/women/52.jpg' },
];

export default function ProfileFriends({ profile, isOwnProfile }) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const friends = demoFriends;

  return (
    <aside className="profile-friends" aria-label="Friends">
      <h2 className="profile-friends-title">Friends</h2>
      <ul className="profile-friends-list">
        {friends.map((friend, idx) => (
          <li key={friend.name} className="profile-friend-item">
            {friend.img ? (
              <img
                src={friend.img}
                alt={friend.name + ' profile'}
                className="profile-friend-avatar"
              />
            ) : (
              isOwnProfile ? (
                <div className="profile-friend-avatar more" aria-label="More friends">...</div>
              ) : (
                <button
                  className="profile-friend-avatar more"
                  aria-label="Show suggested users"
                  onClick={() => setShowSuggestions(true)}
                  type="button"
                >
                  ...
                </button>
              )
            )}
            <span className="profile-friend-name">{friend.name}</span>
          </li>
        ))}
      </ul>
      {!isOwnProfile && showSuggestions && (
        <div className="profile-friends-suggestions-modal" role="dialog" aria-modal="true">
          <button className="profile-friends-suggestions-close" onClick={() => setShowSuggestions(false)} aria-label="Close suggestions">×</button>
          <h3>Suggested Users</h3>
          <ul className="profile-friends-suggestions-list">
            {suggestedUsers.map(user => (
              <li key={user.name} className="profile-friend-item">
                <img src={user.img} alt={user.name + ' profile'} className="profile-friend-avatar" />
                <span className="profile-friend-name">{user.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
} 