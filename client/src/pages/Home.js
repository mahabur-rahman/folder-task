import React, { useState, useEffect } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaPlus,
  FaTimesCircle,
} from "react-icons/fa";
import axios from "axios";

import Modal from "../components/Modal";
import ModalTwo from "../components/ModalTwo";

const Home = () => {
  const [show, setShow] = useState(false);
  const [showTwo, setShowTwo] = useState(false);

  // read state
  const [task, setTask] = useState([]);

  // delete state
  const [deleteState, setDeleteState] = useState("");
  const [pass, setPass] = useState("");

  // fetchTask
  const fetchAllTask = async () => {
    try {
      const res = await axios.get(
        `https://folder-task-backend.onrender.com/api/read/task/`
      );

      setTask(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchAllTask();
  }, []);

  const clickHandler = async () => {
    setShow(true);
  };

  const clickHandlerTwo = (text, id) => {
    setShowTwo(true);
    setDeleteState(text);
    setPass(id);
  };

  return (
    <>
      <div className="folder_main">
        <div className="main_div">
          <div
            className="root_main"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaAngleLeft />
            <span className="root">Root</span>
          </div>

          <div>
            <button>
              <FaPlus className="plus" />
              <span onClick={clickHandler}>New</span>
            </button>
          </div>
        </div>
        <div className="sub_menu">
          <div>
            <ul className="lists">
              {task.map((item) => {
                return (
                  <>
                    <li key={task._id}>
                      <span>
                        <FaAngleRight />
                      </span>
                      <span className="item">{item.text}</span>
                      <span className="cross">
                        <FaTimesCircle
                          onClick={() => clickHandlerTwo(item.text, item._id)}
                        />
                      </span>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* modal show  */}
      <Modal
        onClose={() => setShow(false)}
        show={show}
        fetchAllTask={fetchAllTask}
      />

      {/* modal two */}
      <ModalTwo
        onCloseTwo={() => setShowTwo(false)}
        showTwo={showTwo}
        deleteState={deleteState}
        pass={pass}
        fetchAllTask={fetchAllTask}
      />
    </>
  );
};

export default Home;
