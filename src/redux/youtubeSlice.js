import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios호출 함수 정의 및 export
export const fetchYoutube = createAsyncThunk(
  "youtube/requestYoutube",
  async () => {
    const key = "AIzaSyCCs-4zoiklCU1ygt2QFrB2Jy7nrfJc-dY";
    const playlist = "PL4wM-rifmHleEgufghHbslM5lnMBYdz1v";
    const num = 8;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

    const response = await axios.get(url);
    return response.data.items;
  }
);

// reducer
const youtubeSlice = createSlice({
  name: "youtube",
  initialState: {
    data: [],
    isLoading: false,
  },
  extraReducers: {
    // 데이터 요청 후 응답 대기상태
    [fetchYoutube.pending]: (state) => {
      state.isLoading = true;
    },
    // 요청 수행이 완료 되었을 때 (데이터가 받아졌을 때)
    [fetchYoutube.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    // 요청 수행이 실패 했을 때
    [fetchYoutube.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

// 해당 리듀서 export
export default youtubeSlice.reducer;
