import React, { Component } from 'react';

import FormAdd from './FormAdd';
import List from './List'


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

                <List 
                    list={this.props.list}
                    total='0'
                />

            </div>
        );
    }
}

export default Body;
