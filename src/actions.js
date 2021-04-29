const onFetchTasks = (tasks) => {
    return {type: 'FETCH_TASKS', payload: tasks}
}

const onSearch = (req) => {
    return {type: 'SEARCH_TASKS', payload: req}
}

const onFilter = (filter) => {
    return {type: 'FILTER_TASKS', payload: filter}
}

export {onFetchTasks, onSearch, onFilter}