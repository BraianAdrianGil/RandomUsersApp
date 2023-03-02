import React from 'react';

const UserCard = ({ user }) => {
  const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
  return (
    <div>
      <div>
        <img
          className="mx-auto"
          src={user.picture.large}
          alt={`Foto de ${user.name.first}`}
        />
      </div>
      <div className="text-white text-center mt-5">
        <h2>{fullName}</h2>
        <p>Email: {user.email}</p>
        <p>{user.gender}</p>
      </div>
    </div>
  );
};

export default UserCard;
