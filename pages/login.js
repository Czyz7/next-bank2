import { useState } from 'react';
import Router from 'next/router';
import { useSession, signIn, signOut } from 'next-auth/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { session, loading } = useSession();

  function handleSubmit(event) {
    event.preventDefault();

    // Check if the email and password match a valid account
    // For example, you could make an HTTP request to your server to verify the email and password
    // or check if the email and password match an account in a database
    if (email === 'user@example.com' && password === 'password') {
      // Save the email and password to local storage
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);

      // Redirect the user to the dashboard or another protected page
      Router.push('/dashboard');
    } else {
      // Set the error message if the email and password do not match a valid account
      setErrorMessage('Invalid email or password');
    }
  }

  function handleLogout() {
    // Clear the email and password from local storage
    localStorage.removeItem('email');
    localStorage.removeItem('password');

    // Redirect the user to the login page
    Router.push('/login');
  }

  function handleGitHubSubmit(event) {
    event.preventDefault();
    signIn('github');
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
        </label>
        <br />
        <input type="submit" value="Log in" />
      </form>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {localStorage.getItem('email') && (
        <>
          <p>Logged in as {localStorage.getItem('email')}</p>
          <button onClick={handleLogout}>Log out</button>
        </>
      )}
      <form onSubmit={handleGitHubSubmit}>
        <button type="submit">Log in with GitHub</button>
      </form>
      {!loading && session && (
        <button onClick={signOut}>Log out</button>
      )}
    </div>
  );
};

export default Login;
