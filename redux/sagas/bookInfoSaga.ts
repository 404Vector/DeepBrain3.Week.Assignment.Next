import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { bookInfoActions } from '../reducers/bookInfoReducer.ts';
import { joinBookInfoApi, updateBookInfoApi, deleteBookInfoApi } from '../api/bookInfoApi.ts'


interface BookInfoType{
    type: string;
    payload: {
        id: string,
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
        ok: string
    }
}

// for join
function* joinBookInfo(bookInfo: BookInfoType){
    try{
        const response : BookInfoSuccessType = yield joinBookInfoApi(bookInfo.payload)
        yield put(bookInfoActions.joinBookInfoSuccess(response))
    }catch(error){
         yield put(bookInfoActions.joinBookInfoFailure(error))
    }
}
export function* watchJoinBookInfo(){
    yield takeLatest(bookInfoActions.joinBookInfoRequest, joinBookInfo)
}

// for update
function* updateBookInfo(bookInfo: BookInfoType){
    try {
      const response : BookInfoSuccessType = yield updateBookInfoApi(bookInfo.payload)
      yield put(bookInfoActions.updateBookInfoSuccess(response))
    } catch (err) {
      yield put(bookInfoActions.updateBookInfoFailure(err))
    }
  }
  export function* watchUpdateBookInfo(){
    yield takeLatest(bookInfoActions.updateBookInfoRequest, updateBookInfo)
  }
 

// for delete
function* deleteBookInfo(bookInfo: BookInfoType){
    try{
        const response : BookInfoSuccessType = yield deleteBookInfoApi(bookInfo.payload)
        yield put(bookInfoActions.deleteBookInfoSuccess(response))
    }catch(err){
         console.log(err);
         yield put(bookInfoActions.deleteBookInfoFailure(err))
    }
}
export function* watchDeleteBookInfo(){
    yield takeLatest(bookInfoActions.deleteBookInfoRequest, deleteBookInfo)
} 