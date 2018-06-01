import React, { Component } from 'react';

import { Link } from "react-router-dom";

import { Button, Typography } from "material-ui";

import { urls } from "../utils/urlUtils";

class Home extends Component{
    render(){
        return(
            <React.Fragment>
                <Typography 
                    variant="headline"
                    component="h1"
                    gutterBottom
                >
                    Welcome to Transactions Application
                </Typography>
                
                <div className='text-container'>
                    <Typography component='p'className='simple-text'>
                        This is a simple application. Its intent is make a basic system using 
                        &nbsp;<a href='https://reactjs.org/' target='_new'>React.js</a>, 
                        &nbsp;<a href='https://material-ui.com/' target='_new'>Material-UI</a> and 
                        &nbsp;<a href='https://firebase.google.com/' target='_new'>Firebase</a>.
                    </Typography>
                    <Typography component='p' className='simple-text'>
                        You can add transactions, choosing if it is a credit or a debit.
                    </Typography>
                    <Typography component='p'className='simple-text'>
                        You can also see a list of all transactions added and the total amount of transactions.
                    </Typography>
                    <Typography component='p'className='highlight-text'>
                        Use the buttons below to choose which option you want:
                    </Typography>
                </div>
                         
                <div className="container-buttons">
                    <Button  
                        variant='raised'
                        color='secondary'
                        className='btn-home'
                        component={ props => 
                            <Link to={urls.add.path} {...props}/>
                        }
                    >
                        {urls.add.name}
                    </Button>

                    <Button  
                        variant='raised'
                        color='secondary'
                        className='btn-home'
                        component={ props => 
                            <Link to={urls.list.path} {...props}/>
                        }
                    >
                        {urls.list.name}
                    </Button>
                </div>
      


            </React.Fragment>
        );
    }
}


export default Home;
