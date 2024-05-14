import { useParams  } from "react-router-dom";
import { useEffect, useState } from "react";
import {  Image, Button } from "antd";
import axios from 'axios'

export default function Cakedetails () {

    var params = useParams ()
    var [cakedetails,setCakedetails] = useState()
    
    useEffect(()=> {
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/Cake/" + params.cakeid,
            method:"get"
            
        }).then((response)=>{setCakedetails(response.data.data)},
            (error)=>{console.log("Cake details are not avilable", error)})
    },[])

    function addToCart(){

        var requestJson = {
            cakeid:cakedetails.cakeid,
            name:cakedetails.name,
            price:cakedetails.price,
            weight:cakedetails.weight,
            image:cakedetails.image
            
        }

        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/addcaketocart/",
            method:"post",
            data : requestJson ,
            headers: { 
                Authorization:localStorage.token
            }
            
        }).then((response)=>{console.log("Cake added", response.data.data)})
   

    }
        

    return(
        <>
            
            {cakedetails && ( // Render details only if cakedetails is available
                <div>
                    <h2>Cake Details</h2>
                    <Image preview={false} src={cakedetails.image} width={200}></Image>
                    <p>Name: {cakedetails.name}</p>
                    <p>Price: {cakedetails.price}</p>
                    <p>Ratings: {cakedetails.ratings}</p>
                    <p>Reviews: {cakedetails.reviews}</p>
                    <p>Description: {cakedetails.description}</p>

                    <Button onClick={addToCart} >Add to Cart</Button>
                </div>
            )}
        </>


    )
}