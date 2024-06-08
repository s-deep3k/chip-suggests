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
                console.log("Cholese addChip",state.chips);
                },
        removeChip:(state,action)=>{
            state.chips=state.chips.filter(chip=>chip!==action.payload)
            console.log("cholese removeChip",state.chips);
            
        }
    }
})

export const {addChip,removeChip} = chipSlice.actions
export const chipReducer = chipSlice.reducer