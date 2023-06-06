import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "slice",
    initialState: { input: '12+12', output: '24' },
    reducers: {
        updateInput: (state, action) => {
            if (action.payload === 'AC') {
                return {
                    input: ''
                }
            } else if (action.payload === 'ans') {
                let output = state.output.toString()

                return {
                    ...state,
                    input: output
                }
                console.warn(state.output);
            } else if (action.payload === '=') {
                let value = state.input.replace(/x/g, '*')
                let ans = eval(value)
                return {
                    input: '',
                    output: ans
                }
            }
            else {
                let prevState = state.input
                let updatedValue = prevState + action.payload
                return {
                    ...state,
                    input: updatedValue
                }
            }
        },
        decreaseInput: (state, action) => {
            let newValue = state.input.slice(0, state.input.length - 1)
            return {
                ...state,
                input: newValue
            }
        }
    },
})

// const output = createSlice({
//     name: "slice",
//     initialState: { output: '24' },
//     reducers: {}
// })
export const { updateInput, decreaseInput } = slice.actions

export default combineReducers({
    // value:output.reducer,
    value: slice.reducer,
});