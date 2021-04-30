import { useContext } from 'react'
import StoreContext from '../context/store-context'

import { onSearch, onFilter } from '../actions'

import Search from './Search'
import Filters from './Filters'

const Controls = () => {
    const { state: {filter}, dispatch } = useContext(StoreContext)

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