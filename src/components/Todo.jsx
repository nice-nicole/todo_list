import React from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import EditTask from './EditTask';


const exampleReducer = (state, action) => {
  switch (action.type) {
    case 'close':
      return { open: false }
    case 'open':
      return { open: true, size: action.size }
    default:
      throw new Error('Unsupported action...')
  };
};

const Todo = ({ todo, index, completeTask, removeTask, editTask }) => {
    const [state, dispatch] = React.useReducer(exampleReducer, {
      open: false,
      size: undefined,
    })
    const { open, size } = state

    return (
      // <div className="todo_container">
     
        <div className="todo ui gray segment">
           
            <h5 style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}> {todo.task} </h5>

           
            <input className="checkbox"
                type="checkbox"
                onChange={() => completeTask(index)}
            />
            
            {/* <Button className="trash" onClick={() => dispatch({ type: 'open', size: 'mini' })}> */}
                <Icon name='trash' className="trash" onClick={() => dispatch({ type: 'open', size: 'mini' })}/>
            {/* </Button> */}
            <EditTask
                index={index}
                todo={todo} 
                editTask={editTask}
            />

            <Modal
            size={size}
            open={open}
            onClose={() => dispatch({ type: 'close' })}
            >
            <Modal.Header>Delete a Task</Modal.Header>
            <Modal.Content>
                <p>Are you sure you want to delete this task?</p>
            </Modal.Content>
            <Modal.Actions>
                <Button negative onClick={() => dispatch({ type: 'close' })}>
                No
                </Button>
                <Button positive onClick={() => {
                    dispatch({ type: 'close' })
                    removeTask(index)
                    }}>
                Yes
                </Button>
            </Modal.Actions>
            </Modal>
        </div>
        // </div>
        
    );

}

export default Todo;