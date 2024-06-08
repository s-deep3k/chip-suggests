import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store"
import { addChip, } from "../../features/chipSlice"
import { updateList } from "../../features/searchListSlice"

const ListSearch = ({ prompt, onClick }: { prompt: string, onClick: () => void }) => {
    const searchList = useSelector((state: RootState) => state.searchListReducer.searchList)
    //const chips = useSelector((state: RootState) => state.chipReducer.chips)
    const dispatch:AppDispatch = useDispatch()
    const highlightSelect = (str: string, match?: string) => {
        if (!match!.trim())
            return <span>{str}</span>
        const parts = str.split(new RegExp(`(${match})`, 'gi'))
        return <span>
            {parts.map((part, index) => part.toLowerCase() === match!.toLowerCase() ? <span key={index} className={`text-blue-500`}>{part}</span> : <span key={index}>{part}</span>)}
        </span>
    }

    return (
        prompt !== '' && searchList.filter(item => item.includes(prompt)).length > 0 &&
        <div className="max-h-[500px] mt-1 w-[400px] overflow-y-scroll bg-stone-100 rounded-lg shadow-md p-5">
            {searchList
            .filter(item=>item.includes(prompt))
            .map((item,index)=> 
            <div 
            key={index} 
            onClick={()=>{dispatch(addChip(item)); dispatch(updateList({type:"CHIP ADDED",chip:item})); onClick()}}
            className="hover:bg-stone-200 rounded-lg transition ease-in-out"
            >{highlightSelect(item,prompt)}</div>)
            }
        </div>    
    )
}

export default ListSearch
