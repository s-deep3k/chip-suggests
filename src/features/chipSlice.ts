import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chips: ['']
}
const chipSlice = createSlice({
    name:'chip',
    initialState,
    reducers:{
        addChip:(state,action)=>{
            state.chips.concat(action.payload.chip)
        },
        removeChip:(state,action)=>{
            state.chips=state.chips.filter(chip=>chip!==action.payload.chip)
        }
    }
})

export const {addChip,removeChip} = chipSlice.actions
export const chipReducer = chipSlice.reducer