import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../contexts';
import type { User } from '../contexts';

const UserDetail = () => {
  const { userId } = useParams();
  const [user, setUser] = useState<User>({
    id: null,
    name: '',
    email: '',
    age: null,
  });
  const usersContext = useContext(UserContext);

  useEffect(() => {
    if (userId) {
      const convertUserId = Number.parseInt(userId);
      const user = usersContext?.users.find((user: User) => {
        return user.id === convertUserId;
      });
      console.log(user);
      
      if (user) {
        setUser(user);
      }
    }
  }, []);

  console.log(user);
  
  return (
    <div>
      {user ? (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Age: {user.age}</p>
        </>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default UserDetail;
