import React from 'react'
import {useEffect, useState} from 'react'
function AuthorPage() {
    const [author, setAuthor] = useState('')
    const [authorName, setAuthorName] = useState({})
    useEffect(() => {
        async function getData() {
          try {
          
            const result = await fetch(`http://hn.algolia.com/api/v1/users/:${authorName}`)
            
            const data = await result.json()
            console.log("🚀 ~ data", data.username)
      
            setAuthor(data.username)
            
          } catch (error) {
            console.log('This is a wrong path')
            
          }
        }
        getData()
      },[authorName])


  return (
    <div>AuthorPage</div>
  )
}

export default AuthorPage