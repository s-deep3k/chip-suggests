
const ChipAutoComplete2 = () => {
  return (
    <>
        <div className="bg-stone-300 rounded-3xl p-2 border border-opacity-50 border-stone-400 
    flex w-[40%] h-[55px] min-w-[400px] gap-x-1 items-center">
        <Chip ref={chipRef}/>
        <SearchInput onChange={onInputChange}/>
        </div>
        <SearchList list={{suggestions,select:input,chips}} onSelect={onChipChange}/>
    </>
  )
}

export default ChipAutoComplete2