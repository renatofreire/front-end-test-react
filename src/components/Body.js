import React, { Component } from 'react';

import FormAdd from './FormAdd';


class Body extends Component{

    render(){
        return(
            <div>
                
                <FormAdd 
                    transactionValue={this.props.transactionValue}
                    transactionType={this.props.transactionType}
                    changeValue = {this.props.changeValue}
                    changeType={this.props.changeType}
                    addTransaction={this.props.addTransaction}
                />
            </div>
        );
    }
}

export default Body;
