import React, { useState } from "react";
import "./taskcard.css";
import Swal from "sweetalert2";

const TaskCard = ({ alltask, onDelete, onEdit }) => {
  const { _id, title, description, status } = alltask;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedStatus, setEditedStatus] = useState(status);

  const [editItemId, setEditItemId] = useState(null);

  const handleEdit = (_id) => {
    setIsModalOpen(true);
    setEditItemId(_id);
  };

  const handleSave = () => {
    fetch(`https://taskmanager-dgsc.onrender.com/update/${editItemId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: editedTitle,
        description: editedDescription,
        status: editedStatus,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Update response:", data);

        if (data.modifiedCount > 0) {
          Swal.fire("Task is updated").then(() => {
            onEdit(_id, {
              title: editedTitle,
              description: editedDescription,
              status: editedStatus,
            });
            setIsModalOpen(false);
          });
        }
      });
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setEditItemId(null);
  };

  const handledelete = (_id) => {
    fetch(`https://taskmanager-dgsc.onrender.com/deletetask/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire("Deleted Successfully");
          onDelete(_id);
        }
      });
  };
  return (
    <div className="card bg-white h-full shadow-2xl rounded-lg p-4">
      <div className="card-body items-center text-center">
        <h3 className="text-xl font-semibold mb-2 text-gray-600">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-xl font-semibold text-gray-600">{status}</p>
        <div className="">
          <button
            onClick={() => handleEdit(_id)}
            className="w-32 mt-4 mr-4 bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out"
          >
            edit
          </button>
          <button
            className="w-32 mt-4 bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out"
            onClick={() => handledelete(_id)}
          >
            delete
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div id="my_modal_3" className="modal-overlay">
          <div className="modal" style={{ height: "28rem" }}>
            <form>
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
                  htmlFor="status"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={status}
                  onChange={(e) => setEditedStatus(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="pending">Pending</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>

              <div className="">
                <button
                  type="button"
                  onClick={handleSave}
                  className="w-32 mr-2 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-32 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
