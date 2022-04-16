import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
//import { userActions } from '../../redux/reducers/userReducer.ts';
import { userActions } from '../reducers/userReducer.ts';
import { postUser } from '../api/userApi.ts'

interface UserJoinType{
    type: string;
    payload: {
        userid:string, password:string, email:string, 
        name:string, phone:string, birth:string, address:string
    }
}
interface UserJoinSuccessType{
    type: string;
    payload: {
        userid: string
    }
}
/* yield : yield ~일 때, ~가 끝날 때 까지 모니터링 멈춤 */
// 제너레이터 함수, 존재하지 않는 함수?, 
function* join(user: UserJoinType){
    try{
        alert(' 진행 3: saga내부 join 성공  '+ JSON.stringify(user))
        const response : UserJoinSuccessType = yield postUser(user.payload)
        yield put(userActions.joinSuccess(response))
    }catch(error){
         alert('진행 3: saga내부 join 실패  ') 
         yield put(userActions.joinFailure(error))
    }
}
// Whatcher. action을 모니터링하다가 join을 생성시킴
export function* watchJoin(){
    yield takeLatest(userActions.joinRequest, join)
}