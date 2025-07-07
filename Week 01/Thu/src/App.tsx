import './App.css'
import Homework from './components/Homework/Homework'
import List1 from './components/List/List1/List1'
import List2 from './components/List/List2/List2'
import List3 from './components/List/List3/List3'
import State1 from './components/State/State1/State1'
import State2 from './components/State/State2/State2'

function App() {

  return (
    <div className='container flex flex-col gap-y-[20px] px-3 py-4'>
      <List1/>
      <hr/>
      <List2/>
      <hr/>
      <List3/>
      <hr/>
      <State1/>
      <hr/>
      <State2/>
      <hr/>
      <Homework/>
    </div>
  )
}

export default App
