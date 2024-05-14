import { Button, Row } from "antd";

import { useEffect, useState } from "react"
import Cake from "./Cake";
import Loader from "./Loader";
import axios from 'axios' 

function Cakelist() {
    // var cakes = [{
    //     name:"Choco Truffle",
    //     price:650,
    //     image:"truffle.webp",
    //     tag:"Best Seller"
    //  },{
    //     name:"Jim Beam Truffle",
    //     price:850,
    //     image:"jimbeam.webp"
    //  },{
    //     name:"Jim Beam Truffle",
    //     price:850,
    //     image:"jimbeam.webp"
    //  }]
    var [cakes,setCakes] = useState()

    useEffect(()=>{
        getCakelist()
    },[])

    function getCakelist() {
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api" + "/allcakes",
            method:"get"
            
        }).then((response)=>{console.log("all cakes", response.data.data)
            setCakes(response.data.data)
        },

            (error)=>{console.log("no data", error)})
       
    }

    if(!cakes){
        return <Loader/>
    }
    
    return (
        <>
            <Row>
                
                {/* <Cake data={cakes[0]}  />
                <Cake data={cakes[1]}  />
                <Cake data={cakes[2]}  /> */}
                <Button  onClick={getCakelist}  type="primary">Get Cake List</Button>
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

export default Cakelist 