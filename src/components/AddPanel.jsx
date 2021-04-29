import TasksContext from '../context/tasks-context'
import { useState, useContext } from 'react'
import { onAdd } from '../actions'

const AddPanel = () => {
    const [value, setValue] = useState('')

    const { dispatch } = useContext(TasksContext) 

    const addClick = () => {
        if(value !== '') dispatch(onAdd(value))

        setValue('')
    }

    return (
        <div className="add-panel">

            <div className="add-field">
                <input className="input add-input" type="text" value={value}  onChange={e => setValue(e.target.value)}/>
                <button className="btn" onClick={addClick}>add</button>
            </div>
            
        </div>
    )
}

export default AddPanel