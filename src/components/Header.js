import React, { Component } from 'react';

import { AppBar, IconButton, Toolbar, Typography} from 'material-ui';
import HomeIcon from 'material-ui-icons/Home';

class Header extends Component{

    render(){

        return(
            <React.Fragment>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton color='inherit'>
                            <HomeIcon />
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
