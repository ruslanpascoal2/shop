import { Box, Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Products from "../src/pages/products/Products";
import Header from "../src/components/Header";
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/products" component={Products}></Route>
          </Switch>
        </Router>
      </Container>
    </React.Fragment>
  );
}

export default App;
