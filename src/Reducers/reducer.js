function AppReducer (state , action) {

    switch (action.type) {

        case 'init-todo' : 
            return initTodo(state , action)

        case 'add-todo':
            return addTodo(state , action)
            

        case 'delete-todo':
            return deleteTodo(state , action)
            

        case 'edit-todo':
            return editTodo(state , action)
            
    
        default:
            break
    }
}

const initTodo = (state , action) => {
    let {todos} = action.payload

    return {
        todos
    }
}

const addTodo = (state , action) => {
    let {text ,key} = action.payload;
    console.log(state)
    return {
        todos : [
            ...state.todos , 
            {key , text}
        ]
    }
    
    
}

const deleteTodo = (state , action) => {
    let {key} = action.payload
    return {
        ...state , 
        todos : state.todos.filter(el => el.key !== key)
    }
}

const editTodo = (state , action) => {
    let {item , itemText} = action.payload ;
    item.text = itemText
    let Item = item.text
    console.log(item.text)
    return {
        ...state , 
        Item
    }
}

export default AppReducer