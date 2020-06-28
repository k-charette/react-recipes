import React, {useState} from 'react'

const Search = () => {
    
    const [showInput, setShowInput] = useState(false)

    const toggleInput = () => {
        setShowInput(!showInput)

    }

    return (
        <div className='flex justify-end'>
            <input className={`px-3 py-2 rounded mr-4 ${!showInput && 'hidden'}`} 
            type='text' placeholder='Search...'/>
            <button className='py-2 text-xl' onClick={toggleInput}>
                <i className='fas fa-search'></i>
            </button>
        </div>
    )
}

export default Search