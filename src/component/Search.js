import React from 'react'

export default function Search ({userInput, onChange,onClick}) {

  return (
      <>
        <input 
        placeholder='Search' 
        className='h-[40px] w-[200px] gap-[20px]bg-red-600' 
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
