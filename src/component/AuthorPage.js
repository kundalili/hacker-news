import React from 'react'
import {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function AuthorPage({authorData}) {
    const [author, setAuthor] = useState('')
    const navigate = useNavigate()
   
    const {authorname} = useParams()

    const goBack = () =>{
      navigate(-1)
    }
    useEffect(() => {
        async function getData() {
          try {
          
            const result = await fetch(`http://hn.algolia.com/api/v1/users/${authorname}`)
            
            const data = await result.json()
            console.log("🚀 ~ data", data.username)
            // console.log('url:', data.url)
      
            setAuthor(data)
            
          } catch (error) {
            console.log('This is a wrong path')
            
          }
        }
        getData()
      },[])


  return (
    <div className='flex items-center p-5 flex-col'>
      <div className='border-solid border-2 border-red-800 rounded-md w-[60%] p-4' >
        
        <h1 className='font-bold text-2xl mb-3'> {author.username}</h1>
        
        <p><span className='font-bold'>About:</span> {author.about}</p>
        <p><span  className='font-bold'>Karma:</span> {author.karma}</p>
        <p><span  className='font-bold'>Crated:</span> {author.created_at}</p>
       
      
      </div>
      <button
      className='bg-blue bg-red-800 hover:bg-red-900 p-3 rounded-md text-white font-bold m-5 w-[60%]'
       onClick={goBack}>Go Back</button>

    </div>

  )
}

export default AuthorPage