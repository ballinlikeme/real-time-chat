import {createSlice} from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {},
        isAuth: false,
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },

        setAuth(state, action) {
            state.isAuth = action.payload;
        }
    }
})

export const {setAuth, setUser} = authSlice.actions;
export default authSlice.reducer;