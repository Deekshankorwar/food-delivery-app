import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  const validateName = (event) => {
    const newName = event.target.value;
    setName(newName);

    if (!/^[a-zA-Z0-9]+$/.test(newName)) {
      setError('Please enter only alphanumeric characters.');
    } else {
      setError(null);
    }
  };

  return (
    <form>
      <label for="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={validateName}
        style={{ borderBottom: error ? '2px solid red' : '' }}
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
</div>
<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Password</label>
  <input type="password" class="form-control" id="exampleInputPassword1"/>
</div>
<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Phone no</label>
  <input type="password" class="form-control" id="exampleInputPassword1"/>
</div>
<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">city</label>
  <input type="password" class="form-control" id="exampleInputPassword1"/>
</div>
<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">state</label>
  <input type="password" class="form-control" id="exampleInputPassword1"/>
</div>

<button type="submit" class="btn btn-primary">Register</button>
</form>



  );
}

export default Register;


