// import React, { useEffect, useState } from "react";
// import { Col, Container, Row, Button } from "react-bootstrap"; // ✅ Added Button import
// import { PageBreadcrumb } from "../components/Breadcrumb";
// import SearchForm from "../components/SearchForm";
// import { TicketTable } from "../components/TicketTable";
// import tickets from "../assets/dummy-tickets.json"; // ✅ Ensure this file exists and has correct JSON format

// export const Main = () => {
//   const [str, setStr] = useState("");
//   const [dispTickets, setdispTickets] = useState(tickets);

//   useEffect(() => {}, [str, dispTickets]);

//   const handleOnChange = (e) => {
//     const { value } = e.target;
//     setStr(value);
//     searchTicket(value);
//   };

//   const searchTicket = (sttr) => {
//     const displayTickets = tickets.filter((row) =>
//       row.subject.toLowerCase().includes(sttr.toLowerCase())
//     );

//     setdispTickets(displayTickets);
//   };

//   return (
//     <Container>
//       <Row>
//         <Col>
//           <PageBreadcrumb page="Ticket Lists" />
//         </Col>
//       </Row>

//       <Row className="mt-4">
//         <Col>
//           <Button variant="info">Add New Ticket</Button>
//         </Col>

//         <Col className="text-right">
//           <SearchForm handleOnChange={handleOnChange} str={str} />
//         </Col>
//       </Row>
//       <hr />
//       <Row>
//         <Col>
//           <TicketTable tickets={dispTickets} />
//         </Col>
//       </Row>
//     </Container>
//   );
// };
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TicketTable } from "../components/TicketTable";
import ticket from "../assets/dummy-tickets.json"; // ✅ Ensure this file exists and has correct JSON format
import { PageBreadcrumb } from "../components/Breadcrumb";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Link to="/tickets/add">
            <Button
              variant="info"
              style={{ fontSize: "2rem", padding: "10px 30px" }}
            >
              Add New Ticket
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="text-center  mb-2">
          <div>Total tickets:50</div>
          <div>Pending tickets: 02</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">Recently Added tickets</Col>
      </Row>
      <hr />

      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={ticket} />
        </Col>
      </Row>
    </Container>
  );
};
