import { useContext } from 'react';
import { UserContext } from '../contexts';
import { useLocation, useNavigate } from 'react-router-dom';

const UserList = () => {
  const usersContext = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const navigateToUserPage = (userId: any) => {
    let link;

    if (location.pathname === '/users') {
      link = userId;
    } else {
      link = 'users/' + userId;
    }
    navigate(link);
  };

  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
      <thead>
        <tr className="text-base text-gray-700 uppercase bg-gray-200">
          <th className="px-6 py-2">ID</th>
          <th className="px-6 py-2">Name</th>
          <th className="px-6 py-2">Email</th>
          <th className="px-6 py-2">Age</th>
        </tr>
      </thead>
      <tbody>
        {usersContext?.users &&
          usersContext.users.length > 0 &&
          usersContext?.users.map((user) => {
            return (
              <tr
                key={user.id}
                className="bg-white border-b border-gray-200 cursor-pointer hover:bg-gray-200"
                onClick={() => navigateToUserPage(user.id)}
              >
                <td className="px-6 py-4">{user.id}</td>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.age ? user.age : 'N/A'}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default UserList;
