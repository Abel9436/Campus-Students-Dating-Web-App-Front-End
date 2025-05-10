import React, { useState } from 'react';
import Header from '../component/Header';
import ProfileHeader from '../component/ProfileHeader';
import ProfileAbout from '../component/ProfileAbout';
import ProfileFriends from '../component/ProfileFriends';
import ProfileActivity from '../component/ProfileActivity';
import ProfileEditModal from '../component/ProfileEditModal';
import '../styles/Profile.css';

const defaultProfile = {
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  name: 'Sarah Anderson',
  username: 'sarahanderson',
  major: 'Computer Science',
  birth: '',
  bio: 'Loves to play at any coffee table chess welcome ☕',
  mood: '',
  interests: ['Artificial Intelligence', 'Photography', 'Chess', 'Gaming', 'Hiking', 'Music'],
};

export default function Profile() {
  const [editOpen, setEditOpen] = useState(false);
  const [profile, setProfile] = useState(defaultProfile);

  const handleSave = (data) => {
    setProfile({
      avatar: data.avatar,
      name: data.name,
      username: data.username,
      major: data.major,
      birth: data.birth,
      bio: data.bio,
      mood: data.mood,
      interests: data.interests,
    });
    setEditOpen(false);
  };

  return (
    <>
      <Header />
      <main className="profile-page" aria-label="User Profile Page">
        <section className="profile-header-section">
          <ProfileHeader onEdit={() => setEditOpen(true)} profile={profile} />
        </section>
        <div className="profile-main-content">
          <section className="profile-about-section">
            <ProfileAbout profile={profile} />
          </section>
          <section className="profile-friends-section">
            <ProfileFriends profile={profile} />
          </section>
        </div>
        <section className="profile-activity-section">
          <ProfileActivity profile={profile} />
        </section>
      </main>
      <ProfileEditModal isOpen={editOpen} onClose={() => setEditOpen(false)} onSave={handleSave} initialData={profile} />
    </>
  );
} 