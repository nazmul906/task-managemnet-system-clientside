import React from "react";

const TaskCard = ({ alltask }) => {
  console.log("card", alltask);
  const { _id, title, description, status } = alltask;
  return (
    <div
      key={_id}
      className="card w-96 bg-white h-full shadow-2xl rounded-lg p-4 "
    >
      <div className="card-body items-center text-center">
        <h3 className="text-xl font-semibold mb-2 text-gray-600 ">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-xl font-semibold text-gray-600 ">{status}</p>
        <div className="">
          <button className="w-32 mt-4 mr-4 bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out">
            edit
          </button>
          <button className="w-32  mt-4 bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out">
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
