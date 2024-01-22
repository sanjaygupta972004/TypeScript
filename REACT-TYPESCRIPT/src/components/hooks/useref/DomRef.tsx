import {useEffect, useRef,useState} from 'react'

const DomRef = () => {
   const[show, setShow] = useState< string>("")
   const inputRef = useRef<HTMLInputElement>(null)

   useEffect(()=> {
      inputRef.current?.style.setProperty("color","red") 
   },[])

  return (
    <div>
    <h2> DomRef </h2>
      <input 
      type="text"  
      ref =  {inputRef }
      value={show}
      onChange={(e)=>{setShow(e.target.value)}}
       />
      
      { show && <h3> {show} </h3>}

    </div>
  )
}

export default DomRef