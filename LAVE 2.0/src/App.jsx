import { useState } from 'react'
import Products from './components/Products';


function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([])
  const YOUR_APP_ID = "28d20044";
  const YOUR_APP_KEY = "c87395e183d1244525e2817dd9537bf0";

  const changeHandler = (e) => {
    setSearch(e.target.value);
  }

  const fetchData = async () => {
    let a = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`);
    let response = await a.json();
    if (response.hits) {
      let formattedData = response.hits.map(hit => hit.recipe);
      setData(formattedData);
    } else {
      setData([]);
    }


  }

  const submitHandler = async (e) => {
    e.preventDefault();
    fetchData();

  }

  return (
    <>
      <div className="nav">
        <center className='bg-green-600 p-5'>

          <h1 className='text-white font-bold text-4xl my-2'>LAVE MENU</h1>

          <div className="form bg-green-600">
            <form onSubmit={submitHandler} >
              <input className='p-2 rounded-2xl font-bold' type="text" placeholder='ex:chicken biriyani' value={search} onChange={changeHandler} />

              <button type='submit' className="btn mx-3 my-2 p-2 rounded-2xl bg-white text-black font-bold
               hover:bg-slate-500" value="search">Search</button>
            </form>
          </div>

        </center>

        {data.length >= 1 ? <Products data={data} id={search} /> : <h1 className='font-bold text-4xl text-green-600'>No Items Found</h1>}


      </div>
    </>
  )
}

export default App
