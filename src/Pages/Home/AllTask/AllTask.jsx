import React, { useEffect, useState } from "react";
import TaskCard from "../../Display/TaskCard/TaskCard";

const AllTask = () => {
  const [alltask, setAllTask] = useState([]);
  useEffect(() => {
    fetch("https://taskmanager-dgsc.onrender.com/alltask", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setAllTask(data));
  }, []);
  const handleDeleteTask = (taskId) => {
    const remainingTasks = alltask.filter((task) => task._id !== taskId);
    setAllTask(remainingTasks);
  };
  const handleEditTask = (taskId, updatedTask) => {
    const updatedTasks = alltask.map((task) =>
      task._id === taskId ? { ...task, ...updatedTask } : task
    );
    setAllTask(updatedTasks);
  };
  return (
    <div className="bg-[#A2F2D2] p-2">
      <h2 className="text-3xl  mb-4 lg:ml-[15rem] ">All Avaialble Task</h2>

      <div className="flex justify-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center gap-[2.5rem] mb-2 p-[2.5rem]">
          {alltask.map((item) => (
            <TaskCard
              key={item._id}
              alltask={item}
              onDelete={handleDeleteTask}
              onEdit={handleEditTask}
            ></TaskCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTask;
