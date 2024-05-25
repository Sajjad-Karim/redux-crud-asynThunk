import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editInfo } from "../Features/GetUsers/getuser.Slice";
const Update = () => {
  const { id } = useParams();
  const { users } = useSelector((state) => state.users);
  const [updateData, setUpdate] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const edituser = users.filter((item, index) => id === item.id);
    setUpdate(edituser[0]);
  }, []);
  const handleEdit = (e) => {
    setUpdate({ ...updateData, [e.target.name]: e.target.value });
  };
  const perormEdit = (e) => {
    e.preventDefault();
    dispatch(editInfo(updateData));
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
            onSubmit={perormEdit}
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
                value={updateData && updateData.name}
                onChange={handleEdit}
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
                value={updateData && updateData.email}
                onChange={handleEdit}
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
                value={updateData && updateData.age}
                onChange={handleEdit}
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
                  checked={updateData && updateData.gender === "male"}
                  onChange={handleEdit}
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
                  checked={updateData && updateData.gender === "female"}
                  onChange={handleEdit}
                />
              </div>
            </div>
            <button
              style={{ padding: "5px 8px", cursor: "pointer" }}
              type="submit"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
