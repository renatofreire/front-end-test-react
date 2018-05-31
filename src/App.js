import React, { Component } from 'react';

import { MuiThemeProvider } from 'material-ui/styles/index';

import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Header title='Front-end test'/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
