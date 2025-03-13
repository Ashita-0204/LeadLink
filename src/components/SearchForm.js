import React from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterSearchTicket } from "../screens/TicketAction";

const SearchForm = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { value } = e.target;

    dispatch(filterSearchTicket(value));
  };

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
            placeholder="Search.."
          />
        </Col>
      </Form.Group>
    </Form>
  );
};

export default SearchForm;
