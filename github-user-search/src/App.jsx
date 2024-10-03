import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/Search';
import './index.css'; // Include Tailwind CSS

function Home() {
  return (
    <div>
      <h2 className="text-center text-2xl font-bold my-4">GitHub User Search</h2>
      <Search />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
