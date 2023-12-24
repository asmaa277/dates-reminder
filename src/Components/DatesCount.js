import React from "react";
import { Alert, Col, Row } from "react-bootstrap";

const DatesCount = ({ per }) => {
  return (
    <Row className="justify-content-center mb-2">
      <Col sm="8" className="text-center">
        <Alert className="btn-style">لديك {per.length} مواعيد اليوم</Alert>
      </Col>
    </Row>
  );
};

export default DatesCount;
