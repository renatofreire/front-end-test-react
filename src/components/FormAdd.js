import React, { Component } from 'react';

import { Typography, RadioGroup, FormControlLabel, Radio, Button, Snackbar, IconButton, TextField} from 'material-ui';
import CloseIcon from "material-ui-icons/Close";

import InputCurrency from './InputCurrency';

class FormAdd extends Component{

    constructor(props){
        super(props);

        this.state = {openSnack: false, snackMsg:''}
    }

    closeSnack = () =>{
        this.setState({...this.state, openSnack:false, snackMsg:''});
    }

    submit = e =>{
        e.preventDefault();
        let msg = this.props.addTransaction()? 'Transaction added sucefully.' : 'Error adding transaction. Please, try again.';
        this.setState({...this.state, openSnack:true, snackMsg: msg});     
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

                    <TextField 
                        className='input-field'
                        type='text'
                        label={'Description:'}
                        required
                        value={this.props.transactionDescription}
                        onChange={this.props.changeDescription}
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

                    <Button type='submit' variant='raised' color='secondary'>Add</Button>
                </form>
                <div> 
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        open={this.state.openSnack}
                        autoHideDuration={5000}
                        onClose={this.closeSnack}
                        ContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={<span id="message-id">{this.state.snackMsg}</span>}
                        action={[
                            <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className={""}
                            onClick={this.closeSnack}
                            >
                            <CloseIcon />
                            </IconButton>,
                        ]}
                    />
                </div> 

            </React.Fragment>
        );
    }
}

export default FormAdd;
