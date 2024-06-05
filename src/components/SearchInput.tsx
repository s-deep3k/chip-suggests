

const SearchInput = ({onChange}:{onChange: (val: string) => void}) => {
    
    
  return (
    <>
        <input
         className="bg-transparent focus:outline-none " 
         autoFocus
         onChange={(e)=>onChange(e.target.value)}
         type="text" 
         placeholder="Enter a chip of your choice!" />
    </>
  )
}

export default SearchInput