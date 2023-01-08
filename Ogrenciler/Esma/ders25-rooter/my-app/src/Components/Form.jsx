import * as React from 'react';

const LoginForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default LoginForm ;