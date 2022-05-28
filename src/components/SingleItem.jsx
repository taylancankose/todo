import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext'

function SingleItem({item, id}) {
  const {deleteItem} = useContext(TodoContext)
  return (
    <div>
            <div className='list'>
                <li className='list-item'>{item.todo}
                <i onClick={() => {deleteItem(id)}} className="fa-solid fa-x"></i>
               </li>
            </div>
    </div>
  )
}

export default SingleItem