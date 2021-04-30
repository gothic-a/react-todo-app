const Arrow = () => {
    return (
        <div className="arrow">
            <i className="fa fa-chevron-down"></i>
        </div>
    )
}

const EmptyList = ({text, arrow}) => {
    return (
        <div className="empty-list">
            <h3>{text}</h3>
            {
                arrow && <Arrow />
            }
        </div>
    )
}

export default EmptyList