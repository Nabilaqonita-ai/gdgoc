import React from 'react';
import avatar from '../assets/images/profile.webp';
import Button from './Button.jsx';

const ProfileCard = ({ setIsDarkMode }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
      <div className="flex items-center gap-4">
        <img src={avatar} className="w-20 h-20 rounded-full object-cover no-invert" alt="Profile" />
        <div>
          <h3 className="text-lg font-semibold">Nabila Qonita</h3>
          <p className="text-sm text-gray-500 dark:text-gray-300">Frontend Developer</p>
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-700 dark:text-gray-200">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
        voluptates eius nisi iusto error, quo illo, reprehenderit eum maiores
        facilis perspiciatis porro? Consequatur ad recusandae hic deleniti
        blanditiis quaerat obcaecati.
      </p>

      <div className="mt-4">
        <Button
          variant="secondary"
          onClick={() => {
            console.log('Switch Mode clicked');
            if (setIsDarkMode) setIsDarkMode(prev => !prev);
          }}
        >
          Switch Mode
        </Button>
      </div>
    </div>
  );
};

export default ProfileCard;