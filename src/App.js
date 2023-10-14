//import logo from './logo.svg';
import './App.css';
//import Main from './components/Main';
import Today from './components/Today';
import Upcoming from './components/Upcoming';
import Calendar from './components/Calendar';
import StickyNotes from './components/StickyNotes';
import LeftMenu from './components/LeftMenu';
import RightMenu from './components/RightMenu';
import { useState } from 'react';


function App() {

  const TaskArr = [<Upcoming/>, <Today/>, <Calendar/>, <StickyNotes/> ]

  const [main, setmain] = useState(TaskArr[0]);

  const changetasktype = (id) => {
    setmain(TaskArr[id])
  }

  return (
    <div className="app">
    <LeftMenu handleClick={changetasktype}/>
    {main}
    <RightMenu/>
    </div>
  );
}

export default App;
