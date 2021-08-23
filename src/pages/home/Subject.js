import React,{Component} from 'react';
import {Paper, IconButton, Tooltip} from '@material-ui/core';
import {Visibility, PersonAdd, PersonAddDisabled} from '@material-ui/icons';

class Subject extends Component{
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render(){
        return (
            <Paper elevation={0} variant="outlined">
                {this.props.subject.subject} - ({this.props.subject.cod})
                    <IconButton onClick={this.handleClick} color="inherit">
                        {this.state.isToggleOn ? 
                            <Tooltip title="Postularme" placement="top-start">
                                <PersonAdd />
                            </Tooltip> : 
                            <Tooltip title="Quitar postulacion" placement="top-start">
                                <PersonAddDisabled />
                            </Tooltip>}
                    </IconButton>
                <Tooltip title="Ver anotados" placement="top-start">
                    <IconButton color="inherit">
                        <Visibility />
                    </IconButton>
                </Tooltip>
            </Paper>
        )}
}

export default Subject;