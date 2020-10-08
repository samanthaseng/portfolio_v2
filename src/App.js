import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';

import HomeScreen from './components/HomeScreen';
import project from './reducers/project.reducer';

const store = createStore(combineReducers({project}));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={HomeScreen} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
