import { React } from "react";
import Timer from "./Timer.jsx"
import TodoList from "./TodoList.jsx";

function Homepage() {
    return(
        <div style={{
            height: '100vh',
            width: '100vw',
          }}>
          
            <body>
                <h2 className='header'>if you want better, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br />  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     go get better!</h2>
                <div className="line"></div>
                <Timer />
                <TodoList />
            </body>
        </div>
    )
}

export default Homepage;