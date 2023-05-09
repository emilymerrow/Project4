

import tokenService from "./tokenService";
//Set the base URL for the API endpoint
const BASE_URL = '/api/chores/';

export function createChore(data){
	return fetch(BASE_URL, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
      'Content-Type': 'application/json',
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

export function updateChore(choreId, data) {
  return fetch(`${BASE_URL}${choreId}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + tokenService.getToken()
    }
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Something went wrong in update Chore');
  });
}
export function deleteChore(choreId) {
  return fetch(`${BASE_URL}${choreId}`, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + tokenService.getToken()
    }
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Something went wrong in delete Chore');
  });
}

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
	.then(res => {
    console.log("Fetched chores:", res);
    return res.json();
  });
}
// Create the function to msrk s chore as complete
export function completeChore(choreId, isCompleted) {
  // Send a POST request to the API endpoint with the choreId and userId in the request body
  return fetch(`${BASE_URL}${choreId}/complete`, {
    method: 'POST',
    body: JSON.stringify({ isCompleted }), //incl isCompleted param in the request body
    headers: {
      'Content-Type': 'application/json', // Add the Content-Type header for JSON
      Authorization: 'Bearer ' + tokenService.getToken()
    },
  })
   
  
  .then(res => {
    // Check if the response from the server is ok( status code between 200 and 299)
    if (res.ok) return res.json();
    // Of the response is not ok, throw an error with a message
    throw new Error('Something went wrong in complete Chore')
  });
}