import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.css'

const App = () => {

  const [userdata, setuserdata] = useState([])
  const [index, setIndex] = useState(11)

  let data = async () => {
    let get = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)
    setuserdata(get.data)
  }
  useEffect(function(){
    data()
  },[index])

  let printd = <h3 className="no-data">loading...</h3>

  if (userdata.length > 0) {
    printd = userdata.map((elem) => {
      return (
        <div className="card" key={elem.id}>
          <img src={elem.download_url} />
          <h2>{elem.author}</h2>
        </div>
      )
    })
  }

  return (
    <div className="container">
      {/* <button className="btn" onClick={data}>
        Get Data
      </button> */}

      <div className="image-container">
        {printd}
      </div>
      <div className='ont'>
        <button onClick={()=>{if (index>1) {
           setIndex(index-1)

        }

        }}>prev</button>
        <h4>page {index}</h4>
        <button onClick={()=>{
            setIndex(index+1)
        }}>next</button>
      </div>
    </div>
  )
}

export default App