import React, { useState } from 'react';
import './App.css';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [signupSuccess, setSignupSuccess] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = [];


    if(name ==='' || email ==='' || password ===''|| confirmPassword ===''){
      newErrors.push(' Error : All the fields are mandatory');
  }

  if (password !== confirmPassword) {
       newErrors.push('Passwords mismatch');
     }
     if (newErrors.length === 0) {
      // Perform signup logic here
      // Assuming signup is successful for demonstration purposes
      setSignupSuccess(true);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1>Signup</h1>
       <div>
        <label> Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
     
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button type="submit">Sign Up</button>
      {errors.length > 0 && (
        <ul>
          {errors.map((error, index) => (
            <li id='error' key={index}>{error}</li>
          ))}
        </ul>
      )}
      {signupSuccess && (
        <p className="success-message"> Successfully Signed Up!</p>
      )}
    </form>
  );
};

export default SignupForm;
