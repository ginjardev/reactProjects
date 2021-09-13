import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Home from './Home'
import About from './About';
import Contact from './Contact';
import {useState} from 'react'

function App() {

  const [link, setLink] = useState('home')

 const routes = [
   {
     title:'home',
     component: Home
   },
   {
    title:'about',
    component: About
  },
  {
    title:'contact',
    component: Contact
  },
 ]

  return (
    <div className="App">
      <Nav setLink={setLink}/>

      {routes.map(route => route.title === link ? <route.component/> : '') }
    </div>
  );
}

export default App;
