
export const initialState = {
    tasks: [],
    searchReq: '',
    filter: 'all',
}

const sortTasks = (tasks) => {
    const important = tasks.filter(t => t.important && !t.done)
    const regular = tasks.filter(t => !t.important && !t.done)
    const done = tasks.filter(t => t.done)

    return [
        ...important,
        ...regular,
        ...done
    ]
}

const addTask = (tasks, task) => {
    return sortTasks([task, ...tasks])
}

const changeTask = (tasks, id, type) => {
        console.log(id)
    
        const idx = tasks.findIndex(t => t.id === id)
        const task = tasks[idx]

        if(type) {
            const newTask = {
                ...task,
                [type]: !task[type]
            }

            return sortTasks([
                ...tasks.slice(0, idx),
                newTask,
                ...tasks.slice(idx + 1)
            ])
        } else {
            return sortTasks([
                ...tasks.slice(0, idx),
                ...tasks.slice(idx + 1)
            ])
        }
}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_TASKS': 
            return {
                ...state,
                tasks: sortTasks(action.payload)
            }

        case 'ADD_TASK': 
            return {
                ...state,
                tasks: addTask(state.tasks, action.payload)
            }
        
        case 'SEARCH_TASKS': 
            return {
                ...state,
                searchReq: action.payload
            }

        case 'FILTER_TASKS': 
            return {
                ...state,
                filter: action.payload
            }

        case 'DONE_TASK':
            return {
                ...state,
                tasks: changeTask(state.tasks, action.payload, 'done')
            }

        case 'IMPORTANT_TASK':
            return{
                ...state,
                tasks: changeTask(state.tasks, action.payload, 'important')
            }
        
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: changeTask(state.tasks, action.payload)
            }

        default:
            return state
    }
}

