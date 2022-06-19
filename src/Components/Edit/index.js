import React , {useState} from 'react'

function Edit ({text , edit}) {

    const [ itemText , setText] = useState(text)

    const inputHandler = e => setText(e.target.value)

    return (
        <div class=" flex  justify-center mt-5">
                <div class="flex justify-between w-80 h-16 rounded pt-4 px-4 border-2 border-gray-700">
                    <div>
                        <input value={itemText} onChange={inputHandler} className='pt-1 rounded focus:outline-none border-2 border-gray-700' />
                    </div>
                    <div>
                        <button type="button" onClick={() => edit(itemText) } class="mx-1 bg-blue-400 w-12 h-7 rounded">edit</button>
                    </div>
                </div>
        </div>         
    )
}

export default Edit ;