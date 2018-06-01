import React, { Component } from 'react';

import { Typography, RadioGroup, FormControlLabel, Radio, Button} from 'material-ui';

import InputCurrency from './InputCurrency';

class FormAdd extends Component{

    submit = e =>{
        e.preventDefault();
        this.props.addTransaction();
    }
    
    render(){
        return(
            <React.Fragment>
                    <Typography variant='headline' component='h2'>
                        Add new transaction
                    </Typography>
                
                <form onSubmit={this.submit}>

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

                    <Button type='submit' variant='raised'>Add</Button>
                </form>

            </React.Fragment>
        );
    }
}

export default FormAdd;
