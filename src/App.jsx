import React, { useState } from 'react';
import users from './assets/json/users.json';
import { getRandomIndex as random } from './utils/getRandomNumber';
import UserCard from './components/UserCard';

const App = () => {
  const [userIndex, setUserIndex] = useState(random(0, users.length - 1));
  const user = users[userIndex];

  const changeUser = () => {
    let newUserIndex = random(0, users.length - 1);

    while (newUserIndex === userIndex) {
      newUserIndex = random(0, users.length - 1);
    }

    setUserIndex(newUserIndex);
  };

  return (
    <div className="h-full flex flex-col justify-center items-center p-10">
      <UserCard user={user} />
      <button
        onClick={changeUser}
        className="bg-amber-300 px-4 py-2 mt-4 hover:bg-amber-500 rounded-full"
      >
        <i className="fa-solid fa-repeat"></i>
      </button>
    </div>
  );
};

export default App;
