import { createSlice } from "@reduxjs/toolkit";

// 초기 상태 정의
const initialState = {
  loading: false,
};

// slice 생성
const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    startLoading(state) {
      state.loading = true;
    },
    stopLoading(state) {
      state.loading = false;
    },
  },
});

// 액션과 리듀서 내보내기
export const { startLoading, stopLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
