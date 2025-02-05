import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PageBreadcrumb } from "../components/Breadcrumb";
import { AddTicketForm } from "../components/AddTicketForm";
import { cleanup } from "@testing-library/react";

const initialFrmDt = {
  subject: "",
  issueDate: "",
  detail: "",
};
export const AddTicket = () => {
  const [frmData, setFrmData] = useState(initialFrmDt);
  useEffect(() => {}, [frmData]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrmData({ ...frmData, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log("Form submit request received");
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>

      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmDt={frmData}
          />
        </Col>
      </Row>
    </Container>
  );
};
