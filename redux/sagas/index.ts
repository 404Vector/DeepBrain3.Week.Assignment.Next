import {all} from 'redux-saga/effects'
import { watchJoin, watchLogin, watchLogout } from './userSaga.ts'
import { watchJoinBookInfo, watchUpdateBookInfo , watchDeleteBookInfo } from './bookInfoSaga.ts'


export default function* rootSaga(){
    yield all([
        watchJoin(), 
        watchLogin(), 
        watchLogout(),
        watchJoinBookInfo(),
        watchUpdateBookInfo(),
        watchDeleteBookInfo(),
    ])

}