import React from 'react'
import { Col, Row } from 'react-bootstrap';

const DatesAction = ({delet, view}) => {
  return (
    <Row className="justify-content-center m-2">
      <Col sm="8" className="d-flex justify-content-between">
        <button onClick={view} className="btn-style p-2">عرض المواعيد </button>
        <button onClick={delet} className="btn-style p-2">مسح الكل</button>
      </Col>
    </Row>
  );
}

export default DatesAction
