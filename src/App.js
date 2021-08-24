import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header"
import Login from "./pages/Login/index"

import { Route, Switch } from 'wouter';

import {UserContextProvider} from "./context/UserContext"

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Header />
        <Switch>
              <Route 
                component={Login}
                path="/login"
              />
        </Switch>
        <div className="App-header">
          <h1>Login React App</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
