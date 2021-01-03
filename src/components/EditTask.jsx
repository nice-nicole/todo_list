import React, { useState } from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';

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

const EditTask = ({ todo, index, editTask }) => {
    const [state, dispatch] = React.useReducer(exampleReducer, {
      open: false,
      size: undefined,
    })
    const { open, size } = state

    const [task, setTask] = useState('');

    // const { push } = useHistory();
    // const history = useHistory();
    const status = todo.isComplete; 

    const handleChange = (e) => {
        editTask(index, task, status)
        // history.push('/')
        setTask('')
    }


    return (
        <div className="task">
            <Icon name="pencil" onClick={() => dispatch({ type: 'open', size: 'mini' })}></Icon>

            <Modal
            size={size}
            open={open}
            onClose={() => dispatch({ type: 'close' })}
            >
            <Modal.Header>Edit a Task</Modal.Header>
            <Modal.Content>

              Name: <input type="text" className="editInput" defaultValue={todo.task}  onChange={e => setTask(e.target.value)}></input>

            </Modal.Content>
            <Modal.Actions>
                <Button negative onClick={() => dispatch({ type: 'close' })}>
                No
                </Button>
                <Button positive onClick={() => {
                    dispatch({ type: 'close' })
                    handleChange()
                    }}>
                Yes
                </Button>
            </Modal.Actions>
            </Modal>
        </div>
    )
}

export default EditTask;