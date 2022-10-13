import { createSlice } from "@reduxjs/toolkit";

import birdsData from '../birdsData';

const birdSlice = createSlice({
    name: 'bird',
    initialState: { 
        birds: birdsData[0],
        birdRandom: birdsData[0][Math.floor(Math.random() * birdsData[0].length)],
        level: 0,
        disabledNextLevel: true
    },
    reducers: {
        changeBirdRandom: (state) => {
            state.birdRandom = birdsData[state.level][Math.floor(Math.random() * birdsData[state.level].length)];
            console.log(state.birdRandom);
        },
        changeBirds: (state) =>{
            state.birds = birdsData[state.level]; 
        },
        changeLevel: (state) => {
            state.level +=1;
        },
        changeDisabledNextLavel: (state, action) => {
            state.disabledNextLevel = action.payload;
        }, 
        setStateLevel: (state, actions) => {
            state.level = actions.payload;
        }
    }

});

export default birdSlice.reducer;
export const { 
    changeLevel, 
    changeBirds, 
    changeBirdRandom,
    changeDisabledNextLavel,
    setStateLevel
 } = birdSlice.actions;