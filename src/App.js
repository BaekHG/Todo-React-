import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Home from './routes/Home';
function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home}></Route>
      {/* <Route path='/' */}
    </HashRouter>
  );
}


export default App;
