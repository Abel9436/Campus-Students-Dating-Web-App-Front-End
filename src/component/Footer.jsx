import './Footer.css'
import insta from '../assets/insta.jpg'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.jpeg'
import twitter from '../assets/twitter.png'
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer>
      <div className='footer'>
        <div className='footer-1'>
          <h3>Campus Connect</h3>
          <p>Connecting students for academic success and meaningful friendships.</p>
        </div>
        <div className='footer-2'>
          <h3>Quick Links</h3>
          <a href="">About Us</a>
          <a href="">Features</a>
          <a href="">Privacy Policy</a>
          <a href="">Terms of Service</a>
        </div>
        <div className='footer-3'>
          <h3>Contact</h3>
          <a href="">Support@campusconnect.com</a>
          <p>1-800-CAMPUS-1</p>
        </div>
        <div className='footer-4'>
          <h3>Follow Us</h3>
          <div className='logo'>
          <Facebook />
          <Instagram />
          <Twitter />
          <Linkedin />
          {/* <FaFacebook color="blue" size={30} />
          <FaTwitter color="white" size={30} />
          <FaInstagram color="white" size={30} />
          <FaLinkedin color="white" size={30} /> */}
          </div>
        </div>
       
      </div>
      <p className='last'>&copy; 2025 CampusConnect. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
