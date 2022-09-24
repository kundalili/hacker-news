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
    <div>
      <h1>AuthorPage</h1>
      <p>User Name: {author.username}</p>
      <p>About: {author.about}</p>
      <p>Karma: {author.karma}</p>
      <p>Crated: {author.created_at}</p>
      <button onClick={goBack}>Go Back</button>

    
    </div>

  )
}

export default AuthorPage