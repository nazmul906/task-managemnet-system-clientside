import React, { useEffect, useState } from "react";
import TaskCard from "../../Display/TaskCard/TaskCard";

const AllTask = () => {
  const [alltask, setAllTask] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/alltask", {
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

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center gap-[2.5rem] mb-2 p-[2.5rem]">
        {alltask.map((item) => (
          <TaskCard
            key={item._id}
            alltask={item}
            onDelete={handleDeleteTask}
          ></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
