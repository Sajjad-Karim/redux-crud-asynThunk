import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { useSelector } from "react-redux";
const Header = () => {
  const { users } = useSelector((state) => state.users);
  const AllusersLength = users.length;

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 30px",
          background: "brown",
        }}
      >
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <h3>API-calling-RTK</h3>
          <div style={{ display: "flex", gap: "5px" }}>
            <NavLink
              to={"/"}
              className={({ isActive }) => {
                return isActive ? "active" : "menuItems";
              }}
            >
              Create Post
            </NavLink>
            <NavLink
              to={"/posts"}
              className={({ isActive }) => {
                return isActive ? "active" : "menuItems";
              }}
            >
              All post({AllusersLength})
            </NavLink>
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="search..."
            style={{ padding: "5px", width: "300px" }}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
