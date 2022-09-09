import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import "./Work.css"

export default function WORK() {
    return (
    <>
    <div className="container">
        <div className="row">
    <h1>WORK PAGE</h1>
    <Card style={{ width: '46%' }} className="workCard">
      <Card.Body>
        <Card.Title>Customer Support Representative</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Zonar Systems, Inc.</Card.Subtitle>
        <Card.Text>
          <ul className="workCardText">
            <li>Customer facing and internal support for commercial fleet management hardware and software. </li>
            <li>Knowledge and training of commercial driver Hours of Service/ELD regulations. </li>
            <li>Interdepartmental problem resolution using Jira, Sharepoint and other related tools. </li>
            <li>Ticketing and escalation between customer support groups, internal programming teams and 3rd party integrators. </li>
          </ul>
        </Card.Text>
        <hr />
        <ListGroup className="list-group-flush">
        <ListGroup.Item>July 2019 - October 2021</ListGroup.Item>
      </ListGroup>
      </Card.Body>
    </Card>
    <Card style={{ width: '46%' }} className="workCard">
      <Card.Body>
        <Card.Title>Integrated Support Team - Tier 2</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Zonar Systems, Inc.</Card.Subtitle>
        <Card.Text>
          <ul className="workCardText">
            <li>Ownership of tier 2 support for telecommunication services. Providing escalated problem resolution for both first and third party software and hardware. </li>
            <li>MetaView POTS and VOIP line work including line building and feature sets. </li>
            <li>Data entry consisting of customer personal information and company wide system migrations. </li>
            <li>Telephone number porting between carriers including LSR generation and concurrence response requiring prompt communications between competing companies. </li>
          </ul>
        </Card.Text>
        <hr />
        <ListGroup className="list-group-flush">
        <ListGroup.Item>November 2012 - February 2019</ListGroup.Item>
      </ListGroup>
      </Card.Body>
    </Card>
    <Card style={{ width: '46%' }} className="workCard" >
      <Card.Body>
        <Card.Title>Customer Support Representative</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Zonar Systems, Inc.</Card.Subtitle>
        <Card.Text>
          <ul className="workCardText">
            <li>Customer facing and internal support for commercial fleet management hardware and software. </li>
            <li>Knowledge and training of commercial driver Hours of Service/ELD regulations. </li>
            <li>Interdepartmental problem resolution using Jira, Sharepoint and other related tools. </li>
            <li>Ticketing and escalation between customer support groups, internal programming teams and 3rd party integrators. </li>
          </ul>
        </Card.Text>
        <hr />
        <ListGroup className="list-group-flush">
        <ListGroup.Item>July 2019 - October 2021</ListGroup.Item>
      </ListGroup>
      </Card.Body>
    </Card>
    <button
            type="button"
            className="btn btn-primary"
            style={{ float: "right" }}
          >
            ADD
          </button>
    </div>
    </div>
    </>
    )
}