import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios호출 함수 정의 및 export
export const fetchFlickr = createAsyncThunk(
  "flickr/requestFlickr",
  async (opt) => {
    const key = "4f2ed95542fa600d1ed1488dd32b341b";
    const method_interest = "flickr.interestingness.getList";
    const method_search = "flickr.photos.search";
    const method_user = "flickr.people.getPhotos";
    const count = 10;

    let url = "";
    if (opt.type === "interest") {
      url = `https://www.flickr.com/services/rest/?method=${method_interest}&api_key=${key}&per_page=${count}&format=json&nojsoncallback=1`;
    } else if (opt.type === "search") {
      url = `https://www.flickr.com/services/rest/?method=${method_search}&api_key=${key}&per_page=${count}&tags=${opt.tags}&format=json&nojsoncallback=1`;
    } else if (opt.type === "user") {
      url = `https://www.flickr.com/services/rest/?method=${method_user}&api_key=${key}&per_page=${count}&user_id=${opt.user}&format=json&nojsoncallback=1`;
    }

    const response = await axios.get(url);
    return response.data.photos.photo;
  }
);

// reducer
const flickrSlice = createSlice({
  name: "flickr",
  initialState: {
    data: [],
    isLoading: false,
  },
  extraReducers: {
    // 데이터 요청 후 응답 대기상태
    [fetchFlickr.pending]: (state) => {
      state.isLoading = true;
    },
    // 요청 수행이 완료 되었을 때 (데이터가 받아졌을 때)
    [fetchFlickr.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    // 요청 수행이 실패 했을 때
    [fetchFlickr.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

// 해당 리듀서 export
export default flickrSlice.reducer;
