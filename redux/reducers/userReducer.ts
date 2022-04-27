import { createSlice } from "@reduxjs/toolkit"

export interface UserType{
    userid: string;
    password: string;  
    email: string;
    name: string;  
    phone: string;
    birth: string;
    address: string;
}

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
    name: 'users',
    initialState,
    reducers: {
        joinRequest(state: UserState, payload) {
            state.loading = true; 
        },
        joinSuccess(state: UserState, {payload}){ 
            state.data = [...state.data, payload]
            state.loading = false;
            
        },
        joinFailure(state: UserState, {payload}){ 
            state.data = payload;
            state.loading = false;
        },
        loginRequest(state: UserState, payload) {
            //alert('진행 2 ') 
            state.loading = true; 
        },
        loginSuccess(state: UserState, {payload}){ 
            state.data = [...state.data, payload]
            state.loading = false;
            
        },
        loginFailure(state: UserState, {payload}){ 
            state.data = payload;
            state.loading = false;
        },
        logoutRequest(state: UserState, {payload}){ 
            alert('logout req logoutRequest')
            state.loading = false;
        },
        logoutSuccess(state: UserState, {payload}){ 
            alert('logout req logoutSuccess')
            state.loading = false;
            localStorage.clear()
            window.location.href = '/'
        },
        logoutFailure(state: UserState, {payload}){ 
            alert('logout req logoutFailure')
            state.loading = false;
        },
        delUserRequest(state: UserState, {payload}){ 
            alert('logout req delUserRequest')
            state.loading = false;
        },
        delUserSuccess(state: UserState, {payload}){ 
            alert('logout req delUserSuccess')
            state.loading = false;
        },
        delUserFailure(state: UserState, {payload}){ 
            alert('logout req delUserFailure')
            state.loading = false;
        }
    }
})
const { reducer, actions } = userSlice
export const userActions = actions
export default reducer