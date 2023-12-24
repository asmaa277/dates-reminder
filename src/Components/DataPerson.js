import React from 'react'
import { Col, Row } from 'react-bootstrap';

const DataPerson = ({person}) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="">
        <div className="rectangle p-4">
          {person.length ? (
            person.map((item) => {
              return (
                <div key={item.id} className="d-flex border-bottom my-4">
                  <img src={item.img} alt="1" className="img-avatar"></img>
                  <div className="px-3">
                    <p className="d-inline fs-4 ">{item.name}</p>
                    <p className=" fs-6">{item.date}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>لا يوجد مواعيد اليوم</h1>
          )}
        </div>
      </Col>
    </Row>
  );
}

export default DataPerson
