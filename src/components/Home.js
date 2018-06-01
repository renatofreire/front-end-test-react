import React, { Component } from 'react';

import {Link} from "react-router-dom";

import {Button, Typography} from "material-ui";

import {urls} from "../utils/urlUtils";

class Home extends Component{
    render(){
        return(
            <React.Fragment>
                <Typography 
                    variant="headline"
                    component="h2"
                >
                    Home page
                </Typography>
         
                <div className="container-buttons">
                    <Button  
                        variant='raised'
                        className='btn-home'
                        component={ props => 
                            <Link to={urls.add.path} {...props}/>
                        }
                    >
                        {urls.add.name}
                    </Button>

                    <Button  
                        variant='raised'
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
