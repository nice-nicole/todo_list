import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Form, Button} from 'semantic-ui-react';
import "./TodoForm.scss";



const TodoForm = ({ todoList, setTodoList, addTask }) => {

    const [task, setTask] = useState('');

    // const { push } = useHistory();
    const history = useHistory();

    const handleChange = (e) => {
        addTask(task)
        history.push('/')
        setTask('')
    }

    return (
        <div className="todoForm">
            <Form primary>
            {/* <label for="fname">Task name</label> */}
                <Form.Input type="text" className="input" placeholder="Enter a task name..." value={task} onChange={e => setTask(e.target.value)}/>
                <Button className="btn_submit" onClick={() => handleChange()} >Submit</Button>

                
    {/* <input type="text" id="fname" name="firstname" placeholder="Your name.."> */}
            </Form>
        </div>
    );

}

export default TodoForm;