import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap"; // ✅ Added Button import
import { PageBreadcrumb } from "../components/Breadcrumb";
import SearchForm from "../components/SearchForm";
import { TicketTable } from "../components/TicketTable";
import { useDispatch } from "react-redux";
import { fetchAllTickets } from "./TicketAction";

export const Lists = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTickets());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket Lists" />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col className="text-right">
          <SearchForm />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable />
        </Col>
      </Row>
    </Container>
  );
};
