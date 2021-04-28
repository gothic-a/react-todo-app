
const TodoListItem = () => {
    return (
        <li className="todo-list-item">
            <div className="status">
                <i className="far fa-circle"></i>
            </div>
            <div className="text">
                <p>read captain daughter</p>
            </div>
            <div className="item-controls">
                <button className="btn btn-remove">
                    <i className="fa fa-trash"></i>
                </button>
                <button className="btn btn-important">
                    <i className="far fa-star"></i>
                </button>
            </div>
        </li>
    )
}

export default TodoListItem