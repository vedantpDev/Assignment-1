import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const Signin = (props) => {
  const saveHandler = () => {};

  return (
    <div>
      <Modal show={props.show} onHide={props.closeSignin}>
        <Modal.Header closeButton>
          <Modal.Title>Insert New Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                name="name"
                // onChange={insertDataCh}
                placeholder="Enter Name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                // onChange={insertDataCh}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="password"
                name="password"
                // onChange={insertDataCh}
                placeholder="Password"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.closeSignin}>
            Close
          </Button>
          <Button variant="primary" onClick={saveHandler}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Signin;
