import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../components/Breadcrumb";
import SearchForm from "../components/SearchForm";
import { TicketTable } from "../components/TicketTable";
import tickets from "../assets/dummy-tickets.json";

export const Ticketlist = () => {
  const [str, setStr] = useState("");
  const [dispTickets, setdispTickets] = useState(tickets);

  useEffect(() => {
    console.log("Displayed Tickets:", dispTickets); // Debugging log
  }, [dispTickets]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchTicket(value);
  };

  const searchTicket = (searchStr) => {
    if (!searchStr) {
      setdispTickets(tickets);
    } else {
      const filteredTickets = tickets.filter((ticket) =>
        ticket.subject.toLowerCase().includes(searchStr.toLowerCase())
      );
      setdispTickets(filteredTickets);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket Lists" />
        </Col>
      </Row>

      <Row className="mt-4 d-flex align-items-center">
        <Col md={4}>
          <Button variant="info">Add New Ticket</Button>
        </Col>

        <Col md={8} className="d-flex justify-content-end">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>

      <hr />

      <Row>
        <Col>
          <TicketTable tickets={dispTickets} />
        </Col>
      </Row>
    </Container>
  );
};
