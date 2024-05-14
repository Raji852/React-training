import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import Cake from "./Cake";

import {  Row } from "antd";

import { useState } from "react"

import axios from 'axios' 

export default function Search(){

    var [query, setQuery] = useSearchParams()
    var text = query.get("q")
    var [cakes,setCakes] = useState()
    
    useEffect(()=> {searchCakes()},[])

    function searchCakes() {
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api" + "/searchcakes?q=" + text,
            method:"get"
            
        }).then((response)=>{console.log(" cakes details", response.data.data)
            setCakes(response.data.data)
        },

            (error)=>{console.log("no data", error)})
       
    }


    return(
        <>
         <Row>

                {
                    cakes?.map((each,index) => {
                        return <Cake data={each} key={index} />
                    }
                )
                }
            </Row>
        </>
    )
    
}