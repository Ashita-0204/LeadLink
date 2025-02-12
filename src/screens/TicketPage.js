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
    <Container>
      <Row>
        <Col>
          <Breadcrumb page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary">
          {Id}
          <div className="subject"> Subject :{ticket.subject}</div>
          <div className="date">Date :{ticket.addedAt}</div>
          <div className="status">Status :{ticket.status}</div>
        </Col>
        <Col className="text-right">
          <Button variant="outline-infoll"> Close Ticket</Button>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>{ticket.history && <MessageHistory msg={ticket.history} />}</Col>
      </Row>

      <hr />

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
