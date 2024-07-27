import React, { useState } from 'react';
import { useAuth0, Auth0Provider } from '@auth0/auth0-react';
import Navbar from './components/Navbar/Navbar';
import QuizScreen from './components/QuizScreen/QuizScreen';
import JoinScreen from './components/JoinScreen/JoinScreen';
import Login from './components/Auth/Auth';
import { Helmet } from 'react-helmet';

function App() {
  const { isAuthenticated, user, isLoading } = useAuth0();
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <>
      <Helmet><title>React-Quiz App</title></Helmet>
      <Navbar />
      <div className="quiz-container">
        {
          isQuizStarted ? (
            <QuizScreen retry={() => setIsQuizStarted(false)} />
          ) : (
            <JoinScreen start={() => setIsQuizStarted(true)} />
          )
        }
      </div>
    </>
  );
}

const AppWrapper = () => (
  <Auth0Provider
    domain="dev-if4buflzzuezdqrj.us.auth0.com"
    clientId="zOh89nRq82qtLd46y9LhLVeQ63pKpxHd"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);

export default AppWrapper;