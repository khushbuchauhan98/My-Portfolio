import Nav from '../Components/Nav';
import '../Css/App.css';
import { Route,Routes } from 'react-router-dom';
import Index from '../Pages/Index';
import About from '../Pages/About';
import Blog from '../Pages/Blog';
import Social from '../Pages/Social';
import NotFound from '../Pages/NotFound';
import MyProjects from './MyProjects';
import MyWork from '../Pages/MyWork';


function App() {
  return (
    <div className="container">
      <Nav/>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/MyProjects' element={<MyWork/>}/>
        <Route path='*' element={<NotFound/>}/>

      </Routes>
    </div>
  );
}

export default App;
