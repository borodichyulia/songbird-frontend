import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import answerSlice from './answerSlice.js';
import counterSlice from './counterSlice.js';
import birdSlice from './birdSlice.js';
import changePageSlice from './changePage.js';
import userSlice from './userSlice';
 
const rootRducer = combineReducers({
    answer: answerSlice,
    counter: counterSlice,
    bird: birdSlice,
    changePage: changePageSlice,
    user: userSlice,
})
  
export const store = configureStore({
    reducer: rootRducer
})