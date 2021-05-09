import React from 'react';
import GlobalStyle from './globalStyles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services'
import Products from './pages/Products/Products'
import SingUp from './pages/SingUp/SingUp'
import {Navbar, Footer} from './components';



function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/sing-up" exact component={SingUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
