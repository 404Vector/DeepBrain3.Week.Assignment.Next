import { createSlice } from "@reduxjs/toolkit"

export interface BookInfoType{

    libName: String;
    bookName: String;
    author: String;
    publisher: String;
    publishedYear: String;
    dataBaseData: String;
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
        
        delBookInfoRequest(state: BookInfoState, {payload}){
            alert('delBookInfoRequest')
            state.loading = false;
        },
        delBookInfoSuccess(state: BookInfoState, {payload}){ 
            alert('delBookInfoSuccess')
            state.loading = false;
        },
        delBookInfoFailure(state: BookInfoState, {payload}){ 
            alert('delBookInfoFailure')
            state.loading = false;
        }
    }
})
const { reducer, actions } = bookInfoSlice
export const bookInfoActions = actions
export default reducer