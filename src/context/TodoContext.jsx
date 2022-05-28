import {createContext, useState} from "react";

const TodoContext = createContext()

export const TodoProvider = ({children}) => {

    const [tasks, setTasks] = useState([
        {
            todo: "Ekmek al",
            isDone: true
        },
        {
            todo: "Doktora git",
            isDone: false
        }
    ])

    const deleteItem = (id) =>{
        setTasks(tasks.filter((todo,i) => i !== id))
    }

    return (
        <TodoContext.Provider value={
         {   
            tasks,
            deleteItem,
            setTasks,
        }
        }>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext