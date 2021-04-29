
const TodoListItem = ({text, done, important}) => {

    let itemClass = "todo-list-item"
    if(done) itemClass += ' done'
    if(important) itemClass += ' important'

    return (
        <li className={itemClass}>
            <div className="text">
                <i className="fas fa-check-circle"></i>
                <p>{ text }</p>
            </div>
            <div className="item-controls">
                <button className="btn btn-remove">
                    <i className="fa fa-trash"></i>
                </button>
                <button className="btn btn-important">
                    <i className={ important ? "fas fa-star" : "far fa-star"}></i>
                </button>
            </div>
        </li>
    )
}

export default TodoListItem