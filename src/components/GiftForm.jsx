import { useState, useEffect, useRef } from 'react'

export const GiftForm = ( props ) => {

    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect( () => {
        inputRef.current.focus()
    })

    const handleChange = ({ target }) => {
        setInput(target.value)
    }

    const handleSubmit = ( event ) => {
        event.preventDefault();

        // Generating unic ids
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        
        // Clear form
        setInput('');
    };



    return (
        <form className="gift-form" onSubmit={ handleSubmit }>
            <input 
                type="text" 
                placeholder='Add your Gift'
                value={ input }
                name='text'
                className='gift-input'
                onChange={ handleChange }
                ref={ inputRef }
            />
            <button className='gift-button'>
                Add Gift
            </button>
        </form>
    )
}
