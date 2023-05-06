import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import { useState } from 'react'

import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ChoreList from "./components/chores/ChoreList";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

import userService from "./utils/userService";

function App() {
  //when the app loads up, grab the token from storage if there is one
  const [user, setUser] = useState(userService.getUser())

  // call this function after we make a http request to signup or login a user, to update the token! and our state
  // userService.signup(formData)
  // userService.login(state)
  function handleSignUpOrLogin(){
    // userService.getUser, grabs the token from localstorage, decodes it to an object, that we can we store in our state!
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
          element={<ChoreList loggedUser={user} handleLogout={handleLogout} />}
        />
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/:username"
          element={
            <ProfilePage loggedUser={user} handleLogout={handleLogout} />
          }
        />
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
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;



// import LoginPage from "./pages/LoginPage/LoginPage";
// import ChoreList from "./components/chores/ChoreList";
// import SignupPage from './pages/SignupPage/SignupPage'

// function App() {
//   return (
    
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<h1>Chores</h1>} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/chore" element={<ChoreList />} />
//           <Route path="/signup" element={<SignupPage />} />
//         </Routes>
//       </div>
   
//   );
// }


// export default App;
