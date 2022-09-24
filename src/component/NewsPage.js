// import React from 'react'
// import { useEffect, setAuthor } from 'react'

// export default function NewsPage() {
//   return (
//     useEffect(() => {
//         async function getData() {
//           try {
          
//             const result = await fetch(`http://hn.algolia.com/api/v1/users/${authorname}`)
            
//             const data = await result.json()
//             console.log("🚀 ~ data", data.url)
      
//             setAuthor(data)
            
//           } catch (error) {
//             console.log('This is a wrong path')
            
//           }
//         }
//         getData()
//       },[])
//   )
// }
