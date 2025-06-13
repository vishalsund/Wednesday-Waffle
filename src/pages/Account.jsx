// src/pages/Account.jsx
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Account() {
  const { user, signOut, updateUserData } = useAuth();
  const navigate = useNavigate();

  const [profilePic, setProfilePic] = useState('');
  const [workouts, setWorkouts] = useState(0);
  const [sleeps, setSleeps] = useState(0);

  useEffect(() => {
    if (user) {
      setProfilePic(user.profilePic || '');
      setWorkouts(user.workouts || 0);
      setSleeps(user.sleeps || 0);
    }
  }, [user]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const newPic = reader.result;
      setProfilePic(newPic);
      updateUserData({ profilePic: newPic });
    };
    reader.readAsDataURL(file);
  };

  if (!user) return <div className="p-4">Please sign in.</div>;

  return (
    <div className="account-page">
      <div className="profile-section">
        <div className="profile-pic-section">
          <img
            src={profilePic || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="profile-pic"
          />
          <input type="file" onChange={handleImageUpload} />
        </div>
        <div className="profile-info-section">
          <h1 className="usernameText">{user.username}</h1>
          <div className="tracker-section">
            <div className="tracker">
              <h3>Workouts: {workouts}</h3>
            </div>
            <div className="tracker">
              <h3>Sleeps: {sleeps}</h3>
            </div>
          </div>
        </div>
      </div>

      <button
        className="signout-btn"
        onClick={() => {
          signOut();
          navigate('/');
        }}
      >
        Sign Out
      </button>
    </div>
  );
}

export default Account;
