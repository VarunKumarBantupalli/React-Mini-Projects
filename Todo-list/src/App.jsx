import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFInished, setshowFInished] = useState(true)

  useEffect(() => {

    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }

  }, [])

  const toggleFinished = (e) => {

    setshowFInished(!showFInished)

  }


  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handleEdit = (e, id) => {

    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)

    let newTodos = todos.filter(item => {
      return item.id !== id
    });

    setTodos(newTodos)
    saveToLS()


  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    });

    setTodos(newTodos)
    saveToLS()
  }

  const handleAdd = () => {

    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLS()

  }

  const handleChange = (e) => {
    setTodo(e.target.value)

  }

  const handleCheckbox = (e) => {

    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS()
  }

  return (
    <>
      <Navbar />
      <div className=" mx-3 md:container md:mx-auto rounded-xl bg-purple-600  text-white p-5 my-5 min-h-[80vh] md:w-[35%]" >
        <h1 className='font-bold text-2xl text-white text-center'>iTodo - Manage your tasks at one place</h1>

        <div className="addTodo my-5 flex flex-col gap-4">

          <h2 className="text-2xl font-bold ">add your todo</h2>
          <div className="flex">
            <input onChange={handleChange} value={todo} type="text" placeholder='minimum 3 characters' className='w-3/4  text-black' />
            <button onClick={handleAdd} disabled={todo.length < 3} className='bg-white p-2 py-1 mx-3 rounded-xl text-black font-bold  hover:bg-slate-500 disabled:'>Save</button>
          </div>
        </div>
        <input type="checkbox" onChange={toggleFinished} checked={showFInished} />
        <label className='mx-2' htmlFor="show">Show Finished</label>

        <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>

        <h1 className="font-bold text-lg my-4  ">Your Todos</h1>

        <div className="todos">

          {todos.length === 0 && <div className='m-5'>no todos to display </div>}

          {todos.map(item => {

            return (showFInished || !item.isCompleted) && <div key={item.id} className={"todo flex my-3 justify-between "}>

              <div className='flex gap-5'>
                <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item.id} id='' />
                <div className={item.isCompleted ? "line-through" : ""} > {item.todo} </div>
              </div>

              <div className="buttons flex h-full ">
                <button onClick={(e) => { handleEdit(e, item.id) }} className='bg-white p-2 py-1 text-black rounded-md font-bold mx-2 hover:bg-slate-500'>Edit</button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-white p-2 py-1 text-black rounded-md font-bold mx-2 hover:bg-slate-500'>Delete</button>
              </div>

            </div>
          })}
        </div>
      </div>

    </>
  )
}

export default App
