import React from 'react';
import Todo from './Todo';
import { Link } from 'react-router-dom';



const TodoList = ({ todoList, setTodoList }) => {
		const completeTask = (index) => {
			const newTodos = [...todoList];
			newTodos[index].isCompleted = !newTodos[index].isCompleted ;
			setTodoList(newTodos);
		}

		const removeTask = (index) => {
			const newTodos = [...todoList];
			newTodos.splice(index, 1);
			setTodoList(newTodos);
		}

		const editTask = (index, task, status) => {
			const newTask = {
				task: task,
				isComplete: status,
			}
			const newTodos = [...todoList]
			newTodos[index] = newTask
			setTodoList(newTodos)
			
			// console.log('EDittt me please', todoList)
		}

    return (
      

        <div className="todoList">
          
          
					

            {todoList.map((todo, index) => 
								<Todo 
									key={index}
									index={index}
									todo={todo} 
									completeTask={completeTask}
									removeTask={removeTask}
									editTask={editTask}
								/>
                )}
                <Link to="/add">
						<button className="add"><h5>Add new task</h5></button>
					</Link>

        </div>
    );

}

export default TodoList;