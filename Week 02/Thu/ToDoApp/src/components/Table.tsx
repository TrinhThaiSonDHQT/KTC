import type { Task } from '../pages/AllTasks';

type Props = {
  tasks: Task[];
};

const Table = ({ tasks }: Props) => {
  // console.log(tasks);
  
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          {tasks.length > 0 &&
            Object.entries(tasks[0]).map((item, index) => {
              return (
                <th key={index} scope="col" className="px-3 py-2">
                  {item[0]}
                </th>
              );
            })}
        </tr>
      </thead>
      <tbody>
        {tasks.map((item) => {
          return (
            <tr
              key={item.id}
              className="bg-white border-b border-gray-200 cursor-pointer hover:bg-gray-200"
            >
              {Object.entries(item).map((item, index) => {
                if (
                  item[0] === 'created_time' ||
                  item[0] === 'updated_time' ||
                  item[0] === 'start_date' ||
                  item[0] === 'due_date'
                ) {
                  if (item[1]) {
                    item[1] = new Date(item[1]).toISOString().substring(0, 10);
                  }
                }
                return (
                  <td key={index} className="text-center px-3 py-2">
                    {item[1] ? item[1] : 'empty'}
                  </td>
                );
              })}

              {/* <td className="px-6 py-4 flex flex-col gap-2">
                <button className="cursor-pointer p-2 rounded text-white font- bg-blue-600">
                  Edit
                </button>
                <button className="cursor-pointer p-2 rounded text-white font-semibold bg-red-600">
                  Delete
                </button>
              </td> */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
