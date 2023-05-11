import {
    Button,
    Form,
    Grid,
    Header,
    Image,
    Message,
    Segment,
  } from "semantic-ui-react";
  
  import { useState } from "react";
  import userService from "../../utils/userService";
  import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
  
  // this is a hook that allows us to programatically navigate to a different route
  import { useNavigate } from "react-router-dom";
  
  export default function AddChildren({handleSignUpOrLogin}) {
  
    // navigate is a function that accepts a route to change too!
    const navigate = useNavigate()
  
    //Update the initial state of the component to include fields for adding children.
    const [state, setState] = useState({
      childName: "",
      childAge: "",
      childGender: "",
     
    });
  
    // profile image
    const [selectedFile, setSelectedFile] = useState('')
  
    const [error, setError] = useState("");
  
    //Modify the handleChange function to handle changes in the new fields
    function handleChange(e) {
      setState({
          ...state,
          // es6 computed property syntax
          [e.target.name]: e.target.value
      })
    }
  
    function handleFileInput(e) {
      // this takes the first file the user uploads
      // and sets it in state
      console.log(e.target.files)
      setSelectedFile(e.target.files[0]);
    }
  

    //Update the handleSubmit function
    // to call the signup method of the userService module with the modified user object
    async function handleSubmit(e){
      e.preventDefault();
        const child = {
            username: state.childName,
            age: state.childAge,
            gender: state.childGender,
            userType: 2,
            parentUsername: getUser().username,
        };
  
      try {
  
          await userService.signup(child); //this makes the http request to the our express server /api/users/signup
          // when it finishes it stores the jwt toke in localstorage,
          // we can switch the view (go to the feed page or something!)
      handleSignUpOrLogin(); // this updates the state in the app with the correct token from localstorage!
      navigate('/ChorePage'); // this programmatically navigates the client to the home page (refere to app.js for the '/')
  
      } catch(err){
          console.log(err.message, ' error signing up a child');
          setError('Check your terminal, there was an error signing up a child!')
      }
  
  
    }
  
    return (
      <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="purple" textAlign="center">
            <Image src="https://i.imgur.com/ozAKj7c.jpg" /> Sign Up
          </Header>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                name="childName"
                placeholder="Child's Name"
                value={state.childname}
                onChange={handleChange}
                required
              />
              <Form.Input
                name="childAge"
                placeholder="Age"
                type="number"
                value={state.childAge}
                onChange={handleChange}
                required
              />
              
              <Form.Field>
                <label>Gender</label>
                <select name="childGender" value={state.childGender} onChange={handleChange} required>
                <option value="">Choose...</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                </select>
                </Form.Field>
             
              <Button type="submit" className="btn">
                Add Child
              </Button>
            </Segment>
            {error ? <ErrorMessage error={error} /> : null}
          </Form>
        </Grid.Column>
      </Grid>
    );


  }
  