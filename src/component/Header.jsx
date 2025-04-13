import "./Header.css";

function Header() {
  return (
    <header>
       <h2>CampusConnect</h2>
     <div className="access">
        <p>Discover</p>
        <p>Messages</p>
        <p>Network</p>
        <button>Sign in</button>
     </div>
    </header>
  );
}

export default Header;
