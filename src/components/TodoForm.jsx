import { useState } from "react";
import { v4 as uuid } from "uuid";
import '../App.css';
import { toast } from "react-toastify";
const TodoForm = ({addTodo}) => {
    const [title, setTitle] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault();
       
        const newTodo = {
            course: title,
            completed: false,
            id : uuid()
        }
        if(title.trim().length === 0){
            toast.error("Please enter a valid title", {
                autoClose : 1300
            });

        }else{
            addTodo(newTodo)
            setTitle("");
        }

    }
    return(
        <div >
        <form className="todoForm" onSubmit={handleSubmit}>
            <input className="todoForm_input" type="text" name="title" value={title} onChange={(e) =>{
                setTitle(e.target.value)
            }}/>
            <button className="todoForm_button" type="submit">Add</button>
        </form>
        </div>
    )
}

export default TodoForm;