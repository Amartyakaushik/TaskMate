import { ImCross } from "react-icons/im";
const Todo = ({id, course, completed, toggleCompleted, removeTodo}) => {
    // const [todos, setTodos] = useState([]);
    return(
        /* style={{
            border: "2px solid #242424",
            padding: "10px",
            margin: "10px",
        }}*/
        <div className="todo">

            <div className="todo-title">
            <input type="checkbox" checked = {completed} onChange={() => {
                toggleCompleted(id);
            }} /> 
            <p className={`${completed? "completed" : ""}`} >{course}</p>
            </div>
            <br/>
            <div className="cross-btn" onClick={() => {
                removeTodo(id)
            }}><ImCross /></div>
            
            {/* <button onClick={() => {
                removeTodo(id)
            }}>Remove</button> */}
        

        </div>
    )
}
export default Todo;