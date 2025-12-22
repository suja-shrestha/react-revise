import { useState,useEffect } from "react";


const useEffectExample = () => {
    const [value,setValue] = useState("");
    useEffect(()=>{
        console.log("Value changed:",value);
    },[value])
  return (
    <>
    <label>
    Enter the value:
    <input type="text" onChange={(e)=>setValue (e.target.value)} />
    </label>
    </>

  )
}

export default useEffectExample;