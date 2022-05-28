import './App.css';
import { ToastContainer } from 'react-toastify';
import { TodoProvider } from './context/TodoContext';
import FormInput from './components/FormInput';
import List from './components/List';


function App() {

  return (
    <div className='wrapper'>
    <TodoProvider > 
      <ToastContainer />
      <div className='todo-container'>
        <FormInput />
        <List />
      </div>
    </TodoProvider>
    </div>
  );
}

export default App;
