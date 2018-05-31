import React, { Component } from 'react';

import { MuiThemeProvider } from 'material-ui/styles/index';

import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {transactionValue:'--', transactionType:'credit'}
  
  }


  changeValue = e => {
    this.setState({...this.state, transactionValue:e.target.value})
  }

  changeType = e => {
    this.setState({...this.state, transactionType:e.target.value})    
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          
          <Header title='Front-end test'/>

          <Body 
            transactionValue={this.state.transactionValue}
            transactionType={this.state.transactionType}
            changeValue={this.changeValue}
            changeType={this.changeType}
          />

          <Footer />

        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
