import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { 
        currentScore: 5,
        resultScore: 0,
    },
    reducers: {
        changeCurrentScore: (state) => {
            state.currentScore -=1;
        }, 
        changeResultScore: (state) => {
            state.resultScore +=state.currentScore;
        },
        setStateCurrentScore: (state, actions) => {
            state.currentScore = actions.payload;
        },
        setStateResultScore: (state, actions ) => {
            state.resultScore = actions.payload;
        },

    }

});

export default counterSlice.reducer;
export const { 
    changeCurrentScore,
    changeResultScore,
    setStateCurrentScore,
    setStateResultScore } = counterSlice.actions;