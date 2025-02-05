import React from "react";
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import { TicketTable } from "./TicketTable";
import tickets from "../assets/dummy-tickets.json";
import { PageBreadcrumb } from "./Breadcrumb";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Main" />
        </Col>
      </Row>

      <Row>
        <Col className="text-center mt-5 mb-2">
          <Link to="/tickets/add">
            <Button
              variant="info"
              style={{ fontSize: "2rem ", padding: "10px 30px" }}
            >
              Add New Ticket
            </Button>
          </Link>
        </Col>
      </Row>

      <Row>
        <Col className="text-center mb-2"></Col>
        <div>Total Tickets:50</div>
        <div>Pending Tickets:5</div>
      </Row>

      <Row>
        <Col className="mt-2"></Col>
        Recently added tickets
      </Row>
      <hr />

      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};
