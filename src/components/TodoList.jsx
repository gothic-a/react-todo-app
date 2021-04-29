import { useContext } from 'react'

import TasksContext from '../context/tasks-context'
import { onDone, onImportant, onDelete } from '../actions'

import TodoListItem from './TodoListIem'
import EmptyList from './EmptyList'

const TodoList = () => {

    const { state: {tasks, filter, searchReq}, dispatch } = useContext(TasksContext)


    const onListClick = (e) => {
        if(e.target.dataset.type) {
            const dataType = e.target.dataset.type 

            const id = e.target.closest('.todo-list-item').id

            if(dataType === 'done') dispatch(onDone(id))
            if(dataType === 'delete') dispatch(onDelete(id))
            if(dataType === 'important') dispatch(onImportant(id))
        }
    }

    const filterTasks = (tasks) => {
        if(filter === 'all') return tasks
        if(filter === 'important') return tasks.filter(t => t.important && !t.done)
        return tasks.filter(task => task[filter])
        
    }

    const searchTasks = (tasks) => {
        if(searchReq === '') return tasks
    
        return tasks.filter(task => {
            if(task.text.toLowerCase().includes(searchReq.toLowerCase())) return task
        })
    }

    const filteredTasks = searchTasks( filterTasks(tasks) )

    

    return (
        <ul className="todo-list" onClick={onListClick}>
            {
                tasks.length ? filteredTasks.map(task => <TodoListItem {...task} key={task.id}/>) : <EmptyList/>
            }
        </ul>
    )
}

export default TodoList