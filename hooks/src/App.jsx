import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Fragment } from 'react'

const App = () => {


   let [count , setCount]   = useState(0)

   let [sname, setSname] = useState("santanu")

    let headingRef =   useRef()

  let number = 0

  let increment = ()=>{
    
    setCount(count + 1)
  }

  let decrement= ()=>{


    setCount(count - 1)
  }

  let changeName =()=>{
    setSname("rohit")
  }


  let changeColor =()=>{
     headingRef.current.style.color = "red"
  }

    useEffect(()=>{
       console.log('i am rendering')

       document.title = `count is : ${count}`
    },[count])


  return (
    <>

        <h1> {count}</h1>

        <button onClick={increment}>increment</button>

        <button onClick={decrement}>decrement</button>

        <h2 ref={headingRef}> {sname}</h2>

        <button onClick={changeName}> change name</button>


        <button onClick={changeColor}> change color</button>
    </>
  )
}

export default App