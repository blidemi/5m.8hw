import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
    text: 'Hello World!',
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementCount: (state) => {
            if(state.count < 15) state.count++;
        },
        decrementCount: (state) => {
            if(state.count > 0)
                state.count--;
        },
        incrementCountBy: (state, action) => {
            if(state.count + action.payload <= 15)
                state.count += action.payload;
        },
        decrementCountBy: (state, action) => {
            if(state.count - action.payload >= 0)
                state.count -= action.payload;
        },
        setText: (state, action) => {
            state.text = action.payload;
        },
        resetCount: (state) => {
            state.count = 0;
        },
    },
});

export const { incrementCount, decrementCount, incrementCountBy, decrementCountBy, setText, resetCount } = counterSlice.actions;

export default counterSlice.reducer;
