import React from "react";
import { Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";

export const Update = ({ msg, handleOnChange, handleOnSubmit }) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Text>
        Please reply to your message here or Update the ticket
      </Form.Text>
      <Form.Label>Reply</Form.Label>
      <div className="text-right mt-5 mb-3">
        <Form.Control
          value={msg}
          onChange={handleOnChange}
          as="textarea"
          row="5"
          name="detail"
        />
        <Button variant="info" type="submit">
          Reply
        </Button>
      </div>
    </Form>
  );
};

Update.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired,
};
