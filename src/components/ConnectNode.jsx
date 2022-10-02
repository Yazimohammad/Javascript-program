import React,{useState,useEffect} from "react"
import axios from "axios"
export const ConnectNode=()=>{
    const [txt,setTxt]=useState([])
    const getdata=async()=>{

        const result = await axios.get("http://localhost:5050/person")
        setTxt(result.data)
    }
useEffect(()=>{

    getdata()
},[])

return(   
    
    <div>

        <h1>Hii..</h1>
        <h1>{txt.name}</h1>
        <h1>{txt.email}</h1>
        <h1>{txt.mobile}</h1>
        <h1>{txt.city}</h1>



    </div>
)

}