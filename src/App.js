import React, { Component } from 'react';

import { MuiThemeProvider } from 'material-ui/styles/index';

import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          
          <Header title='Front-end test'/>

          <Body />

          <Footer />

        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
