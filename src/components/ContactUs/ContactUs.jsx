import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here

    // Redirect to the AboutUs page
    // Replace '/about-us' with the correct URL of the AboutUs page
    window.location.href = '/aboutUs';
  };

  return (
    <div>
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '60px 0',
          backgroundColor: '#f0f0f0',
          
          width: '100%',
          
        }}
      >
        <h1
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '36px',
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center',
            marginBottom: '80px',
          }}
        >
          GET IN TOUCH
        </h1>
        <Segment
  inverted
  className="custom-segment"
  style={{
    backgroundColor: '#98C75A',
    width: '50%',
    marginBottom: '30px',
  }}
>
  <Form inverted onSubmit={handleSubmit}>
    <Form.Group widths="equal">
    <Form.Input
    fluid
    label={<label style={{ color: 'black' }}>First name</label>}
    placeholder="First name"
  />
      <Form.Input
    fluid
    label={<label style={{ color: 'black' }}>Last name</label>}
    placeholder="Last name"
  />
    </Form.Group>
    <Form.Group widths="equal">
    <Form.Input
  fluid
  label={<label style={{ color: 'black' }}>Email</label>}
  placeholder="Email"
  type="email"
/>

    </Form.Group>
    <Form.TextArea
  label={<label style={{ color: 'black' }}>Message</label>}
  placeholder="Tell us whats's on your mind..."
  style={{ minHeight: 100 }}
/>

<Form.Checkbox label={<label style={{ color: 'rgba(0, 0, 0, 0.7)' }}>I agree to the Terms and Conditions</label>} />

    <Button type="submit">Submit</Button>
  </Form>
</Segment>

          
      </div>
    

<div className="ui inverted vertical footer segment" style={{ backgroundColor: '#48494b', paddingTop: '0.1rem', paddingBottom: '0.1rem' }}>
<div className="ui container" style={{ marginTop: '0' }}>
  <div className="ui stackable inverted divided equal height stackable grid">
    <div className="eight wide column">
      <div className="ui inverted center aligned">
        <h4 className="ui inverted header" style={{ fontSize: '1.5rem', color: '#FFF', marginBottom: '0.10rem', fontFamily: 'Open Sans, sans-serif' }}>
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
};

export default ContactUs;
