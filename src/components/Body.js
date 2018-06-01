import React, { Component } from 'react';

import FormAdd from './FormAdd';
import List from './List';
import Home from './Home';

import { Route } from 'react-router-dom';
import { urls } from '../utils/urlUtils';

import Card from 'material-ui/Card/Card';
import CardContent from 'material-ui/Card/CardContent';


class Body extends Component{

    render(){
        return(
            <div>

                <Card style={{margin: '50px'}}>
                    <CardContent>

                        <Route exact
                            path={urls.home.path}
                            render={ props => <Home />}
                        />

                        <Route 
                            exact path={urls.list.path}
                            render={ props => <List 
                                    list={this.props.list}
                                    total={this.props.total}
                                />
                            }
                        />


                        <Route 
                            exact path={urls.add.path}
                            render={ props => <FormAdd 
                                    transactionValue={this.props.transactionValue}
                                    transactionType={this.props.transactionType}
                                    changeValue = {this.props.changeValue}
                                    changeType={this.props.changeType}
                                    addTransaction={this.props.addTransaction}
                                />
                            }
                        />
                    </CardContent>
                </Card>
                



            </div>
        );
    }
}

export default Body;
