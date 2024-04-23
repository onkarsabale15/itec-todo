import { useState } from "react";
import Tasksshow from "./ShowTask/Show";
import Addtaskcontainer from "./AddTask/Add";

const Taskscontainer = () => {
    const [tasks, setTasks] = useState([])
    const handleAddTask = (tasksToAdd) => {
        if(!tasksToAdd.title || !tasksToAdd.desc){
            alert("Please enter a valid title and description")
            return;
        }else{
            tasksToAdd.id = tasks.length;
            console.log(tasksToAdd)
            setTasks([...tasks, tasksToAdd])
        }
    }
    const handleDeleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }
    return (
        <>
            <div className="container text-center">
                <Addtaskcontainer handleAddTask={handleAddTask} />
                <br />
                <Tasksshow tasks={tasks} handleDeleteTask={handleDeleteTask} />
            </div>
        </>
    )
}
export default Taskscontainer;