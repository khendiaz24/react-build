import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/home';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <main className="main">
          <Route exact path="/" component={Home}/>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
