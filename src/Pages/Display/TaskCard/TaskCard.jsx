import React, { useState } from "react";
import "./taskcard.css";
const TaskCard = ({ alltask }) => {
  console.log("card", alltask);
  const { _id, title, description, status } = alltask;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedStatus, setEditedStatus] = useState(status);
  const [editItemId, setEditItemId] = useState(null);

  const handleEdit = (id) => {
    // Implement your edit logic here
    console.log("Edit task with ID:", id);
    // console.log("Edited Title:", editedTitle);
    // console.log("Edited Description:", editedDescription);
    setIsModalOpen(true);
    setEditItemId(id);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setEditItemId(null);
    setFeedback("");
  };
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
          <button
            onClick={() => handleEdit(_id)}
            className="w-32 mt-4 mr-4 bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out"
          >
            edit
          </button>
          <button className="w-32  mt-4 bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out">
            delete
          </button>
        </div>
      </div>
      {isModalOpen && (
        <dialog id="my_modal_3" className="modal-overlay" open>
          <div>
            <form className="modal" style={{ height: "28rem" }}>
              <div className="mb-4">
                <label
                  htmlFor="editedTitle"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="editedTitle"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="editedDescription"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="editedDescription"
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  rows="4"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="editedStatus"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Status
                </label>
                <input
                  type="text"
                  id="editedStatus"
                  value={editedStatus}
                  onChange={(e) => setEditedStatus(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="">
                <button
                  type="button"
                  onClick={handleEdit}
                  className="w-32 mr-2 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className=" w-32 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default TaskCard;
