import React from "react";

const FAQ = () => {
  return (
    <div className="bg-[#E6EBE0] mx-auto p-4 flex justify-center items-center p-8">
      <div>
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
      </div>
      <div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">
            What is a task manager?
          </h3>
          <p className="text-gray-700">
            A task manager is a tool that helps individuals or teams organize,
            track, and prioritize tasks and projects.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">
            Why should I use a task manager?
          </h3>
          <p className="text-gray-700">
            Using a task manager can help you stay organized, increase
            productivity, and ensure that important tasks are not forgotten or
            overlooked.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">
            Can I use the task manager on multiple devices?
          </h3>
          <p className="text-gray-700">
            Yes, our task manager is designed to be accessible on multiple
            devices, including desktop computers, laptops, tablets, and
            smartphones.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">
            Is my data secure with the task manager?
          </h3>
          <p className="text-gray-700">
            Yes, we take data security seriously. Our task manager uses
            encryption and follows industry best practices to protect your
            information.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            Can I collaborate with others using the task manager?
          </h3>
          <p className="text-gray-700">
            Absolutely! Our task manager allows for easy collaboration and
            sharing of tasks and projects with team members or colleagues.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
