import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage";
import Footer from "./components/Button";
import './App.css'
import Articles from "./pages/Articles";
import About from "./pages/About";
import { Switch } from "react-router-dom";
import {Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route path="/" exact>
          <Homepage/>
        </Route>
        <Route path="/src/pages/Articles.js">
          <Articles/>
        </Route>
        <Route path="/src/pages/About.js">
          <About/>
        </Route>
      </Switch>
      
      {/* <Footer/> */}
    </div>
  );
}

export default App;
