import React, { Component } from 'react';
import { TextField } from 'material-ui';

class InputCurrency extends Component{

    onKeyPress = e =>{
       
        const digitRegex = /^[0-9]|[.]$/;
        if( !digitRegex.test(e.key) )return e.preventDefault();
    }

    onKeyUp = e =>{
       
        let inputValue = e.target.value
        inputValue = inputValue.replace(/\./g, '');

        if(inputValue){
            
            inputValue = parseInt(inputValue, 10).toString();
            let integerPart = inputValue.slice(0, -2);
            let decimalPart = inputValue.slice(-2);
            
            let zeroPart = '';
            zeroPart =  inputValue.length===1 ? '0.0' : zeroPart;  
            zeroPart =  inputValue.length===2 ? '0.'  : zeroPart;
    
            if(inputValue.length < 3){
                e.target.value = zeroPart+decimalPart;
            }else{
                e.target.value = integerPart+'.'+decimalPart;
            }
        }

        this.props.changeValue(e);
    }

    render(){
        
        let isRequired = this.props.required ? true : false;

        return(    
            <TextField 
                className='input-field'
                type='text'
                label={this.props.label}
                required={isRequired}
                value={this.props.value}
                onKeyPress={this.onKeyPress}
                onChange={this.onKeyUp}
            />

        );
    }
}

export default InputCurrency;
