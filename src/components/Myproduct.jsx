import React,{useState,useEffect} from 'react'
import axios from 'axios'


export const Myproduct=()=>{
    const [data,setData]=useState([])

    const getdata=()=>{

const result = axios.get("https://fakestoreapi.com/users")
setData(result.data)
console.log(result)

    }

    return(

       <React.Fragment>

       </React.Fragment>
    )
}