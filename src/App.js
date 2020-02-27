import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/home";
import Contact from "./components/Contact/contact";
import Resume from "./components/Resume/resume";
import Apps from "./components/Apps/apps";
import Layout from "./components/Layout/layout";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import NoMatch from "./components/noMatch";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Header></Header>
          <Layout>
            <Switch>
              <Route exact path="/React-Portfolio" component={Home} />
              <Route path="/React-Portfolio/contact" component={Contact} />
              <Route path="/React-Portfolio/apps" component={Apps} />
              <Route path="/React-Portfolio/resume" component={Resume} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;
