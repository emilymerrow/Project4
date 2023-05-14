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
          minHeight: '100vh',
          width: '100%',
          marginTop: '80px',
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
    </div>
  );
};

export default ContactUs;
