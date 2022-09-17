import './App.css';
import Api from'./component/Api'
import Search from './component/Search'

function App() {
  return (
    <div>
     <Api />
     <Search onChange={onChange} 
        value={value}></Search>/>
  
    </div>
  );
}

export default App;
