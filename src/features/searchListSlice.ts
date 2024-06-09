import { createSlice } from "@reduxjs/toolkit";
import { suggestions } from "../../suggestions";
const initialState={
    searchList: suggestions.data
}

const searchListSlice = createSlice({
    name:'searchList',
    initialState,
    reducers:{
        updateList:(state,action:{payload:{type:string,chip:string}})=>{
            
            const {type,chip}= action.payload
            console.log(type,chip);
            
            if(type==='CHIP ADDED'){
                state.searchList = state.searchList.filter(item=>item!==chip)
            }
            if(type==='CHIP REMOVED'){
                state.searchList= state.searchList.concat(chip)
            }
        }
    }
})

export const {updateList} = searchListSlice.actions
export const searchListReducer = searchListSlice.reducer