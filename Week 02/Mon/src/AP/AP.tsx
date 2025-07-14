import { useEffect, useState } from 'react';
import FormUpdateUser from '../Components/FormUpdateUser';
import { deleteUser, getUserById, getUsersApi, updateUser } from '../services';

export type User = {
  id: number;
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
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [form, setForm] = useState({
    showForm: false,
    type: 'Create New User',
  });

  const showFormCreateUser = () => {
    setForm({ showForm: true, type: 'Create New User' });
  };

  const showFormUpdateUser = async (userID: number) => {
    try {
      const response = await getUserById(userID);
      if (response.error || response.message) {
        throw new Error(response.message);
      } else {
        setSelectedUser(response);
        setForm({ showForm: true, type: 'Update User' });
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log('Get user by id successfully!');
    }
  };

  const handleUpdateUser = async (user: any) => {
    // console.log(user);
    try {
      if (selectedUser) {
        const response = await updateUser(selectedUser.id, user);
        if (response.error || response.message) {
          throw new Error(response.message);
        } else {
          console.log(response);
          user.id = selectedUser.id;
          setUsers((prev) => {
            return prev.map((item) => (item.id === user.id ? user : item));
          });
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log('Finish update process');
    }
  };

  const handleDeleteUser = async (userID: number) => {
    try {
      const response = await deleteUser(userID);
      if (response.message === 'Customer deleted successfully') {
        setUsers((prev) => prev.filter((user) => user.id !== userID));
      }
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
        const response = await getUsersApi();
        // console.log(response);

        if (response.error || response.message) {
          throw new Error(response.message);
        } else {
          setUsers(response);
        }
      } catch (error) {
        console.log(error);
      } finally {
        console.log('Process get users successfully!');
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

      {form.showForm && (
        <div className="absolute top-0 left-[35%]">
          <FormUpdateUser
            user={selectedUser}
            onHideForm={() => setForm((prev) => ({ ...prev, showForm: false }))}
            onUpdateUserInfo={handleUpdateUser}
            onCreatUser={handleCreateUser}
            typeOfForm={form.type}
          />
        </div>
      )}
    </div>
  );
};

export default AP;
