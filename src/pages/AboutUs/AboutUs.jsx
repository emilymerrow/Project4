import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
    return (
        <div>
            {/* Navigation bar */}
            <div className="ui inverted fixed menu" style={{paddingTop: "15px"}}>
                <div className="ui container">
                    <Link to="/" className="header item">
                        <img className="logo" src="https://i.imgur.com/ozAKj7c.jpg" />
                        Chores Buster App
                    </Link>
                    <Link to='/' className="item">Home</Link>
                    <Link to="/about" className="item">About Us</Link>
                    <div className="right menu">
                        <Link to="/login" className="item">Login</Link>
                        <Link to="/signup" className="item">Sign Up</Link>
                    </div>
                </div>
            </div>

            {/* Main Content */}

            <div className="ui main text container" style={{ marginTop: '100px' }}>
                <h1 className="ui header">About Us</h1>
                <p>
                  Chores Buster is a family-friendly web application designed to help parents and kids manage chores and allowances in a fun and easy way. The inspiration for this project came from my 9-year-old son, Nathan Merrow. One day, he showed me a paper sketch of an app he had designed, which he believed could help people stay on top of their chores and tasks. Intrigued by his creativity and passion for helping others, I decided to bring his idea to life and create this app.
                </p>
                <h2 className="ui header">Our Team</h2>
                <div className="ui three column grid">
                    <div className="column">
                        <div className="ui segment">
                            <img className="ui centered circular small image"
                            src="https://i.imgur.com/3qyJDh9.jpg"
                            />
                            <h3 className="ui header">Emilia Merrow</h3>
                            <p>Lead Developer</p>
                          </div>
                        </div>
                        <div className="column">
                          <div className="ui segment">
                            <img
                              className="ui centered circular small image"
                              src="https://i.imgur.com/4uVwZsC.jpg"
                            />
                            <h3 className="ui header">Nathan Merrow</h3>
                            <p>Junior Designer & Inspiration</p>
                          </div>
                        </div>
                        <div className="column">
                          <div className="ui segment">
                            <img
                              className="ui centered circular small image"
                              src="https://i.imgur.com/sfXHXOQ.jpg"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Contact Form */}
                      <h2 className="ui header">Contact Us</h2>
                      <div className="ui form">
                        <div className="field">
                          <label>Name</label>
                          <input type="text" name="name" placeholder="Name" />
                        </div>
                        <div className="field">
                          <label>Email</label>
                          <input type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="field">
                          <label>Message</label>
                          <textarea name="message"></textarea>
                        </div>
                        <button className="ui primary button" type="submit">
                          Send
                        </button>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="ui inverted vertical footer segment">
                <div className="ui container">
                    <div className="ui stackable inverted divided equal height stackable grid">
                        <div className="three wide column">
                            <h4 className="ui inverted header">About Us</h4>
                            <div className="ui inverted link list">
                                <Link to="#" className="item">Contact Us</Link>
                                <Link to="#" className="item">Privacy Policy</Link>
                                <Link to="#" className="item">Terms and Conditions</Link>
                            </div>
                        </div>
                        <div className="three wide column">
                            <h4 className="ui inverted header">Connect with Us</h4>
                            <div className="ui inverted link list">
                                <Link to="#" className="item">Facebook</Link>
                                <Link to="#" className="item">Twitter</Link>
                                <Link to="#" className="item">Instagram</Link>
                            </div>
                        </div>
                        <div className="seven wide column">
                            <h4 className="ui inverted header">Chores Buster</h4>
                            <p>
                                {/* ... Text remains unchanged ... */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AboutUs;

