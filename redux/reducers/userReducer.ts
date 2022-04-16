import { createSlice } from "@reduxjs/toolkit"

// 몽고DB 스키마
export interface UserType{
    userid: string;
    password: string;  
    email: string;
    name: string;  
    phone: string;
    birth: string;
    address: string;
}

/* 패턴화 되어있는것임.
export interface ABCState{
    loading: boolean;
    data: ABCType[];
    error: any;
}
*/
export interface UserState{
    loading: boolean;
    data: UserType[];
    error: any;
}


const initialState: UserState = {
    loading: false,
    data: [],
    error: null
}

const userSlice = createSlice({
    name: 'users', // 이름
    initialState, // 초기화
    //Slice들
    reducers: 
    {
        // 리듀서가 되기 전 상태, action이 투입될 때 리듀서가 된다
        joinRequest(state: UserState, payload){
            alert('진행 2: 리듀서 내부 ') 
            state.loading = true; 
        },
        // {payload}이 compoent에서 넘어와야함, "Action"
        // 우리는 완전한 reducer를 볼 수 없다?
        joinSuccess(state: UserState, {payload}){ 
            state.data = [...state.data, payload]
            state.loading = false;
        },
        joinFailure(state: UserState, {payload}){ 
            state.data = payload;
            state.loading = false;
        }
    }
})
const { reducer, actions } = userSlice
export const userActions = actions
export default reducer