import React, {useContext , useState} from "react"
import TodosContext from '../../Context/TodosContext'
import axios from 'axios'

const Forme = () => {
    
    const todosContext = useContext(TodosContext)
    const [inputText , setInputText] = useState() 

    const submitForme = (e) => {
        if(inputText.length > 0){
            e.preventDefault();
            axios.post('/todos.json' , { text : inputText })
            .then(response => todosContext.dispatch({ type : 'add-todo' , payload : { text : inputText ,  key : response.data.name}}))
            .catch(err => console.log(err))
            setInputText("")
        }
    } 

    const inputHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    }


    return(
       <div>
            <forme onSubmit={submitForme} className="">
                <div className="">
                    <h1 className=" font-bold text-4xl text-gray-700  mt-7">Welcome!</h1>
                    <p className=" text-2xl pt-2 text-gray-700">To get started, add some items to your list:</p>
                    <div className="mt-10">
                        <div className="">
                            <input type="text" onChange={inputHandler} value={inputText} className=" p-1 rounded focus:outline-none border-2 border-gray-700" placeholder="i want to do ..."/>
                            <button onClick={submitForme} className=" bg-yellow-300 p-1 ml-2 rounded border-2 border-gray-700">add</button>
                        </div>
                    </div>
                </div>
            </forme>
       </div>
    )
}

export default Forme 