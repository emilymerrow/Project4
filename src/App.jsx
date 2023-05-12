import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import { useState } from 'react'

import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ChorePage from "./pages/ChorePage/ChorePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AboutUs from './pages/AboutUs/AboutUs';
import Deductions from './components/Deductions/Deductions';

import userService from "./utils/userService";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";


function App() {
  //when the app loads up, grab the token from storage if there is one
  const [user, setUser] = useState(userService.getUser())


  // call this function after we make a http request to signup or login a user, to update the token! and our state
  // userService.signup(formData)
  // userService.login(state)
  function handleSignUpOrLogin(){
    // userService.getUser, grabs the token from localstorage, decodes it to an object, that we can we store in our state!
    console.log(user);
    setUser(userService.getUser())
  }

  function handleLogout() {
    console.log('being called')
    userService.logout();
    setUser(null);
  }
  if (user) {
    // are we logged in?
    return (
      <Routes>
        <Route
          path="/"
          element={<ChorePage loggedUser={user} handleLogout={handleLogout} />}
        />
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        {/* <Route
          path="/:username"
          element={
            <ProfilePage loggedUser={user} handleLogout={handleLogout} />          }
        /> */}
        <Route path="/deductions" element={<Deductions />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    );
}

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
    <Route
      path="/signup"
      element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
    />
    <Route path="/aboutUs" element={<AboutUs />} />
    <Route path="/privacy" element={<PrivacyPolicy />} />
    <Route path="/*" element={<Navigate to={user ? '/' : '/aboutUs'} />} />
  </Routes>
  );
}

export default App;



