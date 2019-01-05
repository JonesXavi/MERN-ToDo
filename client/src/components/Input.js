import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = {
    btn: {
        marginLeft: '10px'
    }
}

class Input extends Component {

    state = {
        action: ""
    }

    addTodo = async (e) => {
        e.preventDefault();

        const task = {action: this.state.action};

            if(task.action && task.action.length > 0) {
                try {
                    const response = await axios.post('/api/todos', task);

                    if(response.data) {
                        this.props.getTodos();
                        this.setState({ action: '' });
                    }
                } catch (error) {
                    console.error(error);
                }
            } else {
                console.log('input field required');
            }
    }

    handleChange = (e) => {
        this.setState({
            action: e.target.value
        })
    }

    render() {
        let { action } = this.state;

        return (
            <Card>
                <CardContent>
                    <form onSubmit={ this.addTodo }>
                        <input type="text" onChange={ this.handleChange } value={ action } />
                        <Button type="submit" variant="fab" color="primary" aria-label="Add" style={ styles.btn }>
                            <AddIcon />
                        </Button>
                    </form>
                </CardContent>
            </Card>
        )
    }
}

export default Input;
