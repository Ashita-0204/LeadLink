import React from "react";
import PropTypes from "prop-types";
import { Col, Form, InputGroup, Row } from "react-bootstrap";

const SearchForm = ({ handleOnChange, str }) => {
  console.log(str);
  return (
    <Form>
      <Form.Group as={Row}>
        <Form.Label column sm="2">
          Search:{" "}
        </Form.Label>
        <Col ms="10">
          <Form.Control
            name="searchStr"
            onChange={handleOnChange}
            value={str}
            placeholder="Search.."
          />
        </Col>
      </Form.Group>
    </Form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired,
};
