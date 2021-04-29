
export const getTasks = () => JSON.parse(localStorage.getItem('tasks')) || []

export const setTasks = (tasks) => {
    
    localStorage.tasks = JSON.stringify(tasks)

}

