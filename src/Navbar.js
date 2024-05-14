import {Button, Menu, Input} from "antd"
import {Link, useNavigate} from "react-router-dom"
import SearchOutlined from "@ant-design/icons" 


function Navbar(){
    var searchText
    var navigate = useNavigate()
    function Search(){
        console.log("User is searching for ", searchText)
        var url = "/Search?q="+ searchText
        //var url = "http://apibyauw.eu-4.evennode.com/api" + "/searchcakes?q=" + searchText
        navigate(url)
    }
    function handleSearchText(event)
    {
        searchText=event.target.value
    }

    const items = [
        {label:<Link to = "/">Cake Gallery</Link>},
        {label:"Home"},
        {label:"About Us"},
        {label:"Contact Us"},
        {label:(
            <Link to ="/Login"><Button type="primary">Login</Button></Link>
        )},
        {icon:(
            <>
            <Input placeholder = "Search" onChange={handleSearchText} ></Input>
           <SearchOutlined onClick={Search} ></SearchOutlined>
            </>
        )},
        {icon:(
            <>
            <Link to ="/Checkout"><Button>Checkout</Button></Link>
            </>
        )

        },
        {icon:(
            <>
            <Link to ="/Cart"><Button>Cart</Button></Link>
            </>
        )

        }

    ]
    return (
        <>
        <div>
            <Menu theme="dark" mode="horizontal" items={items} />
        </div>
        
        </>
    )
}

export default Navbar