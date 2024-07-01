import React from 'react';
import profilePic from '../assets/images/profile-pic.jpg';

const Profile: React.FC = () => {
  return (
    <div className="profile">
      <div className="profile-content">
        <div
          className="profile-pic"
          style={{ 
            backgroundImage: `url(${profilePic})`,
            width: '150px', // Adjust the size as needed
            height: '150px', // Adjust the size as needed
          }}
        ></div>
        <div className="profile-details">
          <p className="profile-name">Tanishq Sadanala</p>
          <p className="profile-description">
            Welcome to my corner of the internet! I'm Tanishq Sadanala, a passionate writer and blogger sharing my journey and insights on various topics that intrigue me. Stay tuned for more!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
