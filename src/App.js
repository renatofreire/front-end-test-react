import React, { Component } from 'react';

import { MuiThemeProvider } from 'material-ui/styles/index';
import { createMuiTheme } from 'material-ui/styles';
import teal from 'material-ui/colors/teal';

import FirebaseService from './services/FirebaseService';

import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body'

const theme = createMuiTheme({
  palette:{
      primary: {
        light: teal[500],
        main: teal[700],
        dark: teal[900],
        contrastText: '#fff',
      },
      secondary: {
        light: teal['A400'],
        main: teal['A700'],
        dark: teal['A700'],
        contrastText: '#FFF',
      }
  }
});

const defaultValue = '0.00';
const FirebaseNode = 'transactions';

class App extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      transactionValue:defaultValue,
      transactionType:'credit',
      transactionList: [],
      total:0
    }
  }


  changeValue = e => {
    this.setState({...this.state, transactionValue:e.target.value})
  }

  changeType = e => {
    this.setState({...this.state, transactionType:e.target.value})    
  }

  updateTransactionList = () => {
    FirebaseService.getDataList(FirebaseNode, (list) => { 
        
      const total = list.reduce( function( acm, item ) {
          return acm + parseFloat(item.value);
      }, 0 );

      this.setState({...this.state, transactionValue:defaultValue, transactionList: list, total: total})
    })
  }

  addTransaction = e => {

    if( (this.state.transactionValue === defaultValue) || !this.state.transactionValue ) return false;

    let newId=0;

    let value = this.state.transactionType === 'debit'? this.state.transactionValue*-1 : this.state.transactionValue;
    newId = FirebaseService.pushData(FirebaseNode, {
      'value': value
    });
  
    this.updateTransactionList();
    
    return newId;
  }

  componentWillMount(){
    this.updateTransactionList();
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          
          <Header title='Front-end test' currentRoute = {this.props.location.pathname} />

          <Body 
            transactionValue={this.state.transactionValue}
            transactionType={this.state.transactionType}
            changeValue={this.changeValue}
            changeType={this.changeType}
            addTransaction={this.addTransaction}
            list={this.state.transactionList}
            total={this.state.total}
          />

          <Footer />

        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
