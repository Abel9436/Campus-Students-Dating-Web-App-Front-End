import './Body.css'
import Lottie from "lottie-react";
import M1969 from '../assets/M1969.jpeg'
import student_dating from '../assets/student_dating.jpg'
import Animation from '../assets/Animation.json'
import {MessageCircle } from 'lucide-react'
import {UserSearch} from 'lucide-react'
import {ContactRound} from 'lucide-react'

function Body() {
  return (
    <main>
    <div className="first">
      <div className="first_left">
        <h2>Connect with your campus community</h2>
        <p>Find partners, make friends, and build your academic network. All in one place</p>
        <div className='button'>
          <button className='b1'>Join Now</button>
          <button className='b2'>Learn More</button>
        </div>
      </div>
      <div className='lottie'>
      <Lottie animationData={Animation} loop={true} />
      </div>
    </div>
    <h2 className='second-h2'>Everything You Need to Succeed</h2>
    <div className='second'>
      <div className='second-1'>
      <UserSearch />
        <h3>Find Study Partners</h3>
        <p>Connect with students in your courses and form study groups easily</p>
      </div>
      <div className='second-2'> 
         <MessageCircle />
        <h3>Read-time Chat</h3>
        <p>Communicate seamlessly with your academic network</p>
      </div>
      <div className='second-3'>
      <ContactRound />
        <h3>Smart matching</h3>
        <p>Get matched with students based on courses and interests</p>
      </div>
    </div>
    <div className='third'>
      <h2 className='third-h2'>How it Works</h2>
      <div className='third-in'>
        <div className='third-1'>
        <h4>1</h4>
        <h3>Create Profile</h3>
        <p>Set up your academic profile with your courses and interests</p>
        </div>
        <div className='third-2'>
        <h4>2</h4>
          <h3>Discover</h3>
          <p>Find students with similar academic interests</p>
        </div>
        <div className='third-3'>
        <h4>3</h4>
          <h3>Connect</h3>
          <p>Send connectionrequests and start conversation</p>
        </div>
        <div className='third-4'>
        <h4>4</h4>
          <h3>Collaborate</h3>
          <p>Study together and achieve academic success</p>
        </div>
      </div>
    </div>
    <div className='fourth'>
       <h2>What Students Say</h2>
       <div className='fourth-in'>
       <div className='fourth-1'>
        <div className='fourth-inner'>
          <div>
            <img src={M1969} alt="" />
          </div>
          <div>
            <h3>Sarah Johnson</h3>
            <p>Computer Science</p>
          </div>
        </div>
        <p>"Found my study group of Algorithm class here, We've acing our projects together!"</p>
       </div>
       <div className='fourth-2'>
        <div className='fourth-inner'>
          <div>
            <img src={M1969} alt="" />
          </div>
          <div>
            <h3>Michael Chen</h3>
            <p>Business Administrator</p>
          </div>
        </div>
        <p>"The matching system is incredible.I've met amazing study partners who share my goals"</p>
       </div>
       <div className='fourth-3'>
        <div className='fourth-inner'>
          <div>
            <img src={M1969} alt="" />
          </div>
          <div>
            <h3>Emily Martinez</h3>
            <p>Psychology</p>
          </div>
        </div>
        <p>"Made friends in my major and found study buddies for all my class. Coouldn't be happier!"</p>
       </div>
       </div>
    </div>
    <div className='fifth'>
       <h2>Ready to Connect with Your Campus Community?</h2>
       <p>Join thousands of students already using CampusConnect</p>
       <button>Get Started Free</button>
    </div>
    </main>
  );
}

export default Body;
