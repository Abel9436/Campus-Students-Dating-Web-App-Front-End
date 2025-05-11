import React from 'react';
import '../styles/ProfileActivity.css';

const demoActivities = [
  {
    id: 1,
    title: 'Study session at the new CS building! 🏢',
    tags: ['#CodingLife'],
    time: '2 hours ago',
    img: '',
  },
  {
    id: 2,
    title: 'Won my first chess tournament! Thanks for the support 🏆',
    tags: [],
    time: 'Yesterday',
    img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    title: 'Amazing weekend at Stanford Hackathon 2023! 🚀',
    tags: ['#Hackathon'],
    time: '3 days ago',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
];

export default function ProfileActivity({ profile }) {
  // In the future, use profile.activities or similar
  const activities = demoActivities;
  return (
    <section className="profile-activity" aria-label="Recent Activity">
      <h2 className="profile-activity-title">Recent Activity</h2>
      <div className="profile-activity-list">
        {activities.map((activity) => (
          <article key={activity.id} className="profile-activity-card">
            {activity.img && (
              <img
                src={activity.img}
                alt="Activity visual"
                className="profile-activity-img"
              />
            )}
            <div className="profile-activity-content">
              <div className="profile-activity-meta">
                <span className="profile-activity-time">{activity.time}</span>
              </div>
              <div className="profile-activity-title-text">{activity.title}</div>
              <div className="profile-activity-tags">
                {activity.tags.map((tag) => (
                  <span key={tag} className="profile-activity-tag">{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
} 