import React from 'react'

export default function Search ({userInput, onChange,onClick}) {

  return (
      <div className='w-full p-[20px] bg-red-500 flex justify-center'>
        <input 
        placeholder='Search' 
        className='rounded-md p-3' 
        onChange={onChange} 
        value={userInput}>
        </input>
        <button className='bg-blue ml-3 bg-red-800 hover:bg-red-900 p-3 rounded-md text-white font-bold'
        onClick={onClick}>
            Search
        </button>
    </div>
  )
}
