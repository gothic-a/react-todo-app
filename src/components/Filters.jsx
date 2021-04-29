
const Filters = ({onFilterChange, filter}) => {

    const classNamed = (buttonType) => {
        if(buttonType === filter) return `btn btn-${buttonType} active`
        else return `btn btn-${buttonType}`
    }

    const onFilterClick = (e) => {
        onFilterChange(e.target.dataset.filter)
    }

    return (
        <div className="filters" onClick={onFilterClick}>
            <button 
                className={classNamed('all')} data-filter="all">
                <i data-filter="all">all</i>
            </button>
            <button 
                className={classNamed('done')} data-filter="done">
                <i data-filter="done" className="fas fa-check-circle"></i>
            </button>
            <button 
                className={classNamed('important')} data-filter="important">
                <i data-filter="important" className="fas fa-star"></i
            ></button>
        </div>
    )
}

export default Filters