import { useState } from "react";

export const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    const handleInputValue = (e) => {
        setTask(e.target.value)
        // console.log(task);

    }

    const addTask = () => {
        // alert("hello")
        if (task === "") {
            return alert("can not add empty value")
        }

        setTasks(() => [...tasks, { todo: task, id: tasks.length + 1, complete: false }])
        setTask('')


    }
    // console.log(tasks);

    return (
        <div>
            <h1>TodoList</h1>
            {/* <input type="text" value={task}  onChange={(e)=>setTask(e.target.value)} /> */}
            <input type="text" value={task} onInput={handleInputValue} />
            <button onClick={addTask}>Add</button>

            {
                tasks.map((todo) => (
                    <div key={todo.id}>
                        <span>{todo.id}. {todo.todo}   {todo.complete ? "✅" : "❌"}</span>
                        <button>Delete</button>
                    </div>
                ))
            }

        </div>
    )
}
