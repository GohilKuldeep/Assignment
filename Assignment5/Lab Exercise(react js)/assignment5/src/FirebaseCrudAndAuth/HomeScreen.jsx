import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
    const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth);
    navigate('/');
  };

  return (
     <div>
      <h2>Welcome {auth.currentUser?.displayName}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default HomeScreen
