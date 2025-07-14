import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../contexts';
import type { User } from '../contexts';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User>({
    id: null,
    name: '',
    email: '',
    age: null,
  });
  const usersContext = useContext(UserContext);
  console.log(id);

  useEffect(() => {
    if (id) {
      const user = usersContext?.users.find((user: User) => {
        return user.id === id;
      });
      console.log(user);

      if (user) {
        setUser(user);
      }
    }
  }, []);

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
