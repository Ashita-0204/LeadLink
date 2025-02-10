import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { PropTypes } from "react-bootstrap/esm/Image";

export const SearchForm = ({ handleOnChange, str }) => {
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Search:{" "}
          </Form.Label>
          <Col sm="10">
            <Form.Control
              name="searchStr"
              onChange={handleOnChange}
              value={str}
              placeholder="search.."
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

SearchForm.propTypes -
  {
    handleOnChange: PropTypes.func.isRequired,
    str: PropTypes.string.isRequired,
  };
