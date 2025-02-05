import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PageBreadcrumb } from "../components/Breadcrumb";
import { AddTicketForm } from "../components/AddTicketForm";
import { cleanup } from "@testing-library/react";
import { shortText } from "../utils/validation";

const initialFrmDt = {
  subject: "",
  issueDate: "",
  detail: "",
};

const initialFrmDtErr = {
  subject: false,
  issueDate: false,
  detail: false,
};

export const AddTicket = () => {
  const [frmData, setFrmData] = useState(initialFrmDt);
  const [frmDataErr, setFrmDataErr] = useState(initialFrmDtErr);
  useEffect(() => {}, [frmData, frmDataErr]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrmData({ ...frmData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const isSubjectValid = await shortText(frmData.subject);

    setFrmDataErr({
      ...initialFrmDtErr,
      subject: !isSubjectValid,
    });

    console.log("Form submit request received", frmData);
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
            frmDataErr={frmDataErr}
          />
        </Col>
      </Row>
    </Container>
  );
};
