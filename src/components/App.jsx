import '../styles/common.scss'
import Header from './Header'
import Controls from './Controls'
import TodoList from './TodoList'
import AddPanel from './AddPanel'

const App = () => {
    return (
        <div className="wrapper-outer">
           <div className="wrapper">
                <Header />
                <Controls />
                <TodoList />
                <AddPanel />
            </div> 
        </div>
    )
}

export default App