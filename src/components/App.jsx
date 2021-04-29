import { useReducer, useEffect } from 'react'
import TasksContext from '../context/tasks-context'
import { reducer, initialState } from '../reducer'

import { getTasks } from '../services/tasks'

import { onFetchTasks } from '../actions' 

import '../styles/common.scss'
import Header from './Header'
import Controls from './Controls'
import TodoList from './TodoList'
import AddPanel from './AddPanel'

const App = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const tasks = getTasks()

        dispatch({type: 'FETCH_TASKS', payload: tasks })
    }, [])

    return (
        <TasksContext.Provider value={ { state, dispatch } }>
            <div className="wrapper-outer">
                <div className="wrapper">
                    <Header />
                    <Controls />
                    <TodoList />
                    <AddPanel />
                </div> 
            </div>
        </TasksContext.Provider>
    )
}

export default App