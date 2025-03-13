import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const TicketTable = () => {
  const {
    searchTicketList = [],
    isLoading,
    error,
  } = useSelector((state) => state.tickets);

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>{error}</h1>;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {searchTicketList.length > 0 ? (
          searchTicketList.map((row) => (
            <tr key={row._id}>
              <td>{row._id}</td>
              <td>
                <Link to={`/ticket/${row._id}`}>{row.subject}</Link>
                {/* <td>{row.subject}</td> */}
              </td>
              <td>{row.status}</td>
              <td>{row.openAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No Tickets Found
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

TicketTable.propTypes = {
  tickets: PropTypes.array.isRequired,
};
