import react,{useState} from "react"
import "./style.css"

const App = ()=>{

    let [marks, setMarks] =  useState(0)

    return(
       <div>
           <h1>Hey this is my counter application.!</h1>
           <h1>Task Day 2: The marks will only increase upto 25</h1>
           <h3>The marks are: {marks}</h3>
           {/* <button onClick={()=>{setMarks(marks+1)}}>Increament</button> */}
           <button onClick={()=>marks<25?setMarks(marks+1): ""}>Increament</button>
           <button onClick={()=>marks>0?setMarks(marks-1): ""}>Decreament</button>
           <button onClick={()=>{setMarks(0)}}>Reset</button>
       </div>
    )
}


export default App

// fintion to arrow function 
// function hello(){

// }

// hello = () =>{

// }

// function(){

// }
//  () => {}