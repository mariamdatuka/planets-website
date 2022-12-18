import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom'
import Mercury from './components/Planets/Mercury';
import  Earth from './components/Planets/Earth';
import Venus  from './components/Planets/Venus';
import  Jupiter  from './components/Planets/Jupiter';
import { Saturn } from './components/Planets/Saturn';
import { Uranus } from './components/Planets/Uranus';
import { Neptune } from './components/Planets/Neptune';
import Mars from './components/Planets/Mars';




function App() {
  const planets:{path:string, name:string}[]=[
  {
    path:'',
    name:'MERCURY'
  },

  {
    path:'venus',
    name:'VENUS'
  },

  {
    path:'earth',
    name:'EARTH',
  },

  {
    path:'mars',
    name:'MARS',
  },

  {
    path:'jupiter',
    name:'JUPITER',
  },

  {
    path:'saturn',
    name:'SATURN',
  },

  {
    path:'uranus',
    name:'URANUS',
  },

  {
    path:'neptune',
    name:'NEPTUNE'
  }
]

  return (
    <>
    <Navbar planets={planets}/>
    <Routes>
      <Route path='/' element={<Mercury/>}/>
      <Route path='/venus' element={<Venus/>}/>
      <Route path='/earth' element={<Earth/>}/>
      <Route path='/mars' element={<Mars/>}/>
      <Route path='/jupiter' element={<Jupiter/>}/>
      <Route path='/saturn' element={<Saturn/>}/>
      <Route path='/uranus' element={<Uranus/>}/>
      <Route path='/neptune' element={<Neptune/>}/>
    </Routes>
    </>
  );
}

export default App;


