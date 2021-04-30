import { useReducer, useEffect } from 'react'

import StoreContext from '../context/store-context'
import { reducer, initialState } from '../reducer'
import { getTasks, setTasks } from '../services/tasks'

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

    useEffect(() => {
        setTasks(state.tasks)

    }, [state.tasks])

    return (
        <StoreContext.Provider value={ { state, dispatch } }>
            <div className="wrapper-outer">
                <div className="wrapper">
                    <Header tasks={state.tasks}/>
                    <Controls />
                    <TodoList />
                    <AddPanel />
                </div> 
            </div>
        </StoreContext.Provider>
    )
}

export default App