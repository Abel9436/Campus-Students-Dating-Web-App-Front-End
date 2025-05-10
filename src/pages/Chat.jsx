import React, { useState } from 'react';
import Header from '../component/Header';
import './Chat.css';
// Use placeholder images if user images are not available
const user1 = 'https://randomuser.me/api/portraits/women/44.jpg';
const user2 = 'https://randomuser.me/api/portraits/men/32.jpg';
const user3 = 'https://randomuser.me/api/portraits/women/65.jpg';

const mockConversations = [
  {
    id: 1,
    name: 'Study Group CS301',
    group: true,
    members: 8,
    online: 3,
    lastMessage: 'Meeting at 3PM in Library',
    lastSender: 'Study Group CS301',
    time: '7m',
    pinned: true,
    avatar: user1,
    messages: [
      { sender: 'Sarah Chen', text: 'Hey everyone! I was thinking we could meet at the library tomorrow to go over the final project requirements. What do you all think?', time: '2:52 PM', self: false },
      { sender: 'You', text: 'Great idea! I\'m free after 3pm. Does that work for everyone?', time: '3:14 PM', self: true },
    ],
  },
  {
    id: 2,
    name: 'Mike Johnson',
    group: false,
    lastMessage: 'Can you share the notes?',
    lastSender: 'Mike Johnson',
    time: '1h',
    pinned: false,
    avatar: user2,
    messages: [
      { sender: 'Mike Johnson', text: 'Can you share the notes?', time: '1:10 PM', self: false },
    ],
  },
  {
    id: 3,
    name: 'Emma Wilson',
    group: false,
    lastMessage: 'Hey! Are you going to the...',
    lastSender: 'Emma Wilson',
    time: '30m',
    pinned: false,
    avatar: user3,
    messages: [
      { sender: 'Emma Wilson', text: 'Hey! Are you going to the event later?', time: '2:44 PM', self: false },
    ],
  },
];

const userProfile = {
  name: 'Sarah Anderson',
  major: 'Computer Science • Year 3',
  avatar: user1,
};

const Chat = () => {
  const [conversations, setConversations] = useState(mockConversations);
  const [selectedId, setSelectedId] = useState(null);
  const [message, setMessage] = useState('');
  const [search, setSearch] = useState('');
  const [typing, setTyping] = useState(false);

  const selected = conversations.find(c => c.id === selectedId);

  const handleSend = e => {
    e.preventDefault();
    if (!message.trim() || !selected) return;
    setConversations(conversations.map(c =>
      c.id === selectedId
        ? { ...c, messages: [...c.messages, { sender: 'You', text: message, time: 'Now', self: true }] }
        : c
    ));
    setMessage('');
    setTyping(false);
  };

  const handleSelect = id => {
    setSelectedId(id);
    setTyping(false);
  };

  const filtered = conversations.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.lastMessage.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="chat-app">
      <Header />
      <div className="chat-layout">
        {/* Sidebar */}
        <aside className="chat-sidebar">
          <div className="chat-profile">
            <img src={userProfile.avatar} alt="avatar" className="chat-avatar" />
            <div>
              <div className="chat-profile-name">{userProfile.name}</div>
              <div className="chat-profile-major">{userProfile.major}</div>
            </div>
            <button className="chat-profile-menu">•••</button>
          </div>
          <input
            className="chat-search"
            placeholder="Search conversations..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="chat-filters">
            <button className="active">All</button>
            <button>Unread</button>
            <button>Groups</button>
            <button>Matches</button>
          </div>
          <div className="chat-list-section">PINNED</div>
          <div className="chat-list">
            {filtered.filter(c => c.pinned).map(c => (
              <div
                key={c.id}
                className={`chat-list-item${selectedId === c.id ? ' selected' : ''}`}
                onClick={() => handleSelect(c.id)}
              >
                <img src={c.avatar} alt="avatar" className="chat-list-avatar" />
                <div className="chat-list-info">
                  <div className="chat-list-name">{c.name}</div>
                  <div className="chat-list-last">{c.lastMessage}</div>
                </div>
                <div className="chat-list-meta">{c.time}</div>
              </div>
            ))}
          </div>
          <div className="chat-list-section">RECENT</div>
          <div className="chat-list">
            {filtered.filter(c => !c.pinned).map(c => (
              <div
                key={c.id}
                className={`chat-list-item${selectedId === c.id ? ' selected' : ''}`}
                onClick={() => handleSelect(c.id)}
              >
                <img src={c.avatar} alt="avatar" className="chat-list-avatar" />
                <div className="chat-list-info">
                  <div className="chat-list-name">{c.name}</div>
                  <div className="chat-list-last">{c.lastMessage}</div>
                </div>
                <div className="chat-list-meta">{c.time}</div>
              </div>
            ))}
          </div>
        </aside>
        {/* Chat Window */}
        <section className="chat-window">
          {!selected ? (
            <div className="chat-empty">
              <div className="chat-empty-icon">💬</div>
              <div className="chat-empty-title">Select a conversation</div>
              <div className="chat-empty-desc">Choose from your existing conversations or start a new one with your campus mates</div>
              <button className="chat-new-btn" onClick={() => alert('New conversation modal coming soon!')}>+ New Conversation</button>
            </div>
          ) : (
            <>
              <div className="chat-header">
                <img src={selected.avatar} alt="avatar" className="chat-header-avatar" />
                <div className="chat-header-info">
                  <div className="chat-header-title">{selected.name}</div>
                  {selected.group && (
                    <div className="chat-header-meta">{selected.members} members • {selected.online} online</div>
                  )}
                </div>
                <div className="chat-header-actions">
                  <button>📞</button>
                  <button>🎥</button>
                  <button>⋮</button>
                </div>
              </div>
              <div className="chat-messages">
                {selected.messages.map((m, i) => (
                  <div key={i} className={`chat-message${m.self ? ' self' : ''}`}>
                    {!m.self && <div className="chat-message-sender">{m.sender}</div>}
                    <div className="chat-message-bubble">{m.text}</div>
                    <div className="chat-message-time">{m.time}</div>
                  </div>
                ))}
                {typing && <div className="chat-typing">John is typing...</div>}
              </div>
              <form className="chat-input-row" onSubmit={handleSend}>
                <input
                  className="chat-input"
                  placeholder="Type your message..."
                  value={message}
                  onChange={e => { setMessage(e.target.value); setTyping(true); }}
                  onBlur={() => setTyping(false)}
                />
                <button className="chat-send-btn" type="submit" disabled={!message.trim()}>
                  <span role="img" aria-label="send">📤</span>
                </button>
              </form>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default Chat; 