import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import userService from "../../utils/userService";


//use the useEffect hook to check if the logged in user has userType = 1. 
//If not, use useHistory to redirect them to another page.


export default function MyChildren() {

    // Set up state variables to hold the user and their children
    const [user, setUser] = useState(null);
    const [children, setChildren] = useState([]);

    //Get the "history" object from the react-router-dom package
    const history = useHistory();

    // Use the useEffect hook to fetch the user's data and their children when the component mounts
    useEffect(() => {
        //Define an async function to fetch the data
        async function fetchData() {
            // Call the "getUser"  method from the "userService" module and
            //store the result in a variable called "user"
            //Get the current user's data
            const user = await userService.getUser();
            //If the user is not a parent. redirect to the home page
            if(user.userType !== 1) {
                history.push("/");
            }
            // Set the "user" state variable to the retrieved user object
            setUser(user);
        
   // If the user is a parent, get their children
   if(user) {
    const children = await userService.getChildren(user.username);
    setChildren(children);
   }
}
//Call the fetchData function when the component mounts
fetchData();
}, [history]);

    //Render the following content if the "user" state variable is not null
    return (
        <div>
            {user && (
                <>
                <h1>Welcome {user.username}!</h1>
                <p>Here are your children:</p>
                <ul>
                    {children.map((child) => (
                        <li key={child._id}>{child.username}</li>
                    ))}
                </ul>
                </>
            )}
        </div>
    );
 }