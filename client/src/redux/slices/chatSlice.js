import {createSlice} from "@reduxjs/toolkit"

const chatSlice = createSlice({
    name: "auth",
    initialState: {
        connected: false,
        roomId: null,
    },
    reducers: {
        setConnected(state, action) {
            state.connected = action.payload;
        },

        setRoomId(state, action) {
            state.roomId = action.payload;
        }
    }
})

export const {setConnected, setRoomId} = chatSlice.actions;
export default chatSlice.reducer;