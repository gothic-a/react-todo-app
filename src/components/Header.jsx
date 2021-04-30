import { useState, useEffect} from 'react'

const Header = ({tasks}) => {

    const [actual, setActual] = useState(null)

    useEffect(() => {
        setActual(
            tasks.filter(t => !t.done).length
        )
    }, [tasks])

    return (
        <div className="header">
            <h1 className="header-title">Your tasks</h1>
            <div className="header-status">
                <div className="all"><span>actual</span> <span>{actual}</span></div>
            </div>
        </div>
    )
}

export default Header