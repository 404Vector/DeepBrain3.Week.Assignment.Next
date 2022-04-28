import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { bookInfoActions } from '../reducers/bookInfoReducer.ts';
import { joinBookInfoApi, delBookInfoApi } from '../api/bookInfoApi.ts'

interface BookInfo{
    type: string;
    payload: {
        libName: String,
        bookName: String,
        author: String,
        publisher: String,
        publishedYear: String,
        dataBaseData: String,
        address: String,
        token: String
    }
}
interface BookInfoType{
    type: string;
    payload: {
        libName: String,
        bookName: String,
        author: String,
        publisher: String,
        publishedYear: String,
        dataBaseData: String,
        address: String
    }
}
interface BookInfoSuccessType{
    type: string;
    payload: {
        userid: string
    }
}

function* joinBookInfo(bookInfo: BookInfoType){
    try{
        alert(' 진행 3: saga내부 join 성공  '+ JSON.stringify(bookInfo))
        const response : BookInfoSuccessType = yield joinBookInfoApi(bookInfo.payload)
        yield put(bookInfoActions.joinBookInfoSuccess(response))
    }catch(error){
         alert('진행 3: saga내부 join 실패  ') 
         yield put(bookInfoActions.joinBookInfoFailure(error))
    }
}
export function* watchJoinBookInfo(){
    //alert(' 2.5 saga watch!')
    yield takeLatest(bookInfoActions.joinBookInfoRequest, joinBookInfo)
}
 

//watchLogout
function* delBookInfo(){
    try{
        const response : BookInfoSuccessType = yield delBookInfoApi()
        yield put(bookInfoActions.delBookInfoSuccess(response))
    }catch(error){
         console.log(error)
    }
}
export function* watchDelUser(){
    yield takeLatest(bookInfoActions.delBookInfoRequest, delBookInfo)
} 