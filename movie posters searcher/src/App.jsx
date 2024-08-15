import React, { useState } from 'react';

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      let response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      let result = await response.json();
      setData(result);
    } catch (error) {
      console.error('There was a problem fetching the data:', error);
    }
  };

  const changeHandler = e => {
    setSearch(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <>
      <center className='bg-red-500 p-4 '>
        <h1 className='text-white font-bold text-4xl my-4'>Search your Favourite Car Brand</h1>

        <form onSubmit={submitHandler}>
          <input 
            onChange={changeHandler} 
            className='rounded-xl font-bold p-2 mx-10' 
            type="text" 
            value={search} 
            placeholder='ex:Acura' 
          />
          <button 
            type='submit' 
            className="btn bg-white text-red-500 rounded-xl font-bold p-2 mx-2 my-2 hover:bg-slate-500  hover:text-white"
          >
            Search
          </button>
        </form>
      </center>

      <div className="grid md:grid-cols-4 grid-cols-2 my-5 mx-4 ">
        {data.map((brand, index) => (
          <div className='card' key={index}>
            <li className='text-black break-words'>{brand.nome}</li>
            <a href={`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brand.codigo}/modelos`}>
              <button 
                className="btn p-2 text-white hover:bg-slate-500 bg-blue-600 font-bold rounded-xl my-2"
              >
                Download
              </button>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
