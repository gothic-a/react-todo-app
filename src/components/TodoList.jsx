import { useContext } from 'react'
import StoreContext from '../context/store-context'
import WithFilteredTasks from './hoc/WithFilteredTasks'

import { onDone, onImportant, onDelete } from '../actions'

import TodoListItem from './TodoListIem'
import EmptyList from './EmptyList'

const TodoList = ({ filteredTasks, tasks }) => {

    const { dispatch } = useContext(StoreContext)

    const onListClick = (e) => {
        if(e.target.dataset.type) {
            const dataType = e.target.dataset.type 

            const id = e.target.closest('.todo-list-item').id

            if(dataType === 'done') dispatch(onDone(id))
            if(dataType === 'delete') dispatch(onDelete(id))
            if(dataType === 'important') dispatch(onImportant(id))
        }
    }

    const TodoList = filteredTasks.map(task => <TodoListItem {...task} key={task.id}/>)

    return (
        <ul className="todo-list" onClick={onListClick}>
            {
                !tasks.length ? <EmptyList text={'Add new task'} arrow={true} /> 
                    : !filteredTasks.length ? <EmptyList text={'Nothing found'} />
                    : TodoList
            }
        </ul>
    )
}

export default WithFilteredTasks(TodoList)