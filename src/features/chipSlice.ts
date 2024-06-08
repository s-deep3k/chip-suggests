import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chips: [] as string[]
}
const chipSlice = createSlice({
    name:'chip',
    initialState,
    reducers:{
        addChip:(state,action)=>{
            const chip = action.payload
            if(state.chips.filter(items=>items.includes(chip)).length>0){
                alert("No Duplicate Chips can be added!")
                return
                }
                chip!==''?state.chips=state.chips.concat(chip):null
                },
        removeChip:(state,action)=>{
            state.chips=state.chips.filter(chip=>chip!==action.payload)
        },
        backspaceRemoveChip:(state)=>{
            if(state.chips.length>0)
            removeChip(state.chips.pop())
        }
    }
})

export const {addChip,removeChip,backspaceRemoveChip} = chipSlice.actions
export const chipReducer = chipSlice.reducer