

import React, { useState, useEffect } from 'react';
import { Route, useParams } from 'react-router-dom';
import usersDataRaw from './users.json';

type User = {
  id: number;
  name: string;
  email : string;
};

const usersData: User[] = usersDataRaw as User[];

function UserProfile() {
  const { id } = useParams<{ id?: string }>();
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    if (id) {
      const userId = parseInt(id, 10);
      const user = usersData.find(user => user.id === userId);
      if (user) {
        setUserData(user);
      }
    }
  }, [id]);

  if (!userData) {
    return <p>Utilisateur non trouvé</p>;
  }

  return (
    <div>
      <h1>Profil de {userData.name}</h1>
      <p>Email : {userData.email}</p>
    </div>
  );
}

export default UserProfile;