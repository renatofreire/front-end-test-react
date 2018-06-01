import React, { Component } from 'react';

import { Typography } from 'material-ui';

class Footer extends Component{

    render(){
        return(
            <footer>
                
                <Typography component='p'className='simple-text'>
                    Developed by <a href='http://freire.eng.br' target='_new'>Renato Freire</a>
                </Typography>
            </footer>
        );
    }
}

export default Footer;
