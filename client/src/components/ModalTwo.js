import axios from "axios";
import React from "react";

const ModalTwo = ({ onCloseTwo, showTwo, deleteState, pass, fetchAllTask }) => {
  if (!showTwo) {
    return null;
  }

  // delete task
  const deleteTask = async (id) => {
    try {
      const res = await axios.delete(
        `https://folder-task-backend.onrender.com/api/${id}`
      );

      // fetchAllTask();
      // clickHandlerTwo(text);
      console.log(res.data);
      fetchAllTask();
      onCloseTwo();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="modal">
      <div className="content">
        <h4>Delete {deleteState}</h4>

        <div className="footer">
          <button onClick={onCloseTwo}>Cancel</button>
          <button onClick={() => deleteTask(pass)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ModalTwo;
