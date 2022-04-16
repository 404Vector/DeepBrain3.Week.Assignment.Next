import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper' // ./이 아닌 이유 : package.json에 정의되있기때문
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './sagas/index.ts'
import rootReducer from './reducers/index.ts'

// release시 production으로 변경!
const isDev = process.env.NODE_ENV === 'development' 
// const isProd = process.env.NODE_ENV === 'production' 

const sagaMiddleware = createSagaMiddleware()

const createStore = () =>{
    // 하나만 존재하게 만듬, [reducer,middleware]이 핵심 devTools: 디버깅용
    const store = configureStore({
        reducer: rootReducer, 
        devTools: true,
        middleware: [sagaMiddleware],
    })
    sagaMiddleware.run(rootSaga)
    return store
}

// pages/_app.js로 export, "export default wrapper.withRedux(App)"
export const wrapper = createWrapper(createStore, {debug: isDev})
export type RootState = ReturnType<typeof rootReducer>