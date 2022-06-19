import React , {useReducer , useEffect , useState} from 'react'
import '../App.css';
import Forme from './Forme'
import AddTodos from './AddTodo'
import TodosContex from '../Context/TodosContext'
import AppReducer from '../Reducers/reducer'
import axios from 'axios'

function App() {

  const [state , dispatch] = useReducer(AppReducer , {
    todos : [] 
  })

  const [loading , setLoading] = useState(false)

  let jsonHandler = (data) => {
     setLoading(false)
    let todos = Object 
              .entries(data)
              .map(([key , text]) => {
                return {
                  ...text ,
                  key
                }
              });

      dispatch({type : 'init-todo' , payload : {todos}})

      console.log(data)
  }

  useEffect(() => {
    setLoading(true)
    axios.get(`/todos.json`)
      .then(reponse => jsonHandler(reponse.data))
      .catch(err => console.log(err))
     
  }, [])
  return (

    <TodosContex.Provider value={{
      dispatch ,
      todos : state.todos 
    }}>

    <div className="App bg-red-100">

      <Forme 
       
      />

      {
        loading 
        ? <h1 className = "m-5  text-3xl text-gray-700 "> Loading ... </h1>
        : <AddTodos />
      }

    </div>

    </TodosContex.Provider>

  );
}

export default App;
