import React from 'react';
import '../assets/css/todolist.css';
import avatar from '../assets/images/profile.webp';
import Button from './Button';

const ProfileCard = ({ setIsDarkMode }) => {
  return (
    <div className="card profile-section">
      <div className="profile-header">
        <img src={avatar} className="avatar" alt="Profile" />
        <div>
          <h3>Nabila Qonita</h3>
          <p className="role">Frontend Developer</p>
        </div>
      </div>
      <p className="bio">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
        voluptates eius nisi iusto error, quo illo, reprehenderit eum maiores
        facilis perspiciatis porro? Consequatur ad recusandae hic deleniti
        blanditiis quaerat obcaecati.
      </p>

      {/* .card.profile-section */}
      <Button
        variant="secondary"
        onClick={() => setIsDarkMode(prev => !prev)}
      >
        Switch Mode
      </Button>
    </div>
  );
};

export default ProfileCard;