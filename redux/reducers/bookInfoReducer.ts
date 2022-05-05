import { createSlice } from "@reduxjs/toolkit"

export interface BookInfoType{
    id: string;
    libName: String;
    bookName: String;
    author: String;
    publisher: String;
    publishedYear: String;
    dataBaseDate: String;
}

export interface BookInfoState{
    loading: boolean;
    data: BookInfoType[];
    error: any;
}


const initialState: BookInfoState = {
    loading: false,
    data: [],
    error: null
}

const bookInfoSlice = createSlice({
    name: 'bookInfo',
    initialState,
    reducers: {
        joinBookInfoRequest(state: BookInfoState, payload) {
            state.loading = true; 
        },
        joinBookInfoSuccess(state: BookInfoState, {payload}){ 
            state.data = [...state.data, payload]
            state.loading = false;
        },
        joinBookInfoFailure(state: BookInfoState, {payload}){ 
            state.data = payload;
            state.loading = false;
        },
        

        updateBookInfoRequest(state: BookInfoState, payload) {
            state.loading = true;
        },
        updateBookInfoSuccess(state: BookInfoState, { payload }) {
            state.data = [...state.data, payload];
            state.loading = false;
        },
        updateBookInfoFail(state: BookInfoState, { payload }) {
            state.data = payload;
            state.loading = false;
        },
        
        deleteBookInfoRequest(state: BookInfoState, {payload}){
            state.loading = false;
        },
        deleteBookInfoSuccess(state: BookInfoState, {payload}){ 
            state.data = [...state.data, payload];
            state.loading = false;
        },
        deleteBookInfoFailure(state: BookInfoState, {payload}){ 
            state.data = payload;
            state.loading = false;
        },
    },
})
const { reducer, actions } = bookInfoSlice
export const bookInfoActions = actions
export default reducer