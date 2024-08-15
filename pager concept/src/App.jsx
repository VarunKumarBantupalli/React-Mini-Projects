import { useState, useEffect } from 'react'
import axios from 'axios';
import Pagination from './components/Pagination';


function App() {
  const [data, setData] = useState([]);
  const [perpage, setPerpage] = useState([]);


  useEffect(() => {
    const fetchData = async () => {

      try {
        let a = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setData(a.data);
        setPerpage(a.data.slice(0, 10));
      } catch (error) {
        console.log("error in fetching data")
      }
    }
    fetchData();

  }, [])

  const handlePageChange = (pageNumber) => {
    setPerpage(data.slice((pageNumber*10)-10 ,pageNumber*10));
    
};


  return (
    <>

      <div className="App  bg-lime-500 mb-2">
        <center>
          <h1 className='text-black font-bold   text-4xl'>QuoteBook</h1>
          <h1 className='text-black font-bold p-5  text-xl'>read quote ,write quote ,repeat quote</h1>
        </center>
      </div>
      <div className="bg-lime-200">
        {data.length >= 1 ?
          <div className='h-screen '>
            {perpage.map((post, index) => (
              <div key={index} className="poster bg-white mx-2 my-4">
                <span className='my-2 p-2'>{post.title}</span>
                
              </div>
            ))}
           <Pagination data={data} pageHandler={handlePageChange} />
          </div>
          :
          <div className='h-screen'> no data found </div>
        }



      </div>
    </>
  )
}

export default App
