import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage";
import NavFooter from "./components/Button";
import './App.css'


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Homepage/>
      <NavFooter/>
    </div>
  );
}

export default App;
