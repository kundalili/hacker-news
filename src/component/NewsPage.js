import React from 'react'
import { useEffect } from 'react'

export default function NewsPage({value}) {
  console.log(value)
    useEffect(() => {
        window.location.replace(value);
  }, [])
return <h3>Redirecting...</h3> 



      
}
