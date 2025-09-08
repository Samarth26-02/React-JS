import React from "react";

function TaskList(){
    const tasks=[
        {id:1,name:"Learn React.js",done:false},
        {id:2,name:"Learn Next.js",done:false},
        {id:3,name:"Learn SQL",done:true}
    ];

    return(
        <div>
            <h2>Tasks List...</h2>
            <ul>
                {tasks.map((task) =>(
                    <li key={task.id}>
                        {task.name} --- {task.done ? "Completed":"Not Completed"};
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;