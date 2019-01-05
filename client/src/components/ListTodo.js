import React from 'react';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';

const style = {
    btnGroup: {
        float: 'right'
    },
    btn: {
        marginRight: '10px'
    },
    checkBtn: {
        backgroundColor: '#43c74c',
        color: '#FFF',
        marginRight: '10px'
    }
};

const ListTodo = ({ todos, isEditMode, selectedId, deleteTodo, toggleEditMode, updateTodo, handleUpdateChange }) => {

    return (
        <ul>
            {
                (todos && todos.length > 0) ?
                    (
                        todos.map(todo => {
                            return (
                                <li key={ todo._id }>
                                    {
                                        (selectedId === todo._id && isEditMode) ? (
                                            <React.Fragment>
                                                <input type="text" onChange={ (e) => handleUpdateChange(e, todo) } value={ todo.action } />
                                                <div style={ style.btnGroup}>
                                                    <Button variant="fab" disabled={ !todo.action } aria-label="Edit" style={ style.checkBtn } onClick={() => updateTodo(todo)}>
                                                        <CheckIcon />
                                                    </Button>
                                                    <Button variant="fab" style={ style.btn} aria-label="Clear" onClick={() => toggleEditMode(false, todo._id)}>
                                                        <ClearIcon />
                                                    </Button>
                                                </div>
                                            </React.Fragment>
                                        ) : (
                                            <React.Fragment>
                                                { todo.action }
                                                <div style={ style.btnGroup}>
                                                    <Button variant="fab" style={ style.btn} color="secondary" aria-label="Edit" onClick={() => toggleEditMode(true, todo._id)}>
                                                        <EditIcon />
                                                    </Button>
                                                    <Button variant="fab" style={ style.btn} aria-label="Delete" onClick={() => deleteTodo(todo._id)}>
                                                        <DeleteIcon />
                                                    </Button>
                                                </div>
                                            </React.Fragment>
                                        )
                                    }
                                </li>
                            )
                        })
                    )
                : ( <li>No todo(s) left</li> )
            }
        </ul>
    )
}

export default ListTodo;
