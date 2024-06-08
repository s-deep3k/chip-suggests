
const InputSearch = ({initVal, onChange}:{initVal:string, onChange:(val:string)=>void}) => {
  return (
    <>
    <input
     className="bg-transparent focus:outline-none " 
     value={initVal}
     autoFocus
     onChange={(e)=>onChange(e.target.value)}
     type="text" 
     placeholder="Enter a chip of your choice!" />
</>
  )
}

export default InputSearch