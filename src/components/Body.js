import React, { Component } from 'react';

import FormAdd from './FormAdd';


class Body extends Component{

    render(){
        return(
            <div>
                <h1>Body</h1>

                <FormAdd 
                    transactionValue={this.props.transactionValue}
                    transactionType={this.props.transactionType}
                    changeValue = {this.props.changeValue}
                    changeType={this.props.changeType}
                />
            </div>
        );
    }
}

export default Body;
