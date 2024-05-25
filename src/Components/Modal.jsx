import React from "react";
import "./modal.css";
import { useSelector } from "react-redux";
const Modal = ({ setModal, modal, id }) => {
  const { users } = useSelector((state) => state.users);
  const singleUser = users.filter((item) => item.id === id);

  return (
    <>
      <div className="main">
        <div className="continer">
          <div className="x" onClick={() => setModal(!modal)}>
            X
          </div>
          <div className="content">
            <p>Name : {singleUser[0].name}</p>
            <p>Email: {singleUser[0].email}</p>
            <p>Age: {singleUser[0].age}</p>
            <p>Gender: {singleUser[0].gender}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
