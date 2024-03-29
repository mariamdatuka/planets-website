import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom'
import Mercury from './components/Planets/Mercury';
import  Earth from './components/Planets/Earth';
import Venus  from './components/Planets/Venus';
import  Jupiter  from './components/Planets/Jupiter';
import  Saturn  from './components/Planets/Saturn';
import  Uranus  from './components/Planets/Uranus';
import  Neptune  from './components/Planets/Neptune';
import Mars from './components/Planets/Mars';




function App() {


  return (
    <>
    <Navbar/>
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


