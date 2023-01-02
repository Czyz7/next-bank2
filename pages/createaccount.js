import React from 'react';

const CreateAccount = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [username, setUsername] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    // Create the new account using the name, email, and password values
    // For example, you could make an HTTP request to your server to create the new account
    // or store the account data in a database
    console.log(name, email, password);

    // Store the login information in local storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Set the username state variable to the name of the new account
    setUsername(name);

    // Set the status message
    setStatus('Account created successfully!');
  }

  function resetForm() {
    // Clear the form input values, status message, and username
    setName('');
    setEmail('');
    setPassword('');
    setStatus('');
    setUsername('');
  }

  return (
    <div >
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={name} onChange={event => setName(event.target.value)} />
        </label>
        <br />
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
        <input type="submit" value="Create Account" />
      </form>
      {status && (
        <>
          <p>{status}</p>
          <button onClick={resetForm}>Add another account</button>
        </>
      )}
      <div className="username" style={{ position: 'absolute', top: 0, right: 0 }}>{username}</div>

    </div>
  );
};

export default CreateAccount;
