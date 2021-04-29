import { useContext, useState } from 'react'
import TasksContext from '../context/tasks-context'

import { onSearch, onFilter } from '../actions'

import Search from './Search'
import Filters from './Filters'

const Controls = () => {
    const { state: {filter}, dispatch } = useContext(TasksContext)

    const onSearchInput = (req) => {
        dispatch(onSearch(req))
    }

    const onFilterChange = (filter) => {
        dispatch(onFilter(filter))
    }

    return (
        <div className="controls">
            <Search onSearchInput={onSearchInput} />
            <Filters onFilterChange={onFilterChange} filter={filter}/>
        </div>
    )
}

export default Controls