import React, {Component} from 'react';
import axios from 'axios';

import Input from './Input';
import ListTodo from './ListTodo';

class Todo extends Component {

    state = {
        todos: [],
        isEditMode: false,
        selectedId: ''
    }

    componentDidMount() {
        this.getTodos();
    }

    getTodos = async () => {
        try {
            const response = await axios.get('/api/todos');

            if(response.data) {
                this.setState({
                    todos: response.data
                })
            }
        } catch (error) {
            console.error(error);
        }
    }

    deleteTodo = async (id) => {
        try {
            const response = await axios.delete(`/api/todos/${id}`);

            if(response.data) {
                this.getTodos();
            }
        } catch (error) {
            console.error(error);
        }
    }

    updateTodo = async (todo) => {
        try {
            const response = await axios.put('/api/todos/update/', todo);

            if(response.data) {
                this.getTodos();
                this.toggleEditMode( false, todo._id);
            }
        } catch (error) {
            console.error(error);
        }
    }

    toggleEditMode = (enableEditMode, id) => {
        this.setState({
            isEditMode: enableEditMode,
            selectedId: id
        })
    }

    handleUpdateChange = (e, todo) => {
        let clone = [...this.state.todos];

        clone.forEach(item => {
            if(todo._id === item._id) {
                item.action = e.currentTarget.value;
            }
        });

        this.setState({
            todos: clone
        })
    }

    render() {
        let { todos, isEditMode, selectedId } = this.state;

        return(
            <div>
                <h1>My Todo(s)</h1>
                <Input getTodos={ this.getTodos }/>
                <ListTodo todos={ todos }
                    isEditMode={ isEditMode }
                    selectedId={ selectedId }
                    deleteTodo={ this.deleteTodo }
                    toggleEditMode={ this.toggleEditMode }
                    updateTodo= { this.updateTodo }
                    handleUpdateChange = { this.handleUpdateChange }
                    />
            </div>
        )
    }
}

export default Todo;
