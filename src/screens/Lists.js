import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap"; // ✅ Added Button import
import { PageBreadcrumb } from "../components/Breadcrumb";
import SearchForm from "../components/SearchForm";
import { TicketTable } from "../components/TicketTable";
import tickets from "../assets/dummy-tickets.json"; // ✅ Ensure this file exists and has correct JSON format

export const Lists = () => {
  const [str, setStr] = useState("");
  const [dispTickets, setdispTickets] = useState(tickets);

  useEffect(() => {}, [str, dispTickets]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchTicket(value);
  };

  const searchTicket = (sttr) => {
    const displayTickets = tickets.filter((row) =>
      row.subject.toLowerCase().includes(sttr.toLowerCase())
    );

    setdispTickets(displayTickets);
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket Lists" />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col className="text-right">
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
