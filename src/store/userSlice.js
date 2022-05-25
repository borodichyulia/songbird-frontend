import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        authorization: false,
    },
    reducers: {
        setAuthorization: (state) => {
            state.authorization = !state.authorization;
        }
    }
});

export default userSlice.reducer;
export const {
    setAuthorization
} = userSlice.actions;