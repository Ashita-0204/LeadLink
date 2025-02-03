import React from "react";
// import { useSelector } from "react-redux";
import { Button, Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";

export const TicketTable = ({ tickets }) => {
  return (
    <Container>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="info"
            style={{ fontSize: "2rem", padding: "10px 30px" }}
          >
            Add new Ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <div>Total tickets: 50</div>
          <div>Pending tickets: 5</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">Recently added tickets</Col>
      </Row>
      <hr />
      <Row>
        <Col className="recent-ticket">Table here</Col>
        <TicketTable tickets={tickets} />
      </Row>
    </Container>
  );
};
