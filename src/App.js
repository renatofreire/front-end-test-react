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


    if( (this.state.transactionValue === defaultValue) || !this.state.transactionValue ) return false;

    let list = this.state.transactionList;
    let value = this.state.transactionType === 'debit'? this.state.transactionValue*-1 : this.state.transactionValue;

    list.push(value);

    this.setState({...this.state, transactionValue:defaultValue, transactionList: list});

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
            list={this.state.transactionList}
          />

          <Footer />

        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
