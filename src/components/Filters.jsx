const Filters = () => {
    return (
        <div className="filters">
            <button className="btn btn-all active" disabled="true">all</button>
            <button className="btn btn-done"><i className="far fa-check-circle"></i></button>
            <button className="btn btn-important"><i className="fas fa-star"></i></button>
        </div>
    )
}

export default Filters