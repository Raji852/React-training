export default function Test(){
    var email
    function handleName(event) {
        email = event.target.value
        console.log("Email Id : ",email )
    }


    return(
        <>
        <input type="text" onChange={handleName} >Enter name</input>
        </>
    )
}