import { createSlice } from "@reduxjs/toolkit";
import { suggestions } from "../../suggestions";
const initialState={
    searchList: suggestions.data
}

const searchListSlice = createSlice({
    name:'searchList',
    initialState,
    reducers:{
        updateList:(state,action)=>{
            if(action.type==='CHIP ADDED'){
                state.searchList = state.searchList.filter(item=>item!==action.payload.chip)
            }
            if(action.type==='CHIP REMOVED'){
                state.searchList.concat(action.payload.chip)
            }
        }
    }
})

export const {updateList} = searchListSlice.actions
export const searchListReducer = searchListSlice.reducer