
const Header = () => {
    return (
        <div className="header">
            <h1 className="header-title">Your tasks</h1>
            <div className="header-status">
                <div className="all"><span>all</span> <span>10</span></div>
                <div className="done"><span>done</span> <span>7</span></div>
            </div>
        </div>
    )
}

export default Header