
const tasks = [{
    id: 1,
    text: 'End watching mirror ( Tarkovsky )',
    done: true,
    important: false
},
{
    id: 2,
    text: 'Read captain doughter',
    done: false,
    important: true
}]

export const getTasks = () => {
    return tasks
}

export const setTasks = (tasks) => {
    tasks = [...tasks]
}

