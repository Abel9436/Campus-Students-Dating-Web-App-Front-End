import "./Header.css";
import Home  from "./Home";
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header>
       <h2>CampusConnect</h2>
     <div className="access">
        {/* <a href="C:\Users\hp\Campus-Students-Dating-Web-App-Front-End\src\component\Home.jsx">Home</a> */}
        <p>Network</p>
        <Link to="/home">Home</Link>
        <button>Sign in</button>
     </div>
    </header>
  );
}

export default Header;
