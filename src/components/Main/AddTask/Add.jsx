import { useState } from "react";

const Addtaskcontainer = ({ handleAddTask }) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    return (
        <>
            <div className="card col" style={{ width: "18rem", margin: "1vw" }}>
                <div className="card-body">
                    <input type="text" value={title} onChange={(e)=>{
                        setTitle(e.target.value)
                    }} class="form-control" id="floatingInput" placeholder="Enter Title" />
                    <textarea class="form-control" value={desc} onChange={(e)=>{
                        console.log(e.target.value)
                        setDesc(e.target.value)
                    }} placeholder="Add Description" id="floatingTextarea"></textarea>
                    <a href="/" className="btn btn-danger" onClick={(e)=>{
                        e.preventDefault();
                        handleAddTask({title, desc})
                    }}>Card link</a>
                </div>
            </div>
        </>
    )
}
export default Addtaskcontainer;