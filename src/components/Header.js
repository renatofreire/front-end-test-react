import React, { Component } from 'react';

import { AppBar, IconButton, Toolbar, Typography} from 'material-ui';
import ArrowBack from "material-ui-icons/ArrowBack";
import HomeIcon from "material-ui-icons/Home";


import {Link} from "react-router-dom";
import {urls} from "../utils/urlUtils";


class Header extends Component{

    render(){

        return(
            <React.Fragment>
                <AppBar position='static'>
                    <Toolbar>
                        
                        <IconButton 
                            color='inherit'
                            component={ props => 
                                <Link to={urls.home.path} {...props} />
                            }
                        >
                            { this.props.currentRoute === urls.home.path? <HomeIcon /> : <ArrowBack /> }
                        </IconButton>

                        <Typography type='title' color='inherit'>
                            {this.props.title}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        );
    }
}

export default Header;
