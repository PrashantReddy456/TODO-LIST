import React from "react"
import Create from "./Create"
import {useState,useEffect} from "react"
import axios from "axios";


function Home() {
 const[todos, setTodos]= useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/get")
    .then(result => setTodos(result.data))
    .catch(err => console.log(err))
  },[])
    return (
       
        <div>
            <h1>TODO LIST</h1>
          <Create />  
          {
            todos.length===0
            ?
            <div><h2>NO DATA</h2></div>
            :
            todos.map(todo=>(
                <div>
                    {todo.task}
                </div>    
            ))
          }
        </div>
    )
}
export default Home