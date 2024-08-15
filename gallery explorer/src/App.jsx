import { useState } from 'react'

//axios is 3rd-party library to access Apis 
import axios from 'axios';

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
function App() {
  const [search, setSearch] = useState("")

  //this useState is to store the that we fetched from the Api

  const [data, setData] = useState([])

  //using this to take input text from the text field and give it to the search engine
  const changeHandler = (e) => {
    setSearch(e.target.value);
  }

  //using this to make sure the submition of the form(here it is the search of the images)
  const submitHandler = (e) => {
    e.preventDefault();
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(
      response => { setData(response.data.photos.photo) })

  }

  return (
    <>
      <div className="container mx-auto justify-around flex  bg-purple-800">
        <div className="nav flex   w-1/2 m-3">
          <input className=' text-black my-2 rounded-xl w-[500px]' type="text" value={search} onChange={changeHandler} placeholder='ex:flowers...' />
          <button className='bg-white mx-4 my-2 font-bold p-2 rounded-xl hover:bg-slate-600' onClick={submitHandler} >Search</button>
        </div>
      </div>
      <div className="gallery bg-purple-300 h-auto min-h-[100vh]">
        <div >
          <div className="container grid grid-cols-4 ">
            {data.map((image) =>
              <div key={image.id}>
                <div className="images ">
                  <img className=' m-2  h-[200px] w-[250px]' src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}  alt={image.title} />

                </div>
              </div>)}
          </div>
        </div>
      </div>



    </>
  )
}

export default App
