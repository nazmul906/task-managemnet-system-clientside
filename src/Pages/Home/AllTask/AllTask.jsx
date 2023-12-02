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
  });

  return (
    <div className="grid grid-cols-3 gap-2 mb-2 p-[2.5rem]">
      {alltask.map((item) => (
        <TaskCard key={item._id} alltask={item}></TaskCard>
      ))}
    </div>
  );
};

export default AllTask;
