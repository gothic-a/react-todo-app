import { useContext } from 'react'
import TasksContext from '../context/tasks-context'
import TodoListItem from './TodoListIem'

const TodoList = () => {

    const { state: {tasks, filter, searchReq} } = useContext(TasksContext)

    // филтрацию в отдельный компонент 

    const filterTasks = (tasks) => {
        if(filter === 'all') return tasks
        return tasks.filter(task => {
            if(task[filter]) return task 
        })
    }

    const searchTasks = (tasks) => {
        if(searchReq === '') return tasks
    
        return tasks.filter(task => {
            if(task.text.toLowerCase().includes(searchReq.toLowerCase())) return task
        })
    }

    const filteredTasks = searchTasks( filterTasks(tasks) )

    return (
        <ul className="todo-list">
            {
                filteredTasks.map(task => <TodoListItem {...task} key={task.id}/>)
            }
        </ul>
    )
}

export default TodoList