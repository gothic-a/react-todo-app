import { useContext } from 'react'
import StoreContext from '../../context/store-context'

const WithFilteredTasks = (Wrapped) => function useTasks(props)  {

    const { state: {tasks, filter, searchReq} } = useContext(StoreContext)

    const filterTasks = (tasks) => {
        if(filter === 'all') return tasks
        if(filter === 'important') return tasks.filter(t => t.important && !t.done)
        return tasks.filter(task => task[filter])
    }

    const searchTasks = (tasks) => {
        if(searchReq === '') return tasks
    
        return tasks.filter(task => {
            if(task.text.toLowerCase()
                    .includes(searchReq.toLowerCase())) {
                return task
            }
        })
    }

    const filteredTasks = searchTasks(filterTasks(tasks))

    return <Wrapped filteredTasks={filteredTasks} tasks={tasks} {...props}/>
} 

export default WithFilteredTasks