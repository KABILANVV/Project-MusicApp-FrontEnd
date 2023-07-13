import { Col, Form, Row } from "react-bootstrap";

export default function SearchBar() {
    return (
        <Row >
          <Col sm={38}>
            <Form  id="searchbar" className="d-flex flex-row">
              <Form.Control
                type="search"
                id="search"
                placeholder="Search"
                className="me-1"
                aria-label="Search"
              />
              <button id="searchbar" className="btn btn-light" variant="outline-primary">
                Search
              </button>
            </Form>
          </Col>
        </Row>
    )
  }