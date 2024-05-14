import Datatable from "./Datatable";
import { users } from "./data";
import { useNavigate } from "react-router-dom"


export default function Admin(){

    var navigate = useNavigate();
    if (true){
        navigate("/Login");
       
    }
    else{
        return (
            <>
            <Datatable data={users}/>
            </>
        )
    }
   
}