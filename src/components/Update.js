import React from "react";
import { Button,  Form } from "react-bootstrap";
import PropTypes from "prop-types";

export const Update = ({ msg, handleOnChange, handleOnSubmit }) => {
  return (
  
    <Form
      onSubmit={handleOnSubmit}
      className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl"
    >
      <Form.Text className="text-lg font-semibold text-gray-700 text-center">
        Please reply to your message here or Update the ticket
      </Form.Text>
      <Form.Label className="block text-gray-600 text-sm font-medium">
        Reply
      </Form.Label>
      <Form.Control
        value={msg}
        onChange={handleOnChange}
        as="textarea"
        rows="5"
        name="detail"
        className="w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-3"
      />
      <div className="flex justify-end mt-4">
        <Button
          variant="info"
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
        >
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
