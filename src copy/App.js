import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Discover from './pages/Discover'
import Search from './pages/Search'
import Navbar from './components/Navbar'
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/discover">
          <Discover />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;