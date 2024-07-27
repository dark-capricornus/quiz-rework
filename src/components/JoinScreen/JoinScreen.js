import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
function JoinScreen({ start }) {
  const { user } = useAuth0();
  const username = user ? user.nickname || user.name : 'Guest';
  
  return (
      <div className="join-screen">
        <h2>Welcome, {username} !</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis nesciunt vero delectus voluptas perspiciatis, ea placeat culpa dolorum reprehenderit temporibus officia aperiam velit ipsa est ratione quo quas quidem quia.
        </p>
        <button onClick={start}>Start Quiz</button>
      </div>
    );
  }
  
  export default JoinScreen;
  