import React from "react";

const Feature = () => {
  // Array of features
  const features = [
    {
      title: "Efficiently manage and organize your tasks",
      description: "Stay organized and get things done efficiently",
    },
    {
      title: "Priority Levels",
      description:
        "Assign priority levels to your tasks for better organization",
    },
    {
      title: "Due Date Reminders",
      description: "Receive reminders for upcoming task due dates",
    },
    {
      title: "Collaboration",
      description: "Collaborate with team members on shared tasks and projects",
    },
  ];

  return (
    <div className="bg-[#5D576B]  text-white  text-center p-10">
      <div className="mb-10 ">
        <h2 className="text-3xl font-bold mb-4 ">FEATURES</h2>
        <h2 className="text-4xl font-bold mb-2">
          Boost Your Productivity with Our Task Manager
        </h2>
        <p className="text-lg mb-4 ">
          Stay organized and get things done efficiently
        </p>
      </div>

      {/* Map through the features array and render each feature as a card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div key={index} className=" bg-[#656073]  rounded p-6 shadow-2xl">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
