import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/HomePage/Home'
import Login from './components/Login/Login'
import Signup  from './components/Signup/Signup'

function App() {
  return (
    <Router>
    <Navbar />
      <Switch>
        <Route path = '/' exact component ={ Home }/>
        <Route path = '/Login' exact component ={Login} />
        <Route path = '/Signup' exact component ={Signup} />
      </Switch>
  

    </Router>
  );
}

export default App;
