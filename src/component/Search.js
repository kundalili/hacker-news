import React from 'react'
import { useState } from 'react'
export default function Search () {
    const [userInput, setUserInput] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
  
    const onClick = (e) => {
        e.preventDefault();
        setSearchQuery(userInput)
        console.log('')
    }

    const onChange = (e) => {
        setUserInput(e.target.value)
    }
  return (
      <>
        <input 
        placeholder='Search' 
        className='h-[40px] w-[200px] gap-[20px]' 
        onChange={onChange} 
        value={userInput}>
        </input>
        <button className='w-[40px] h-[40px] bg-blue'
        onClick={onClick}>
            Search
        </button>
    </>
  )
}
