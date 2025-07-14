import './App.css';
import AP from './AP/AP';
import Homework from './Homework/Homework';

function App() {
  return (
    <>
      <div className="container">
        {/* Afternoon Practices */}
        <section className="ap">
          <h1 className="text-3xl font-bold uppercase text-center mb-3">
            Afternoon Practices
          </h1>
          <AP />
        </section>

        <hr className="text-gray-400 my-4" />

        {/* Homeword */}
        <Homework />
      </div>
    </>
  );
}

export default App;
