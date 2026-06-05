import {useDispatch, useSelector} from "react-redux"
import './App.css'
import { increment } from "./Redux/counterslice";
import { addtodo,deletetodo,editTodo } from "./Redux/todoslice";
import { useState } from "react";
function App() {
  const [editIndex, setEditIndex] = useState(null);
 const count= useSelector((state)=>state.counter.count);
  const[input,setInput] =useState("");
   const todos = useSelector((state)=>state.todo.todos);   
  const dispatch= useDispatch();


 function handlechange(){
    if(editIndex!==null){
      dispatch(editTodo({
        index:editIndex,
        text:input
      }))
       setEditIndex(null);
    }else{
       dispatch(addtodo(input));
    }
     setInput("");
     
 }

  function startedit(item,index){
       setEditIndex(index);
       setInput(item)
  }


  return (
    <>
     <h1>{count}</h1>
     <button onClick={()=>dispatch(increment())}>increase</button> <br></br> <br></br>
     <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
     <button onClick={handlechange} >
      {editIndex!==null?"update":"add"}
     </button>
           {
        todos.map((item,index)=>(
          <div  key={index}>
             <h2>
        {item}
          
        </h2>  <button onClick={()=>dispatch(deletetodo(index))}>delete</button>
               <button onClick={()=>startedit(item,index)}>edit</button>
        </div>
  ))
        
     
    }
    <br></br>
      
    
   
    </>
  )
}

export default App
 