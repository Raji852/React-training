import { useParams } from "react-router-dom"
import {users} from "./data"


export default function UserData (){

    var params = useParams ()
    var userid = params.userid

    var user = users.filter((each)=> {
        userid = Number.parseInt(userid)
        return each.id === userid
    })[0]
    var keys = Object.keys(user)
    return(
        <>
        {
            keys?.map((each)=> {return (
                <li>{each} : { user[each]}</li>)
            })
        }
        </>
    )
}