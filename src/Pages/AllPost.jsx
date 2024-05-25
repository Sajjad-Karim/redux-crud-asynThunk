import React, { useEffect, useState } from "react";
import { getAllUsers } from "../Features/GetUsers/getuser.Slice";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Components/Modal";
import { deleteUser } from "../Features/GetUsers/getuser.Slice";
import { Link } from "react-router-dom";
const AllPost = () => {
  const { users, isPending } = useSelector((state) => state.users);
  const [modal, setModal] = useState(false);
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  const handleModal = (id) => {
    setModal(!modal);
    setId(id);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <>
      {modal && <Modal setModal={setModal} modal={modal} id={id} />}
      <div
        style={{
          width: "100%",
          minHeight: "82vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          padding: "10px 0px",
        }}
      >
        <div>
          <h3>All Data</h3>
          <div>
            <input type="radio" id="all" name="all" value="all" />
            <label htmlFor="all">All</label>
            <input type="radio" id="male" name="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="female" value="female" />
            <label htmlFor="female">female</label>
          </div>
        </div>
        {users &&
          users.map((item, id) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
                key={id}
              >
                <div
                  style={{
                    width: "300px",
                    background: "brown",
                    height: "120px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <div>
                    <p>Name: {item.name}</p>
                  </div>
                  <div>
                    <p>Email: {item.email}</p>
                  </div>
                  <div>
                    <p>Gender: {item.gender}</p>
                  </div>
                  <div>
                    <p>Age: {item.age}</p>
                  </div>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <Link to={`/edit/${item.id}`}>Edit</Link>
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                    <button onClick={() => handleModal(item.id)}>View</button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default AllPost;
