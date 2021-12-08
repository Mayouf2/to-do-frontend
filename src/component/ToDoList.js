import React  , {useState , useEffect}from 'react'
import axios from 'axios'
import { RiDeleteBin5Line } from 'react-icons/ri';
import "./tasks.css"

export default function ToDoList({token}) {
    const [tasks, setTasks] = useState([])
    const [name, setName] = useState("")
    const [task, settask] = useState("")
    const [check, setcheck] = useState(false)

    useEffect(async (id) => {
    const res = await axios.get(`https://todolist-by-mayouf.herokuapp.com/tasks/${id}`,{
      headers:{authorization: "Bearer " + token},

    });

    setTasks(res.data);

  }, [tasks]); 



  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeTask = (e) => {
    settask(e.target.value);

  };
  const checked = (e)=>{
    setcheck(e.target.value)
    console.log("checked");
  }

  const addTask =async (id)=>{
    if(!task){
      return;
    }
      const result = await axios.post(`https://todolist-by-mayouf.herokuapp.com/task/${id}`, {
        newName:name,
        newTask:task,
        newCheck:check,
        
      },
      {
      headers:{authorization: "Bearer " + token},
      }
      );
  
      setTasks(result.data)
   
  }

  const deleteTask = async (id, index)=>{

const deletedTask = await axios.delete(`https://todolist-by-mayouf.herokuapp.com/task/${id}`,{
  headers:{authorization: "Bearer " + token},
});

if (deletedTask.data == "deleted"){
  const copiedArr= [...tasks];
copiedArr.splice(index,1);
setTasks(copiedArr);
}
  }

const updateCheck = async (id,check)=>{
  const result = await axios.put(`https://todolist-by-mayouf.herokuapp.com/task/${id}`,{check:!check}, {
    headers:{authorization: "Bearer " + token},
    },    
    );
   
    setcheck(result.data)

}
// if(token){
// let aValue = storage.getItem(token);
// }

    return (
      
        <div>
       
        <h3 className="taskCounter">You have {tasks.length} tasks</h3>
        <hr/>

     {tasks.map((element , i)=>{
                        return <div  style={{ textDecoration: element.check ? "line-through" : "" }} key={element._id} className="TasksBox">
                        <input  className="btnDelete" type="checkbox" onChange={()=>{updateCheck(element._id,element.check)}}/>

                        {/* <h1>{element.user.name}</h1> <br /> */}
                            {/* <h2>{element.name}</h2> */}
                            <h2 className="task">{element.task}</h2> <br />
                            <button className="btnDelete" onClick={()=>{deleteTask(element._id, i)}}><RiDeleteBin5Line/></button>
                        </div>
                    })}
                {/* <input type="text" placeholder="Name" onChange={(e)=>{changeName(e)}}/> */}
                <input type="text" placeholder="Task" onChange={(e)=>{changeTask(e)}}/>
                <button className="addBtn" onClick={()=>{addTask()}}>add</button>
        </div>
    )
}
