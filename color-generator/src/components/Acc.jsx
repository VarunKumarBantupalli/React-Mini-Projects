import React from 'react'
import { useState } from "react"
import datas from './accordian/Datas'

const Acc = () => {
  const [selected, setSelected] = useState(null)

  const handleClick = (e) =>{
console.log(e.target.value)
  }
  return (
    <div className="wrapper text-black">
      <div className="accordian">  
        {
          datas && datas.length > 0 ? (
            datas.map((dataItem) => (
              <div className="item">
                <div onClick={handleClick} className="title">
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
              </div>
            ))

          ) : <div>NO DATA FOUND</div>
        }
      </div>
    </div>
  )
}

export default Acc
