import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Home from './Home'
import About from './About';
import Contact from './Contact';
import {useState} from 'react'

function App() {

  const [home, setHome] = useState(true)
  const changeHome = ()=> {
    setHome(!home)
    console.log(home)
  }

 const [about, setAbout] = useState(false)

 const changeAbout = ()=> {
   setAbout(!about)
   setHome(!home)
 }

 const [contact, setContact] = useState(false)

 const changeContact = ()=> {
   setContact(!contact)
   setHome(!home)
 }

  return (
    <div className="App">
      <Nav changeHome= {changeHome} changeAbout= {changeAbout} changeContact ={changeContact} />
      <Home displayStyle='blue'/>
      <About displayStyle={about? 'block': ''}/>
      <Contact displayStyle={contact? 'block': ''}/>
    </div>
  );
}

export default App;
