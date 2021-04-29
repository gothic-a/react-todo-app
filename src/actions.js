import { v4 } from 'uuid'

const onFetchTasks = (tasks) => {
    return {type: 'FETCH_TASKS', payload: tasks}
}

const onSearch = (req) => {
    return {type: 'SEARCH_TASKS', payload: req}
}

const onFilter = (filter) => {
    return {type: 'FILTER_TASKS', payload: filter}
}

const onAdd = (text) => {
    const task ={
        id: v4(),
        text,
        important: false,
        done: false
    }

    return {type: 'ADD_TASK', payload: task}
}

const onDone = (id) => {
    return {type: 'DONE_TASK', payload: id}
}

const onImportant = (id) => {
    return {type: 'IMPORTANT_TASK', payload: id}
}

const onDelete = (id) => {
    return {type: 'DELETE_TASK', payload: id}
}

export {
    onFetchTasks, 
    onSearch, 
    onFilter,
    onAdd,
    onDone,
    onImportant,
    onDelete,
}