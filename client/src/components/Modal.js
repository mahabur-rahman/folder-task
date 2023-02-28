import { useState } from "react";
import axios from "axios";

const Modal = ({ onClose, show, fetchAllTask }) => {
  // create task state
  const [text, setText] = useState("");

  if (!show) {
    return null;
  }

  // post data
  const postTask = async () => {
    try {
      const res = await axios.post(
        `https://folder-task-backend.onrender.com/api/add/task`,
        {
          text,
        }
      );

      fetchAllTask();

      onClose();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="modal">
      <div className="content">
        <h4>Add a new folder</h4>

        <input
          type="text"
          placeholder="folder name"
          onChange={(e) => setText(e.target.value)}
        />

        <div className="footer">
          <button onClick={onClose}>Close</button>
          <button onClick={postTask}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
