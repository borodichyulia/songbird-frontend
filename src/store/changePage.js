import { createSlice } from "@reduxjs/toolkit";

const changePageSlice = createSlice({
    name: 'changePage',
    initialState: {
        disabled: true,
        
    },
    reducers: {
        setDisabled: (state) => {
            state.disabled = !state.disabled;
        }
    }
});

export default changePageSlice.reducer;
export const {
    setDisabled
} = changePageSlice.actions;