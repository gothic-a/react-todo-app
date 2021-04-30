
export const getTasks = () => {
    
    return JSON.parse(localStorage.getItem('tasks')) || []
}

export const setTasks = (tasks) => {
    
    localStorage.tasks = JSON.stringify(tasks)
}

