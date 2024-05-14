import { Outlet, Link } from "react-router-dom"
import { Col, Row } from "antd"
export default function Checkout() {
    return(
        <>
        <h1>Checkout Compoenent</h1>
        <Row>
            <Col span={6} >
            
           <Link to = "/Checkout/Address"> <div>Address</div> </Link>
            </Col>
            <Col span = {18} >
                

                <Outlet/>
            </Col>
        </Row>
        </>
    )
}