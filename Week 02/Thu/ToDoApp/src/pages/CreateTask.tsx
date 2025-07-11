import UpdateForm from '../components/UpdateForm';

const CreateTask = () => {
  return (
    <div className="flex justify-center">
      <UpdateForm hasCreateTask={true} />
    </div>
  );
};

export default CreateTask;
