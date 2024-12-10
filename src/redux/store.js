import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./loadingSlice";

// store 설정
const store = configureStore({
  reducer: {
    loading: loadingReducer, // slice 추가
  },
});

export default store;
