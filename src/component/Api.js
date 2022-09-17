import {useEffect, useState} from 'react'
// import Header from './components/Header'

function Api() {
  // console.log('hello from api')
  const [searchText, setSearchText] = useState('')

  const [movies, setMovies] = useState([])
  useEffect(() => {
    async function getData() {
      try {
      
        const result = await fetch(`http://hn.algolia.com/api/v1/search?query=boring`)
        
        const data = await result.json()
        console.log("🚀 ~ data", data.hits[0].title)
  
        setMovies(data.results)
        
      } catch (error) {
        console.log('This is a wrong path')
        
      }
    }
    getData()
  },[])
  // const handleClick = async () => {
    
  //   if (searchText.length < 1) {
  //     alert('You need to type somthing')
  //     return;
  //   }


  return (
    <div>hello
      {/* <Header 
        value={searchText}  
        onClick={handleClick}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className='flex flex-wrap gap-[10px] p-[40px]'>
      {
        movies.map((item, idx) => <div key={idx} className='flex flex-col items-center justify-center'> 
          {item.title}
          <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt=''/> 
        </div>)
      }
      </div> */}
    </div>
  );
}

export default Api;