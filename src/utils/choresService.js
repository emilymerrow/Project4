

import tokenService from "./tokenService";
const BASE_URL = '/api/chores/';

export function createChore(data){
	return fetch(BASE_URL, {
		method: 'POST',
		body: data,
		headers: {
			// convention for sending jwts
			Authorization: "Bearer " + tokenService.getToken() // < this is how we get the token from localstorage and and it to our api request
			// so the server knows who the request is coming from when the client is trying to make a POST
		}
	}).then(responseFromTheServer => {
		if(responseFromTheServer.ok) return responseFromTheServer.json() // so if everything went well in the response return 
		//the parsed json to where we called the function

		throw new Error('Something went wrong in create Chore'); // this will go to the catch block when we call the function in the AddPostPuppyForm
		// handleSubmit
	})
}


// This function is being called in the FeedPage when our useEffect runs when the component loads
// in order to get all the posts


export function getAll() {
	// the return, helps because 
	// whenever we call getAll, it returns fetch making an api call
	// if there was no return, fetch would immediatly make the api call when the function is defined

	// we want to wait to make the api call when we want to use getAll (When the FeedPage loads)
	return fetch(BASE_URL, {
	  headers: {
		// convention!
		// It's always going to Bearer + a space + the jwt token
		Authorization: 'Bearer ' + tokenService.getToken()
	  }
	})
	.then(res => res.json());
  }