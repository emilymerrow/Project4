import React, { useState } from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from "semantic-ui-react";
import { useNavigate, Link } from "react-router-dom";
import userService from "../../utils/userService";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

export default function Signup({ handleSignUpOrLogin }) {
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConf: "",
    bio: "",
  });

  const [selectedFile, setSelectedFile] = useState('');
  const [error, setError] = useState("");

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function handleFileInput(e) {
    setSelectedFile(e.target.files[0]);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('photo', selectedFile);

    for (let fieldName in state) {
      formData.append(fieldName, state[fieldName]);
    }

    try {
      await userService.signup(formData);
      handleSignUpOrLogin();
      navigate('/');
    } catch (err) {
      console.log(err.message, ' this is the error signing up');
      setError('Check your terminal, there was an error signing up!');
    }
  }

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="https://i.imgur.com/ozAKj7c.jpg" /> Sign Up
        </Header>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              name="username"
              placeholder="Username"
              value={state.username}
              onChange={handleChange}
              required
            />
            <Form.Input
              type="email"
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <Form.Input
              name="password"
              type="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
              required
            />
            <Form.Input
              name="passwordConf"
              type="password"
              placeholder="Confirm Password"
              value={state.passwordConf}
              onChange={handleChange}
              required
            />
            <Form.TextArea
              label="Bio"
              name="bio"
              value={state.bio}
              placeholder="Tell us more about your kids..."
              onChange={handleChange}
            />
            <Form.Field>
              <Form.Input
                type="file"
                name="photo"
                placeholder="Upload Image"
                onChange={handleFileInput}
              />
            </Form.Field>
            <Button type="submit" className="btn" color="teal">
              Signup
            </Button>
          </Segment>
        </Form>
        {error && <ErrorMessage error={error} />}
      </Grid.Column>
    </Grid>
  );
}
