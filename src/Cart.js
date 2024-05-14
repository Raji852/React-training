import axios from "axios"
import { useEffect,useState } from "react"
import Loader from "./Loader";

export default function Cart(){

    var [cartitems,setCartitems] = useState()

    useEffect(()=>{
        axios({
            method : "get",
            url: "http://apibyauw.eu-4.evennode.com/api" + "/cakecart",
            headers : {
                Authorization:localStorage.token
            }
        }).then((response)=>{
            setCartitems(response.data.data)
        })
    }, [])

    if(!cartitems){
        return <Loader/>
    }

    return(
        <>
        <h1>Cart Component</h1>
        </>
    )
}