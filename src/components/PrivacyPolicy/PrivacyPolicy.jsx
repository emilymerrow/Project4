import React from 'react';
import './PrivacyPolicy.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div>
      <Header />
      <div className="ui main text container privacy-policy-container">
        <h1 className="ui header">Privacy Policy</h1>
        <p>
          Welcome to ChoreBusters' Privacy Policy! We're all about helping you and your kids manage chores and allowances while having a blast. But we also care about your privacy, so let's dive into the serious stuff.
        </p>
        <h2 className="ui header subHeader">1. The Top-Secret Information We Collect</h2>
        <p className="text">
          We know you're a super secret agent, but we still need some basic info to make ChoreBusters work. This includes your name, email address, and a password to protect your ChoreBusters account from evil villains.
        </p>
        <h2 className="ui header">2. How We Use Your Classified Data</h2>
        <p>
          We use your top-secret information to personalize your experience and help you conquer those chores. Don't worry, we won't share your data with Dr. Evil or any other third parties without your permission.
        </p>
        <h2 className="ui header">3. Keeping Your Secrets Safe</h2>
        <p>
          We use high-tech gadgets and gizmos to keep your information locked up tight. Your data is guarded by state-of-the-art security measures, so you can focus on your mission to become the ultimate chore master.
        </p>
        <h2 className="ui header">4. Your Privacy Rights as a Superhero</h2>
        <p>
          As a ChoreBusters superhero, you have the right to access, update, or delete your personal information at any time. Just shoot us an email at support@chorebusters.com, and our trusty sidekicks will help you out.
        </p>
        <h2 className="ui header">5. Changes to This Top-Secret Document</h2>
        <p>
          Sometimes we update our Privacy Policy to keep up with the latest secret agent gadgets. We'll let you know when we make any changes, so you can always stay one step ahead of the game.
        </p>
        <p>
          Thanks for reading our Privacy Policy, super secret ChoreBusters agent! Now get back to busting those chores and earning some awesome allowances!
        </p>
      </div>
      <div className="ui inverted vertical footer segment" style={{ backgroundColor: '#48494b' }}>
        <div className="ui container" style={{ marginTop: '0' }}>
          <div className="ui stackable inverted divided equal height stackable grid">
            <div className="eight wide column">
              <div className="ui inverted center aligned">
                <h4 className="ui inverted header" style={{ fontSize: '1.5rem', color: '#FFF', marginBottom: '1rem', fontFamily: 'Open Sans, sans-serif' }}>
                  About Us
                </h4>
              </div>
              <div className="ui inverted link list" style={{ display: 'flex', justifyContent: 'space-between', padding: '0 1rem' }}>
                <Link to="/contactUs" className="item inverted-hover" style={{ fontSize: '1.2rem', color: '#FFF' }}>
                  Contact Us
                </Link>
                <Link to="/privacy" className="item inverted-hover" style={{                   fontSize: '1.2rem',
                  color: '#FFF'
                }}>
                  Privacy Policy
                </Link>
                <Link to="#" className="item inverted-hover" style={{ fontSize: '1.2rem', color: '#FFF' }}>
                  Terms and Conditions
                </Link>
              </div>
            </div>

            <div className="eight wide column">
              <div className="ui inverted center aligned">
                <h4 className="ui inverted header" style={{ marginBottom: '1rem', fontSize: '1.3rem', fontFamily: 'Open Sans, sans-serif' }}>
                  Connect with Us
                </h4>
              </div>
              <div className="ui inverted link list" style={{ display: 'flex', justifyContent: 'space-between', padding: '0 1rem' }}>
                <Link to="#" className="item inverted-hover">
                  <img
                    src="https://i.imgur.com/VnI397M.png"
                    alt="Facebook Logo"
                    style={{ width: '30px', height: '30px' }}
                  />
                </Link>
                <Link to="#" className="item">
                  <img
                    src="https://i.imgur.com/8ELwz4r.png"
                    alt="Instagram Logo"
                    style={{ width: '30px', height: '30px' }}
                  />
                </Link>
                <Link to="#" className="item">
                  <img
                    src="https://i.imgur.com/mXI54Sj.png"
                    alt="Twitter Logo"
                    style={{ width: '70px', height: '60px' }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;

 
