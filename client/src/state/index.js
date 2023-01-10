import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: "dark",
    userId: "63701cc1f03239c72c00017f"
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        }
    }
})

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;