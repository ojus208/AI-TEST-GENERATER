'use client'
import { useState, createContext } from "react";

const Quecontext = createContext()

export const Quecontextprovider = ({children})=>{
const [question, setquestion] = useState([])
const [answer, setanswer] = useState([])
const [currentque, setcurrentque] = useState(1)
return <Quecontext.Provider value={{value:[question, setquestion], value2:[answer,setanswer],value3:[currentque,setcurrentque]}}>
{children}
</Quecontext.Provider>
}

export default Quecontext
