import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom'
import Home from './Home';
import PizzaForm from './PizzaForm'
import Submitted from './Submitted'

const App = () => {
  const [order, setOrder] = useState({})

  return (
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/pizza' component={() => <PizzaForm setOrder={setOrder} order={order} />}/>
      <Route path='/submitted' component={() => <Submitted order={order}/>}/>
    </Switch>
  );
};
export default App;
