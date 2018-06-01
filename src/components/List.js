import React, { Component } from 'react';

import {Table, TableBody, TableCell, TableHead, TableRow, Typography} from "material-ui";

class List extends Component{

    renderList(){

        const l = this.props.list || [];

        return(
            l.map( i => <TableRow key={i.key}><TableCell>{i.value}</TableCell></TableRow>)
        );
    }

    render(){
        return(
            <React.Fragment>
                <Typography variant="headline" component="h2">Transactions</Typography>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Valor</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.renderList()}
                        <TableRow>
                            <TableCell>
                                <strong>Total: {this.props.total}</strong>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </React.Fragment>
        );
    }
}

export default List;

