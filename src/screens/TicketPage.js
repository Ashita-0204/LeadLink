import React, { useEffect, useState } from "react";
import { Container, Row, Col, Breadcrumb, Button } from "react-bootstrap";
import tickets from "../assets/dummy-tickets.json";
import { MessageHistory } from "../components/MessageHistory";
import { Update } from "../components/Update";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

// const ticket = tickets[0];
export const TicketPage = () => {
  const { Id } = useParams();

  const [message, setMessage] = useState("");
  const [ticket, setTicket] = useState("");

  useEffect(() => {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].id == Id) {
        setTicket(tickets[i]);
        continue;
      }
    }
  }, [message]);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = () => {
    alert("Form Submitted");
  };
  return (
   
    <Container className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-2xl">
      <Row>
        <Col>
          <Breadcrumb page="Ticket" />
        </Col>
      </Row>
      <Row className="flex items-center justify-between mt-4">
        <Col className="font-bold text-gray-700">
          {Id}
          <div className="text-lg font-semibold">Subject: {ticket.subject}</div>
          <div className="text-sm text-gray-500">Date: {ticket.addedAt}</div>
          <div className="text-sm text-gray-500">Status: {ticket.status}</div>
        </Col>
        <Col className="text-right">
          <Button
            variant="outline-info"
            className="border border-blue-500 text-blue-500 hover:bg-blue-100"
          >
            Close Ticket
          </Button>
        </Col>
      </Row>
      <Row className="mt-6">
        <Col>{ticket.history && <MessageHistory msg={ticket.history} />}</Col>
      </Row>
      <hr className="my-6" />
      <Row className="mt-4">
        <Col>
          <Update
            msg={message}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};

MessageHistory.propTypes = {
  msg: PropTypes.array.isRequired,
};
