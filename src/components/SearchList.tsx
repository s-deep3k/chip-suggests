
const SearchList = ({list, suggestion}:{list: string[], suggestion?: string}) => {
    console.log(suggestion);
    
  return (
    <div className="max-h-[200px] overflow-y-scroll bg-stone-50 rounded-md shadow-md p-5">
        {suggestion?(list.map(item=><div className="hover:bg-stone-200 rounded-lg transition ease-in-out delay-75">{item}</div>)):<div>No Suggestions yet!</div>}
    </div>
  )
}

export default SearchList