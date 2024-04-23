import Taskcard from "./card/Card";

const Tasksshow = ({ tasks, handleDeleteTask }) => {
    return (
        <>
            <div className="row">
                {tasks.map((task, index) => (
                    <Taskcard key={index} task={task} handleDeleteTask={handleDeleteTask} />
                ))}
            </div>
        </>
    )
}
export default Tasksshow;