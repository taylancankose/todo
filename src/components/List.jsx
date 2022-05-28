import SingleItem from "./SingleItem"
import TodoContext from "../context/TodoContext"
import {useContext} from 'react'

function List() {

  const {tasks, deleteItem} = useContext(TodoContext)

  return (
    <div className="list-items">
        <ul>
            {
                tasks.map((item,i) => (
                    <SingleItem id={i} key={i} item={item} deleteItem={deleteItem}  />
                ))}
        </ul>
    </div>
  )
}

export default List