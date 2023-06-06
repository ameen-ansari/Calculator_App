import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "slice",
    initialState: { input: '12+12' },
    reducers: {
        updateInput: (state, action) => {
            if (action.payload === 'AC') {
                return {
                    input: ''
                }
            } else if (action.payload === '+/-') {
                if (state.input[0] === '-') {
                    let newValue = state.input.slice(1, state.input.length)
                    return {
                        input: newValue
                    }
                } else {
                    let newValue = '-' + state.input
                    return {
                        input: newValue
                    }
                }
            } else if (action.payload === '=') {
                let ans = eval(state.input)
                console.warn(ans);
            } else {
                let prevState = state.input
                let updatedValue = prevState + action.payload
                return {
                    input: updatedValue
                }
            }
        },
        decreaseInput: (state, action) => {
            let newValue = state.input.slice(0, state.input.length - 1)
            return {
                input: newValue
            }
        }
    },
})

export const { updateInput, decreaseInput } = slice.actions
export default slice.reducer