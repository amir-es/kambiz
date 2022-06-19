import React , {useContext} from "react"
import TodosContext from '../../Context/TodosContext'
import Todos from '../Todos'

const AddTodos = () => {

    const todosContext = useContext(TodosContext)

    const {todos , setTodos} = todosContext ;

    return(
        <div>

            {todos.map((item)=> (
                 <Todos
                    key={item.id} 
                    item={item} 
                    setTodos={setTodos} 
                    todos={todos}   
                  />
            ))}
            
        </div> 
    )
}

export default AddTodos 