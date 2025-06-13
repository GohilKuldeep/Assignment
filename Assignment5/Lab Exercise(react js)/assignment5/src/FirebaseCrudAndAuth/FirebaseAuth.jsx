import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, provider } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const FirebaseAuth = () => {
    const navigate = useNavigate();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        navigate('/dashboard');
      })
      .catch(error => alert(error.message));
  };
  
  return (
     <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Sign In with Google</button>
    </div>
  )
}

export default FirebaseAuth
