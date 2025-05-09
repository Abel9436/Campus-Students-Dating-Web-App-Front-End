import React from 'react';
import './Home.css';
import tom from '../../public/tom.jpg'

const Sidebar = () => (
  <aside className="sidebar">
    <div className="profile">
      <img src={tom}  alt="User avatar" className="avatar" />
      <div>
        <h3>Sarah Wilson</h3>
        <p>Feeling social today</p>
      </div>
    </div>
    <ul className="sidebar-links">
      <li><span>❤</span> Matches <span className="badge">15</span></li>
      <li><span>👍</span> Likes <span className="badge">50</span></li>
      <li><span>💬</span> Messages <span className="badge">3</span></li>
    </ul>
    <div className="trending">
      <h4>Trending on Campus</h4>
      <div className="tags">
        <span className="tag">#freshmen</span>
        <span className="tag">#campus</span>
        <span className="tag">#studybuddies</span>
        <span className="tag">#campuslife</span>
        <span className="tag">#coffeebreak</span>
      </div>
    </div>
  </aside>
);

const Header = () => (
  <header className="main-header">
    <h1>CampusConnect</h1>
    <div className="header-icons">
      <button className="icon-button">🔍</button>
      <button className="icon-button">🔔</button>
      <button className="icon-button">💬</button>
      <img src={tom} className="avatar small" alt="User avatar" />
    </div>
  </header>
);

const ProfileCard = ({ name, age, distance, field, description }) => (
  <div className="card">
    <div className="card-img">
      <img src={tom} alt={`${name}'s profile`} />
      <span className="distance-badge">{distance} miles away</span>
    </div>
    <div className="card-body">
      <div className="card-header">
        <h3>{name}, {age}</h3>
        <span className="tag small">{field}</span>
      </div>
      <p>{description}</p>
      <div className="card-actions">
        <button className="btn like">❤ Like</button>
        <button className="btn outline">View Profile</button>
      </div>
    </div>
  </div>
);

const MainContent = () => (
  <main className="main-content">
    <Header />
    <section className="welcome">
      <h2>Welcome back, Sarah! ✨</h2>
      <p>Ready to make meaningful connections today?</p>
    </section>
    <div className="tabs">
      <button className="tab active">Near You</button>
      <button className="tab">New Users</button>
      <button className="tab">Online Now</button>
      <button className="tab">By Faculty</button>
    </div>
    <section className="profiles">
      <ProfileCard name="Alex" age={20} distance={0.5} field="Computer Science" description="Coffee enthusiast, coding wizard 🧙‍♂️" />
      <ProfileCard name="Emily" age={19} distance={0.8} field="Psychology" description="Book lover & tennis player 🎾" />
      <ProfileCard name="Marcus" age={21} distance={1.7} field="Business" description="Startup enthusiast & foodie 🍕" />
    </section>
  </main>
);

const Home = () => (
  <div className="layout">
    <Sidebar />
    <MainContent />
  </div>
);

export default Home;
