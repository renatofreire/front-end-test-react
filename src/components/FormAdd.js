import React, { Component } from 'react';

import { Typography, TextField, RadioGroup, FormControlLabel, Radio, Button} from 'material-ui';

import InputCurrency from './InputCurrency';

class FormAdd extends Component{
    
    render(){
        return(
            <React.Fragment>
                
                <Typography variant='headline' component='h2'>
                    Add new transaction
                </Typography>

                <InputCurrency
                    label='Value:'
                    required
                    value={this.props.transactionValue}
                    changeValue={this.props.changeValue}
                />


                <RadioGroup 
                    arial-label='transaction-type'
                    name='transaction-type'
                    className='radio-group'
                    value={this.props.transactionType}
                    onChange={this.props.changeType}
                >
                    <FormControlLabel value='credit' control={<Radio />} label='Credit' />

                    <FormControlLabel value='debit' control={<Radio />} label='Debit' />
                
                </RadioGroup>

                <p>{this.props.transactionType}</p>

                <Button type='submit' variant='raised'>Add</Button>

            </React.Fragment>
        );
    }
}

export default FormAdd;
