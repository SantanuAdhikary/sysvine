import React from 'react'

import San from './San'
import { Hi2 } from './Hi';

const App = () => {


  let a = 10 ;

  let hello = (e)=>{

    console.log(e.target)
    alert('hello..')
  }
  return (
 
    <div>
    
    <div className=''>

       <h1> hello</h1>

       <img src="" alt="" />

       <br />

       <hr />

       <div>
        <h2> hi</h2>

        <h2>{a}</h2>

        <h3> {9 + 9} </h3>
       </div>
    </div>

    <div>

    </div>

    <San  myName = {"rohit"} age= {35} skills= {['html','css','js']} />

    <hr />


    <button onClick={hello}> click</button>

    <Hi2/>
   

    </div>

  

    
  )
}

export default App