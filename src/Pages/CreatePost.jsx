import React, { useState } from "react";
import { CreateUSer } from "../Features/GetUsers/getuser.Slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const [createusers, setCreateusers] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setCreateusers({ ...createusers, [e.target.name]: e.target.value });
  };
  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(CreateUSer(createusers));
    navigate("/posts");
  };
  return (
    <>
      <div
        style={{
          height: "82vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ background: "brown", width: "400px", padding: "10px" }}>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            onSubmit={handleCreate}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                onChange={handleChange}
              />
            </div>
            <div>
              <p>Please select your Gender</p>
              <div
                style={{
                  width: "100px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                />
              </div>
              <div
                style={{
                  width: "100px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <label htmlFor="female">Female</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                />
              </div>
            </div>
            <button
              style={{ padding: "5px 8px", cursor: "pointer" }}
              type="submit"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
