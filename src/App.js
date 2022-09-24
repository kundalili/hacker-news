import './App.css';
import Search from './component/Search'
import { useState, useEffect } from 'react'
import {useParams, Link} from "react-router-dom"
import Spinner from './component/Spinner';
import { usePromiseTracker, trackPromise } from "react-promise-tracker";
import NewsPage from './component/NewsPage'

function App() {


  const [userInput, setUserInput] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading , setLoading] = useState(true)
  const [news, setNews] = useState([])
  const author = useParams()
 
  const { promiseInProgress } = usePromiseTracker();
   console.log(promiseInProgress)
  useEffect(() => {
    setLoading(true)
    async function getData() {
      
      try {
      
        const result = await fetch(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
        
        const data = await result.json()
        // console.log("🚀 ~ data", data.hits[0].title)
        
        setNews(data.hits)
        // setLoading(false)
        // setTimeout(()=>{
       
          // setLoading(false)
        //  }, 2000)
       
      } catch (error) {
        console.log('This is a wrong path ', error.message)
       
      }
    }
    trackPromise(getData())
    setLoading(false)
  },[searchQuery])
 
    // if (isLoading){
    //   return <Spinner />
    // }
  

  const onClick = (e) => {
    e.preventDefault();
    setSearchQuery(userInput)
    console.log('') 
    
}

const onChange = (e) => {
    setUserInput(e.target.value)
}

//console.log(isLoading)

  return (
    <div className='flex justify-center items-center flex-col'>
        <Search 
      value={userInput} 
      onChange={onChange} 
      onClick={onClick}

      />
      {(promiseInProgress === true)  ? <Spinner />: null }
      {news.length? news.map((item, key) => <div
       key={key} 
       className="hack-item w-[550px] bg-red-200">
        
         <Link
          to="/external-link"
          target="_blank"
          className="hack-title"
          value={item.url}>
          {item.title}
          
        </Link> 
        <br/>
        <Link 
          to={`/author/${item.author}`}  
          authorData={item.author}
          className="hack-author underline hover:text-red-700">{item.author}
        </Link>
        </div>): <div className="noResult">No result</div>}
   
          
    </div>
  );
}

export default App;
