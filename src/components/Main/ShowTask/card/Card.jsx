const Taskcard = ({ task, handleDeleteTask }) => {
    console.log(task)
    return (
        <>
            <div className="card col" style={{ width: "18rem", margin: "1vw", minWidth:"20vw", boxShadow:"5px 5px 5px #888888" }}>
                <div className="card-body">
                    <h5 className="card-title">{task.title}</h5>
                    <p className="card-text">{task.desc}</p>
                    <a href="/" className="btn btn-danger" onClick={(e)=>{
                        e.preventDefault();
                        handleDeleteTask(task.id)
                    }}>Remove</a>
                </div>
            </div>
        </>
    )
}
export default Taskcard;