
import React from "react"
import { Card, CardBody, Col, Media } from "reactstrap"

const MiniCards = () => {
  
  return (
    <React.Fragment>
      <Col md="10">
        <Card className="mini-stats-wid">
          <CardBody>
            <Media>
              <Media body>
            
              <h3 className=" fw-medium mb-0">Cubix Bussiness Park</h3>
              <div className="mini-stat-icon avatar-sm align-self-center rounded-circle bg-primary">
              <span className="avatar-title">
                  <i className={"bx " +  " font-size-24"} />
              

                </span>
             
              </div>
              <h5 className="text-muted fw-medium mb-2">Rahul Alam</h5>
                <p className="mb-0"> 26/July/2021 5:45 PM</p>
                <p className="mb-0">Puepose-Others</p>
                <p className="mb-0">Contact Person-Madhu</p>
                <p className="mb-0">Company Name-Espl</p>
              
<button className='btn-primary mx-3 my-3'>Close</button>
<button  className='btn-primary mx-3 my-3'>Print</button>
<button  className='btn-primary mx-3 my-3'>Send Sms</button>



              </Media>
           
            </Media>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}



export default MiniCards
