import { useEffect, useState } from 'react';
import FormUpdateUser from './FormUpdateUser';

export type User = {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  birthday: string;
  // Add other fields if needed
};

const AP = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showForm, setShowForm] = useState({
    showForm: false,
    type: 'Create New User',
  });

  const showFormCreateUser = () => {
    setShowForm({ showForm: true, type: 'Create New User' });
  };

  const showFormUpdateUser = async (userID?: number) => {
    try {
      await fetch(`https://server.aptech.io/online-shop/customers/${userID}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          // Check if the response was successful (e.g., status code 200-299)
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          // Parse the response body as JSON
          return response.json();
        })
        .then((data) => {
          setSelectedUser(data);
          setShowForm((prev) => ({
            ...prev,
            showForm: true,
            type: 'Update User',
          }));
        });
    } catch (error) {
      console.log(error);
    } finally {
      console.log('Get users successfully!');
    }
  };

  const handleUpdateUser = async (user: User) => {
    const userCopy = { ...user };
    delete userCopy.id;
    try {
      await fetch(`https://server.aptech.io/online-shop/customers/${user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userCopy),
      })
        .then((response) => {
          // Check if the response was successful (e.g., status code 200-299)
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          // Parse the response body as JSON
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setUsers((prev) => {
            return prev.map((item) => (item.id === user.id ? user : item));
          });
        });
    } catch (error) {
      console.log(error);
    } finally {
      console.log('Finish update process');
    }
  };

  const handleDeleteUser = async (userID?: number) => {
    try {
      await fetch(`https://server.aptech.io/online-shop/customers/${userID}`, {
        method: 'DELETE',
      })
        .then((response) => {
          // Check if the response was successful (e.g., status code 200-299)
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          // Parse the response body as JSON
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setUsers((prev) => prev.filter((user) => user.id !== userID));
        });
    } catch (error) {
      console.log(error);
    } finally {
      console.log('Finish update process');
    }
  };

  const handleCreateUser = async (user: any) => {
    try {
      await fetch('https://server.aptech.io/online-shop/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
        .then((response) => {
          // Check if the response was successful (e.g., status code 200-299)
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          // Parse the response body as JSON
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setUsers((prev) => [...prev, data]);
        });
    } catch (error) {
      console.log(error);
    } finally {
      console.log('Finish create new user process');
    }
  };

  // Get users
  useEffect(() => {
    const getUsers = async () => {
      try {
        await fetch('https://server.aptech.io/online-shop/customers', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => {
            // Check if the response was successful (e.g., status code 200-299)
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            // Parse the response body as JSON
            return response.json();
          })
          .then((data) => {
            setUsers(data);
          });
      } catch (error) {
        // throw new Error(error);
      } finally {
        console.log('Get users successfully!');
      }
    };

    getUsers();
  }, []);

  return (
    <div className="relative">
      {/* Create new User */}
      <button
        className="cursor-pointer px-3 py-2 m-2 font-semibold text-xl text-white bg-green-500 rounded"
        onClick={showFormCreateUser}
      >
        Create New User
      </button>

      {/* List of Users */}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr className="cursor-pointer">
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              First Name
            </th>
            <th scope="col" className="px-6 py-3">
              Last Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Phone Number
            </th>
            <th scope="col" className="px-6 py-3">
              Address
            </th>

            <th scope="col" className="px-6 py-3">
              Birthday
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => {
            return (
              <tr
                key={item.id}
                // dark:bg-gray-800 dark:border-gray-700
                className="bg-white border-b border-gray-200 cursor-pointer hover:bg-gray-200"
              >
                <td className="px-6 py-4">{item.id}</td>
                <td className="px-6 py-4">{item.firstName}</td>
                <td className="px-6 py-4">{item.lastName}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.phoneNumber}</td>
                <td className="px-6 py-4">{item.address}</td>
                <td className="px-6 py-4">{item.birthday}</td>
                <td className="px-6 py-4 flex flex-col gap-2">
                  <button
                    className="cursor-pointer p-2 rounded text-white font- bg-blue-600"
                    onClick={() => showFormUpdateUser(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="cursor-pointer p-2 rounded text-white font-semibold bg-red-600"
                    onClick={() => handleDeleteUser(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {showForm.showForm && (
        <div
          className="absolute top-[50%] left-[50%]"
          style={{ transform: 'translate(-50%,-50%)' }}
        >
          <FormUpdateUser
            user={selectedUser}
            onHideForm={() =>
              setShowForm((prev) => ({ ...prev, showForm: false }))
            }
            onUpdateUserInfo={handleUpdateUser}
            onCreatUser={handleCreateUser}
            typeOfForm={showForm.type}
          />
        </div>
      )}
    </div>
  );
};

export default AP;
