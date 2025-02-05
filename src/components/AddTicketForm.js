import React from "react";
import { Form, Container, Button, Row, Col } from "react-bootstrap";
import propTypes from "prop-types";
import { PropTypes } from "prop-types";

export const AddTicketForm = ({
  handleOnSubmit,
  handleOnChange,
  frmDtErr,
  frmDt,
}) => {
  console.log(frmDt);
  return (
    <Container className="add-ticket-form p-4 mt-4 shadow-lg rounded bg-light">
      <h3 className="text-center text-primary mb-4">Create a New Ticket</h3>

      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3} className="fw-bold">
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              className="p-2 border rounded"
              name="subject"
              minLength="3"
              maxLength="100"
              value={frmDt.subject}
              onChange={handleOnChange}
              placeholder="Enter ticket subject"
              required
            />
            {frmDtErr && !frmDtErr.subject && (
              <Form.Text className="text-danger small">
                Subject is required
              </Form.Text>
            )}
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3} className="fw-bold">
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              className="p-2 border rounded"
              type="date"
              name="issueDate"
              value={frmDt.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Details</Form.Label>
          <Form.Control
            className="p-2 border rounded"
            as="textarea"
            name="details"
            rows="4"
            value={frmDt.details}
            onChange={handleOnChange}
            placeholder="Describe the issue..."
            required
          />
        </Form.Group>

        <div className="d-grid">
          <Button type="submit" variant="primary" className="p-2 fw-bold">
            Submit Ticket
          </Button>
        </div>
      </Form>
    </Container>
  );
};

AddTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  frmDt: PropTypes.object.isRequired,
  frmDtErr: PropTypes.object.isRequired,
};
