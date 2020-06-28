import React, {useState} from 'react'

const Search = ({ handleSubmit }) => {
    
    const [showInput, setShowInput] = useState(false)

    const [searchTerm, setSearchTerm] = useState('')

    const handleInputChange = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value)
    }

    const toggleInput = () => {
        setShowInput(!showInput)
    }


    return (
        <form className='flex justify-end -mb-10' onSubmit={handleSubmit}>
            <input 
                className={`px-3 py-2 rounded mr-4 transition-opacity duration-200 ${showInput ? 'opacity-100' : 'opacity-0'}`} 
                type='text' 
                value={searchTerm}
                onChange={handleInputChange}
                placeholder='Search...'
            />
            <span className='py-2 text-xl cursor-pointer' onClick={toggleInput}>
                <i className='fas fa-search'></i>
            </span>
        </form>
    )
}

export default Search