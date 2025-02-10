import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons"; // Importing search icon

const SearchForm = ({ handleOnChange, str }) => {
  return (
    <Form>
      <Form.Group>
        <InputGroup>
          <InputGroup.Text>
            <Search />
          </InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Search Tickets"
            value={str}
            onChange={handleOnChange}
          />
        </InputGroup>
      </Form.Group>
    </Form>
  );
};

export default SearchForm;

// SearchForm.propTypes -
//   {
//     handleOnChange: PropTypes.func.isRequired,
//     str: PropTypes.string.isRequired,
//   };
