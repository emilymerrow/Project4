import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div>
      <Header />

      <div className="ui main text container" style={{ marginTop: '100px' }}>
        <h1
          className="ui header"
          style={{
            color: '#DA1751',
            fontFamily: 'Georgia, serif',
            fontSize: '2.5em',
            paddingBottom: '20px'
          }}
        >
          WELCOME!
        </h1>

        <p style={{ fontSize: '1.2em', fontFamily: 'Georgia, serif' }}>
          Chores Buster is a fun, family-friendly web app designed to make managing chores and allowances a breeze for
          families. Inspired by a 9-year-old as a way to stay out of trouble for missed chores, his innovative idea has
          been transformed into a handy tool for parents and kids to enjoy together.
        </p>
        <h2
          className="ui header"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '2em',
            paddingTop: '20px',
            paddingBottom: '20px',
            textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)'
          }}
        >
          Our Team
        </h2>

        <div className="ui two column grid" style={{ marginBottom: '2rem' }}>
          <div className="column">
            <div className="ui segment">
              <img className="ui centered circular team-member-image" src="https://i.imgur.com/lzKEVER.jpg" />
              <h3 className="ui header">Emily Merrow</h3>
              <p>Lead Developer</p>
              <p>Software Engineer</p>
            </div>
          </div>
          <div className="column">
            <div className="ui segment">
              <img className="ui centered circular team-member-image" src="https://i.imgur.com/0GascXN.jpg" />
              <h3 className="ui header">Nathan Merrow</h3>
              <p>Junior Designer & Inspiration</p>
              <p>Testing Engineer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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
          <Link to="/privacy" className="item inverted-hover" style={{ fontSize: '1.2rem', color: '#FFF' }}>
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