import { useState, useEffect } from 'react'

const Search = ({onSearchInput}) => {

    const [value, setValue] = useState('')

    useEffect(() => {
        onSearchInput(value)
    }, [value] )

    return (
        <div className="search">
            <input className="input search-input" type="text" placeholder="search" value={value} onChange={ e => setValue(e.target.value) }/>
        </div>
    )
}

export default Search