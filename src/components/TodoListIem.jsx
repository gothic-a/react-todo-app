
const TodoListItem = ({text, done, important, id}) => {

    let itemClass = "todo-list-item"
    if(done) itemClass += ' done'
    if(important) itemClass += ' important'

    let importantClass = important ? 'fas fa-star' : 'far fa-star'

    return (
        <li className={itemClass} id={id}>
            <i className="fas fa-star dummy"></i>
            <div className="text" data-type="done">
                <i className="fas fa-check-circle" data-type="done" ></i>
                <p data-type="done">{text}</p>
            </div>
            <div className="item-controls">
                <button className="btn btn-remove" data-type="delete">
                    <i className="fa fa-trash" data-type="delete"></i>
                </button>
                <button className="btn btn-important" data-type="important">
                    <i className={importantClass} data-type="important"></i>
                </button>
            </div>
        </li>
    )
}

export default TodoListItem