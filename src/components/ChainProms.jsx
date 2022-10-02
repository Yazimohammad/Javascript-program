import axios from "axios"
import React,{useState,useEffect} from "react"

export const ChainProms=()=>{
    const [data,setData]=useState([])

const getdata= ()=>{
    const result= axios.get("https://fakestoreapi.com/products/categories") 
    .then((res)=> {
        const reqUrl= `https://fakestoreapi.com/products/category/${res.data[1]}`
        axios.get(reqUrl).then(res=>setData(res.data))
    })
}
    useEffect(()=>{

getdata()
    },[])
    const getData2 = async () => {
        const result = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        const reqUrl = `https://fakestoreapi.com/products/category/${result.data[1]}`;
        const prods = await axios.get(reqUrl);
    
        setData(prods.data);
      };
    return(
        <React.Fragment>
         
{data.map(item=>
    <h3> {item .title}</h3>
    
    )}
        </React.Fragment>
    )
}