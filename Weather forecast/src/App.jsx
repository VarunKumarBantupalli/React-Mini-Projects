import { useState } from 'react'

import './App.css'

function App() {

  const [city, setCity] = useState("")
  const [result, setResult] = useState("")

  const changeHandler = e => {
    setCity(e.target.value);

  }

  const fetchData = async () => {
    let a = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
    let data = await a.json()

    const kelvin = data.main.temp;
    const degree = kelvin - 273.15
    setResult("Temperature at" + " " + city + " is " + Math.round(degree) + "°C")
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    fetchData();
  }



  return (
    <>

      <center>

        <div className="card m-10">
          <h1 className='font-bold text-orange-500 text-4xl'>Weather Forecast</h1>
          <div className="search m-5">

            <form onSubmit={submitHandler}>
              <input onChange={changeHandler} className='p-3 rounded-2xl text-lg font-semibold' type="text"
                placeholder='enter your city' value={city} />
              <button className="btn my-3 bg-orange-500 p-3 mx-4 rounded-2xl text-lg font-semibold hover:bg-slate-500 "
                value="get Temparature" type='submit' >Get Weather</button>
            </form>

            <div className=" mx-auto result  h-[10vh] w-[60vw] bg-white my-10 rounded-2xl flex justify-center items-center">
              <h1 className='text-bold text-3xl'>{result}</h1>
            </div>

          </div>
        </div>

      </center>

    </>
  )
}

export default App
