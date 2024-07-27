import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../../../src/index.css';

function Login({ onLogin }) {
  const { loginWithRedirect, isAuthenticated, isLoading, error } = useAuth0();

  React.useEffect(() => {
    if (!isLoading && isAuthenticated) {
      onLogin();
    }
  }, [isAuthenticated, isLoading, onLogin]);

  if (isLoading) {
    return <div className='container quiz-container'>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='container auth-container'>
      <h2>Authenticate with Google</h2>
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  );
}

export default Login;