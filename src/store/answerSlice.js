import { createSlice } from "@reduxjs/toolkit";

const answerSlice = createSlice({
    name: 'answer',
    initialState: {
        id: 0,
        answer: false,
        trueImage: 'https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg',
        trueName: '******',
    },
    reducers: {
        setId: (state, action) => {
            state.id = action.payload;
        },
        changeAnswer: (state, action) => {
            state.answer = action.payload;
        }, 
        changeTrueImage: (state, action) => {
            state.trueImage = action.payload;
        }, 
        changeTrueName: (state, action) => {
            state.trueName = action.payload;
        }
    }

});

export default answerSlice.reducer;
export const { 
    setId, 
    changeAnswer,
    changeTrueImage, 
    changeTrueName
} = answerSlice.actions;