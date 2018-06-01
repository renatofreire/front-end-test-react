import React, { Component } from 'react';

import { MuiThemeProvider } from 'material-ui/styles/index';

import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body'



const defaultValue = '0.00';

class App extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      transactionValue:defaultValue,
      transactionType:'credit',
      transactionList: []
    }
  }


  changeValue = e => {
    this.setState({...this.state, transactionValue:e.target.value})
  }

  changeType = e => {
    this.setState({...this.state, transactionType:e.target.value})    
  }

  addTransaction = e => {

    console.log( this.state.transactionValue );

    if( (this.state.transactionValue === defaultValue) || !this.state.transactionValue ) return false;

    let list = this.state.transactionList;
    list.push(this.state.transactionValue);

    this.setState({...this.state, transactionValue:defaultValue, transactionList: list});

    console.log(this.state.transactionList);
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
            addTransaction={this.addTransaction}
          />

          <Footer />

        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
