import React, { Component } from 'react';

import { Typography, TextField, RadioGroup, FormControlLabel, Radio, Button} from 'material-ui';

class FormAdd extends Component{
    
    render(){
        return(
            <React.Fragment>
                
                <Typography variant='headline' component='h2'>
                    Add new transaction
                </Typography>

                <TextField 
                    className='input-field'
                    type='text'
                    required
                    label='Value:'
                />

                <RadioGroup 
                    arial-label='transaction-type'
                    name='transaction-type'
                    className='radio-group'
                >
                    <FormControlLabel value='credit' control={<Radio />} label='Credit' />

                    <FormControlLabel value='debit' control={<Radio />} label='Debit' />
                
                </RadioGroup>

                <Button type='submit' variant='raised'>Add</Button>

            </React.Fragment>
        );
    }
}

export default FormAdd;
