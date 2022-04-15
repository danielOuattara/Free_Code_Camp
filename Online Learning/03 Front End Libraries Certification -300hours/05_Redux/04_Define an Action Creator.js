/* 
After creating an action, the next step is sending the action 
to the Redux store so it can update its state. In Redux, you 
define action creators to accomplish this. An action creator 
is simply a JavaScript function that returns an action. 
In other words, action creators create objects that represent 
action events.

Define a function named 'actionCreator()' that returns the 
action object when called.
*/


// Define an action creator here:

const action = {
    type: 'LOGIN'
  }
  
  const actionCreator = () => {
    return action;
  }

  //--------------------------------  OR
  const actionCreator = () => {
    return {
      type: 'LOGIN'
    };
  }