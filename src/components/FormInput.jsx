import {useContext, useState} from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TodoContext from '../context/TodoContext';

function FormInput() {
const {tasks, setTasks} = useContext(TodoContext)
const [input, setInput] = useState({todo:'', isDone:false})
  
const onChangeEvent = (e) => {
      setInput({...input, [e.target.name]:e.target.value})
  }
  
const onSubmitEvent = (e) => {
      e.preventDefault()
      
    if(input.todo === ''){
        toast.warning("You can not add empty task!")
        return false
    }
      
        setTasks([...tasks, input])
        console.log(input)
        setInput({todo:'', isDone: false})
        toast.success("Successfully added")
  }


  return (
    <form className='form' onSubmit={onSubmitEvent}> 
        <input 
        placeholder='Please enter a task' 
        onChange={onChangeEvent}  
        name= "todo"
        value={input.todo}
        className='input-form'
        />
    </form>
  )
}

export default FormInput