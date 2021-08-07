import React from 'react'
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './routes/Home';
import UpdateRestaurant from './routes/UpdateRestaurant';
import RestaurantDetail from './routes/RestaurantDetail';

function App() {
  return (
    <div className="app">
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/restaurants/:id/update" component={UpdateRestaurant}/>
        <Route exact path="/restaurants/:id" component={RestaurantDetail}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
