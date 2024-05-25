import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

//create users
const BASE_URL = "https://663f7fabe3a7c3218a4d3ac3.mockapi.io/crud";
export const CreateUSer = createAsyncThunk(
  "create",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(BASE_URL, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//edit user informayion
export const editInfo = createAsyncThunk(
  "editInfo",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${BASE_URL}/${data.id}`, data);
      return res.data;
    } catch (erro) {
      rejectWithValue(erro);
    }
  }
);
//get all data of users
export const getAllUsers = createAsyncThunk(
  "getUsers",
  async (args, { rejectWithValue }) => {
    try {
      const AllUsers = await axios.get(BASE_URL);
      return AllUsers.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

//delete user by id
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      const deleteUser = await axios.delete(`${BASE_URL}/${id}`);
      return deleteUser.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

getAllUsers();
const getUsers = createSlice({
  name: "users",
  initialState: {
    users: [],
    isPending: false,
    isSuccess: false,
    isRejected: false,
  },
  extraReducers: (builder) => {
    builder.addCase(CreateUSer.pending, (state, action) => {
      state.isPending = true;
      state.isSuccess = false;
    });
    builder.addCase(CreateUSer.fulfilled, (state, action) => {
      state.isPending = false;
      state.isSuccess = true;
      state.users.push(action.payload);
    });
    builder.addCase(CreateUSer.rejected, (state, action) => {
      state.isPending = false;
      state.isRejected = true;
    });

    //get all users

    builder.addCase(getAllUsers.pending, (state, action) => {
      state.isPending = true;
      state.isSuccess = false;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.isPending = false;
      state.isSuccess = true;
      state.users = action.payload;
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.isPending = false;
      state.isSuccess = false;
      state.isRejected = true;
    });

    //delete user by id

    builder.addCase(deleteUser.pending, (state, action) => {
      state.isPending = true;
      state.isSuccess = false;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.isPending = false;
      state.isSuccess = true;
      const { id } = action.payload;
      if (id) {
        state.users = state.users.filter((user) => user.id !== id);
      }
    });

    //edir users
    builder.addCase(editInfo.pending, (state, action) => {
      state.isPending = true;
      state.isSuccess = false;
    });
    builder.addCase(editInfo.fulfilled, (state, action) => {
      state.isPending = false;
      state.users = state.users.map((ele) =>
        ele.id === action.payload.id ? action.payload : ele
      );
      state.isRejected = false;
    });
    builder.addCase(editInfo.rejected, (state, action) => {
      state.isPending = false;
      state.isSuccess = false;
      state.isRejected = true;
    });
  },
});
export default getUsers.reducer;
