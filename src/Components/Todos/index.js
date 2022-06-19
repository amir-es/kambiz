import React , {useState , useContext} from "react"
import Edit from '../Edit'
import TodosContext from '../../Context/TodosContext'
import axios from 'axios'

const Todos = ({item}) => {

    const todosContext = useContext(TodosContext)

    const [edit , setEdit] = useState('')

    const editHandler = (itemText) => {
        axios.patch(`/todos/${item.key}.json` , {text : itemText})
        .then(response => todosContext.dispatch({type : 'edit-todo' , payload : {item , itemText}}))
        .catch(err => console.log(err))
        setEdit(false)
        console.log(itemText)
    }
   
    
    const deleteHandler = () => {
        axios.delete(`/todos/${item.key}.json`)
        .then(response => todosContext.dispatch({ type : 'delete-todo' , payload : {key : item.key }}))
        .catch(err => console.log(err))
        
    }

    return(
        <>
        {

        !edit
        ?(
            <div class=" flex  justify-center mt-5">
                <div class="flex justify-between w-80 h-16 rounded pt-4 px-4 border-2 border-gray-700">
                    <div>
                        {item.text}
                    </div>
                    <div>
                        <button type="button" onClick={() => setEdit(true)} className="mx-1 bg-blue-400 w-12 h-7 rounded">edit</button>
                        <button type="button" onClick={deleteHandler} class="mx-1 bg-red-400 w-12 h-7 rounded">delete</button>
                    </div>
                </div>
            </div>
        )
        : <Edit text={item.text} edit={editHandler}/>
        
        }
           
        </>
    )
}

export default Todos