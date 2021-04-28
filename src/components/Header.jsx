
const Header = () => {
    return (
        <div className="header">
            <h1 className="header-title">Your tasks</h1>
            <div className="header-status">
                <div className="all">all <span>10</span></div>
                <div className="done">done <span>7</span></div>
            </div>
        </div>
    )
}

export default Header