import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchItems } from '../Actions/actions';
import { Col, Form, Row } from "react-bootstrap";

const SearchBar = ({ searchItems }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    searchItems(searchQuery);
  };

  return (
    <div>
    <Row >
          <Col sm={38}>
            <Form  id="searchbar" className="d-flex flex-row">
              <Form.Control
                type="search"
                id="search"
                placeholder="Search"
                className="me-1"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button id="searchbar" onChange={handleSearch} className="btn btn-light" variant="outline-primary">
                Search
              </button>
            </Form>
          </Col>
        </Row>
    </div>

  );
};

export default connect(null, { searchItems })(SearchBar);
// export default SearchBar